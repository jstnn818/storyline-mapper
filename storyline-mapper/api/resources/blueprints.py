from resources.character import character
from resources.map import map

def create_blueprints(app):
    app.register_blueprint(character)
    app.register_blueprint(map)