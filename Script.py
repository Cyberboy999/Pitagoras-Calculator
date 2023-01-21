from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/pitagoras', methods=['POST'])
def pitagoras():
    data = request.get_json()
    a = data['a']
    b = data['b']
    c = (a**2 + b**2)**(1/2)
    return jsonify({'c': c})

if __name__ == '__main__':
    app.run(debug=True)
