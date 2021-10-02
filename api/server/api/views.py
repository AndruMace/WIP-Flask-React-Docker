import os

from flask import Blueprint
from flask import __version__
from flask import render_template

from server.extensions import db
from server.initializers import redis


api = Blueprint("api", __name__)


@api.get("/")
def home():
    return {'res' : 'Success'}

@api.get("/up")
def up():
    redis.ping()
    db.engine.execute("SELECT 1")
    return ""
