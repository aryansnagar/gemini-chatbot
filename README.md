# OSLO (Gemini Chat application Python-Flask, JavaScript)

This project is a simple chat application using Google Gemini API with a Flask backend and a frontend built with HTML, CSS, and JavaScript.

## How to Run the App

Follow these steps to get the app running locally:

1. **Download the code**  
   Clone or download this repository to your local machine.

2. **In the `.env` file**  
Replace `1234` with your Gemini-API key that you can get from [Google AI Studio](https://aistudio.google.com/apikey)

3. **Set up Python environment and install dependencies**  
   Open a terminal/command prompt in the project root folder and run the following commands:

```
python -m venv .venv
.venv\Scripts\activate
```

4. **Run the Flask app**  
Start the Flask development server with:
```
python main.py
```

5. **Open the app**  
Go to `http://localhost:5000` in your browser to use the chat app.


## Frontend Files

The frontend files are located in the `templates` and `static` folders:

- `templates/index.html`  
Contains the main HTML structure, including the message list and input field.

- `static/css/style.css`  
CSS file to style the frontend interface.

- `static/js/main.js`  
JavaScript file that handles sending messages to and receiving replies from the Flask backend.  

>(Make sure in `index.html` to reference CSS and JS as follows:)

>```
><link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
><script src="{{ url_for('static', filename='js/main.js') }}"></script>
>```

---

## Backend Files

- `main.py`  
The Flask Python script that runs the backend server, exposes the `/api/chat` POST endpoint, and communicates with the Gemini API.

- `.env`  
Contains your Gemini API key and any other environment variables.

---

With Love 🥰 Aryan Nagar