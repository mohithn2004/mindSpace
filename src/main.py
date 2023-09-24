from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)

api_key = "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"
openai.api_key = api_key

model = "gpt-3.5-turbo-0613"

@app.route('/',methods=['GET'])
def index():
    return "Welcome to the Mental Health Chatbot API. Send a POST request to /chat to start a conversation."

@app.route('/chat', methods=['POST'])
def mental_health_chat():
    user_input = request.json.get('user_input')
    print(user_input)

    if user_input.lower() == 'exit':
        return jsonify({"bot_reply": "Conversation ended."})

    messages = [
        {
            "role": "system",
            "content": "You are a mental health chatbot. Provide guidance on overcoming mental health challenges. "
                       "You must answer only questions related to health and mental health, and nothing else. "
                       "If there is an irrelevant topic, you must reply 'Sorry, I can't assist with that.' "
                       "Be creative in making the user feel good."
        },
        {"role": "user", "content": user_input},
    ]

    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
    )

    bot_reply = response.choices[0].message['content']
    return jsonify({"bot_reply": bot_reply})

if __name__ == "__main__":
    app.run(debug=True)