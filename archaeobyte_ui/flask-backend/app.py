from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.json  # Expecting JSON data from frontend
        # Simulate processing without database
        print("Data received:", data)
        return jsonify({'message': 'Registration successful!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=3001)
