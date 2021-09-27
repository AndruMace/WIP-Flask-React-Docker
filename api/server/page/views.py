import os

from flask import Blueprint
from flask import __version__
from flask import render_template

from server.extensions import db
from server.initializers import redis


page = Blueprint("page", __name__)

def get_hit_count():
    retries = 5
    while True:
        try: 
            return cache.incr('hits')
        except redis.exceptions.Connectionerror as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

@page.get("/")
def home():
    count = get_hit_count()
    return {
        'reddis hits' : '{}'.format(count)
    }


@page.get("/up")
def up():
    redis.ping()
    db.engine.execute("SELECT 1")
    return ""
