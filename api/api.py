from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)


@app.route('/taxis_rides')
@cross_origin()
def get_taxis_rides():
    return {
        "taxis_rides": TAXIS_RIDES_DATA,
    }


TAXIS_RIDES_DATA = [
    {
        "id": 1,
        "distance": 2,
        "startTime": "2020-06-19T13:01:17.031Z",
        "duration": 9000
    },
    {
        "id": 2,
        "distance": 1,
        "startTime": "2020-06-19T12:01:17.031Z",
        "duration": 6000
    },
    {
        "id": 3,
        "distance": 5,
        "startTime": "2020-06-19T14:01:17.031Z",
        "duration": 7000
    },
    {
        "id": 4,
        "distance": 5,
        "startTime": "2020-06-19T14:11:17.031Z",
        "duration": 4000
    },
    {
        "id": 5,
        "distance": 5,
        "startTime": "2020-06-19T18:11:17.031Z",
        "duration": 7000
    },
    {
        "id": 6,
        "distance": 2,
        "startTime": "2020-06-19T18:11:17.031Z",
        "duration": 9000
    },
    {
        "id": 7,
        "distance": 1,
        "startTime": "2020-06-19T21:11:17.031Z",
        "duration": 6000
    },
    {
        "id": 8,
        "distance": 1,
        "startTime": "2020-06-19T17:11:17.031Z",
        "duration": 6000
    }
]
