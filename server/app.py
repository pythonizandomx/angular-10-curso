from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/get-movies', methods=['GET'])
def get_movies():

    return {
        "code": 200,
        "data": [
            {"id": 1, "title": "Soul"},
            {"id": 2, "title": "El club de la pelea"} 
        ]
    }


if __name__ == '__main__':
    app.run(host='localhost', port='5000', debug=True)