import werkzeug, os, sys

from flask import Blueprint
from flask_restful import Api, Resource, reqparse, fields, marshal_with, abort
from werkzeug.utils import secure_filename
from PIL import Image

from models import MapModel
from config import Config
from db import db

map = Blueprint('map', __name__)
api = Api(map)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

map_put_args = reqparse.RequestParser()
map_put_args.add_argument("name", required=True, type=str, help="Name of map")
map_put_args.add_argument('file', required=True, type=werkzeug.datastructures.FileStorage, location='files')

map_update_args = reqparse.RequestParser()
map_update_args.add_argument("name", type=str, help="Name of map")
map_update_args.add_argument('file', type=werkzeug.datastructures.FileStorage, location='files')


resource_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'filepath': fields.String,
    'width': fields.Integer,
    'height': fields.Integer
}

class MapList(Resource):
    
    def allowed_files(self, filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
        
    @marshal_with(resource_fields)
    def get(self):
        result = MapModel.query.all()
        return result
    
    @marshal_with(resource_fields)
    def post(self):
        args = map_put_args.parse_args()
        image = args['file']

        if image and self.allowed_files(image.filename):
            filename = secure_filename(image.filename)
            filepath = os.path.join(Config.UPLOAD_FOLDER, filename)
            image.save(filepath)
            img = Image.open(filepath)
            new_map = MapModel(name=args['name'], filepath=filename, width=img.width, height=img.height)
            db.session.add(new_map)
            db.session.commit()
            return new_map, 201
        else:
            return {'message': 'File type not allowed'}, 400

class Map(Resource):
    @marshal_with(resource_fields)
    def get(self, map_id):
        result = MapModel.query.filter_by(id=map_id).first()
        if not result:
            abort(404, message="Could not find map with that ID...")
        print(f"Width: {result.width}, Height: {result.height}", file=sys.stderr)
        return result
    
    @marshal_with(resource_fields)
    def patch(self, map_id):
        result = MapModel.query.filter_by(id=map_id).first()
        if not result:
            abort(404, message="Could not find map with that ID...")
            
        args = map_update_args.parse_args()
        image = args['file']
        if args['name']:
            result.name = args['name']
        if image:
            filename = secure_filename(image.filename)
            filepath = os.path.join(Config.UPLOAD_FOLDER, filename)
            image.save(filepath)
            img = Image.open(filepath)

            result.filepath = filename
            result.width = img.width
            result.height = img.height

        db.session.commit()
        return result, 201
    
    @marshal_with(resource_fields)
    def delete(self, map_id):
        result = MapModel.query.filter_by(id=map_id).first()
        if not result:
            abort(404, message="Could not find map with that ID...")
        try:
            os.remove(os.path.join(Config.UPLOAD_FOLDER, result.filepath))
        except:
            abort(404, message="Could not find image at that filepath...")
        db.session.delete(result)
        db.session.commit()
        return '', 204

api.add_resource(MapList, "/map")
api.add_resource(Map, "/map/<int:map_id>")