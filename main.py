from flask import Flask, request, jsonify, render_template
from dotenv import load_dotenv
import os
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('query', '')

    if not user_message:
        return jsonify({'error': 'Empty query'}), 400

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=user_message
    )

    return jsonify({'reply': response.text})

if __name__ == '__main__':
    app.run(debug=True)
