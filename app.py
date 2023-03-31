from flask import Flask, render_template, request
import math
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

app = Flask(__name__)

class FlaskROS2Subscriber(Node):
    def __init__(self):
        super().__init__('flask_ros2_subscriber')
        self.subscription = self.create_subscription(
            String,
            'flask_topic',
            self.listener_callback,
            10)

    def listener_callback(self, msg):
        data = msg.data
        # Process data received from the ROS2 topic and forward it to the appropriate route
        app.test_client().post('/joystick', json=data)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/joystick', methods=['POST'])
def joystick():
    data = request.get_json()
    # Rest of your code

if __name__ == '__main__':
    rclpy.init(args=None)
    flask_ros2_subscriber = FlaskROS2Subscriber()

    try:
        app.run(host='0.0.0.0', debug=True)
    finally:
        flask_ros2_subscriber.destroy_node()
        rclpy.shutdown()
