
# Cortana
>**Google Gemini chat application Python-Flask, JavaScript**
>This project is a chat application using Google Gemini API with a Flask back-end and a front-end built with HTML, CSS, and JavaScript.

## How to Run the App
Follow these steps to get the app running locally:

1. **Clone the repo** 
Clone or download this repository to your local machine
```
git clone https://github.com/aryansnagar/gemini-chatbot.git
```

2. **Env file**
Replace `1234` with your Gemini-API key that you can get from [Google AI Studio](https://aistudio.google.com/apikey)

3. **Set up Python environment and install dependencies**  
Open a terminal/command prompt in the project root folder and run the following commands

```
python -m venv .venv
.venv\Scripts\activate
pip install flask google-genai python-dotenv
```

4. **Run the Flask app**  
Start the Flask development server with
```
python main.py
```

5. **Open the app**  
Go to `http://localhost:5000` in your browser to use the chat app.


## Frontend

The frontend files are located in the `templates` and `static` folders:

- `templates/index.html`  Contains the main HTML structure, including the message list and input field.
- `static/css/style.css`  CSS file to style the frontend interface.
- `static/js/main.js`  JavaScript file that handles sending messages to and receiving replies from the Flask backend.  

>Make sure in `index.html` to reference CSS and JS as follows
>```
><link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
><script src="{{ url_for('static', filename='js/main.js') }}"></script>
>```

## Backend

- `main.py`  The Flask Python script that runs the backend server, exposes the `/api/chat` POST endpoint, and communicates with the Gemini API.
- `.env`  Contains your Gemini API key and any other environment variables.
---
With Love 💗 Aryan Nagar.
