from flask import Flask, render_template, request
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/joystick', methods=['POST'])
def joystick():
    data = request.get_json()
    if data['type'] == 'joystick':
        x = float(data['x'])
        y = float(data['y'])
        r = math.sqrt(x**2 + y**2)
        print(f"Joystick position: x={x}, y={y}, r={r}")
        return {'result': 'success'}
    elif data['type'] == 'shoot':
        print(data['shoot'])
        return {'result': 'success'}
    elif data['type'] == 'stage_up':
        print(data['stage_up'])
        return {'result': 'success'}
    elif data['type'] == 'stage_down':
        print(data['stage_down'])
        return {'result': 'success'}
    elif data['type'] == 'cal_pos':
        print(data['cal_pos'])
        return {'result': 'success'}
    elif data['type'] == 'turn_left':
        print(data['turn_left'])
        return {'result': 'success'}
    elif data['type'] == 'turn_right':
        print(data['turn_right'])
        return {'result': 'success'}

if __name__ == '__main__':
    app.run(host='0.0.0.0' ,debug=True)
