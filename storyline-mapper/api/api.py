import time
from flask import Flask, send_from_directory
from flask_restful import Api

from config import Config
from resources.blueprints import create_blueprints
from db import db, migrate

app = Flask(__name__)
api = Api(app)

app.config.from_object(Config)
db.init_app(app)
migrate.init_app(app, db)
create_blueprints(app)

with app.app_context():
    db.create_all()

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == "__main__":
    app.run(debug=True)