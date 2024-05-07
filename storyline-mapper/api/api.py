import time
from flask import Flask
from flask_restful import Api
from resources.character import character

from db import db

app = Flask(__name__)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(character)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == "__main__":
    app.run(debug=True)