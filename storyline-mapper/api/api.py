import time
from flask import Flask
from flask_restful import Api, Resource, reqparse, fields, marshal_with, abort
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class CharacterModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(100), nullable=False)
    
    def __repr__(self):
        return f"Character(name = {self.name}, gender = {self.gender})"

#db.create_all()

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
        character = CharacterModel(id=character_id, name=args['name'], gender=args['gender'])
        db.session.add(character)
        db.session.commit()
        return character, 201
    
    @marshal_with(resource_fields)
    def patch(self, character_id):
        args = character_update_args.parse_args()
        result = CharacterModel.query.filter_by(id=character_id).first()
        if not result:
            abort(404, message="Could not find character with that ID...")
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
        

api.add_resource(Character, "/character/<int:character_id>")

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == "__main__":
    app.run(debug=True)