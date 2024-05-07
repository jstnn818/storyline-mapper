from flask import Blueprint
from flask_restful import Api, Resource, reqparse, fields, marshal_with, abort

from models import CharacterModel
from db import db

character = Blueprint('character', __name__)
api = Api(character)

character_put_args = reqparse.RequestParser()
character_put_args.add_argument("name", type=str, help="Name of character", required=True)
character_put_args.add_argument("gender", type=str, help="Gender of character", required=True)

character_update_args = reqparse.RequestParser()
character_update_args.add_argument("name", type=str, help="Name of character")
character_update_args.add_argument("gender", type=str, help="Gender of character")

resource_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'gender': fields.String,
}

class CharacterList(Resource):
    
    @marshal_with(resource_fields)
    def get(self):
        result = CharacterModel.query.all()
        return result

class Character(Resource):
    
    @marshal_with(resource_fields)
    def get(self, character_id):
        result = CharacterModel.query.filter_by(id=character_id).first()
        if not result:
            abort(404, message="Could not find character with that ID...")
        return result
    
    @marshal_with(resource_fields)
    def put(self, character_id):
        result = CharacterModel.query.filter_by(id=character_id).first()
        if result:
            abort(409, message="Character ID already taken...")
            
        args = character_put_args.parse_args()
        object = CharacterModel(id=character_id, name=args['name'], gender=args['gender'])
        
        db.session.add(object)
        db.session.commit()
        return object, 201

    @marshal_with(resource_fields)
    def patch(self, character_id):
        result = CharacterModel.query.filter_by(id=character_id).first()
        if not result:
            abort(404, message="Could not find character with that ID...")
            
        args = character_update_args.parse_args()
        if args['name']:
            result.name = args['name']
        if args['gender']:
            result.gender = args['gender']

        db.session.commit()
        return result, 201
    
    @marshal_with(resource_fields)
    def delete(self, character_id):
        result = CharacterModel.query.filter_by(id=character_id).first()
        if not result:
            abort(404, message="Could not find character with that ID...")
            
        db.session.delete(result)
        db.session.commit()
        return '', 204

api.add_resource(CharacterList, "/character")
api.add_resource(Character, "/character/<int:character_id>")