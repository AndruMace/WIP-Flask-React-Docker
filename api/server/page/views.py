import os

from flask import Blueprint
from flask import __version__
from flask import render_template

from server.extensions import db
from server.initializers import redis


page = Blueprint("page", __name__)


@page.get("/")
def home():
    return {'res' : 'Success'}

@page.get("/up")
def up():
    redis.ping()
    db.engine.execute("SELECT 1")
    return ""
