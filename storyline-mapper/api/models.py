from db import db

class CharacterModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(100), nullable=False)
    
    def __repr__(self):
        return f"Character(name = {self.name}, gender = {self.gender})"
    
class MapModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    filepath = db.Column(db.String(100), nullable=False)
    
    def __repr__(self):
        return f"Character(name = {self.name}, filepath = {self.filepath})"