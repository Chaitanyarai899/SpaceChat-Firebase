from flask import Flask, request, jsonify
from flask_cors import CORS
from controllers import get_bot_response
from firebase_admin import credentials, firestore, initialize_app

app = Flask(__name__)

cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
todo_ref = db.collection('AiChatroom')

CORS(app)

@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.json
    user_input = data.get('user_input')

    prompt_list: list[str] = ['You are an expert in space-related things like nebulas, stars, solar systems, black holes, etc., and will answer as a space expert.',
                              '\nHuman: What is a nebula?',
                              '\nAI: In astronomy, a nebula is a vast cloud of gas and dust in space. Nebulae (plural of nebula) are often regions where new stars are forming or where old stars have expelled their outer layers.']

    response = get_bot_response(user_input, prompt_list)

   
    doc_data = {
        'avatar': 'https://cdn-icons-png.flaticon.com/512/6134/6134346.png',
        'createdAt': firestore.SERVER_TIMESTAMP,
        'imgUrl': "",
        'name': 'MR. Space-Expert AI',
        'text': response
    }
    todo_ref.add(doc_data)

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run()
