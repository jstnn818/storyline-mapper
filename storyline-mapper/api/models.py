from db import db

class MarkerModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)

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
    width = db.Column(db.Integer, nullable=False)
    height = db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        return f"Map(name = {self.name}, filepath = {self.filepath}, wh={self.width}x{self.height})"