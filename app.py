from flask import Flask, render_template, request
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/joystick', methods=['POST'])
def joystick():
    data = request.get_json()
    x = data['x']
    y = data['y']
    r = math.sqrt(x**2 + y**2)
    print(f"Joystick position: x={x}, y={y}, r={r}")
    return {'result': 'success'}

if __name__ == '__main__':
    app.run(host='0.0.0.0' ,debug=False)