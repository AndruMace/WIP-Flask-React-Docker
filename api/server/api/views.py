import os

from flask import Blueprint
from flask import __version__
from flask import request

from server.extensions import db
from server.initializers import redis


api = Blueprint("api", __name__)


@api.get("/")
def home():
    return {'Success' : 'API Hit'}

@api.post("/register")
def register():
    user_information = request.json
    print(user_information)

    if (user_information is not None):
        return {'Success' : user_information}
    else:
        return {'Error' : 'no data'}


@api.get("/up")
def up():
    db.engine.execute("SELECT 1")
    return ""
