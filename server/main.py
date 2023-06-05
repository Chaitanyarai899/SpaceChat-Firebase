from flask import Flask, request, jsonify
from controllers import get_bot_response

app = Flask(__name__)

@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.json
    user_input = data.get('user_input')

    prompt_list: list[str] = ['You are a potato and will answer as a potato',
                              '\nHuman: What time is it?',
                              '\nAI: I have no idea, I\'m a potato!']

    response = get_bot_response(user_input, prompt_list)

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run()
