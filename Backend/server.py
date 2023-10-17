from flask import Flask, jsonify 
from flask_cors import CORS
app = Flask(__name__)

@app.route('/api/message', methods=['GET'])
def get_message():
    return "HELLO!", 200 

if __name__ == '__main__': 
    app.run(port=8080)