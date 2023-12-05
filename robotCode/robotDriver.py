import RPi.GPIO as GPIO
from flask import Flask, jsonify, request
import threading

app = Flask(__name__)

# Motor GPIO Pin Setup
in1 = 24
in2 = 23
en = 25

GPIO.setmode(GPIO.BCM)
GPIO.setup(in1, GPIO.OUT)
GPIO.setup(in2, GPIO.OUT)
GPIO.setup(en, GPIO.OUT)
GPIO.output(in1, GPIO.LOW)
GPIO.output(in2, GPIO.LOW)
pwm = GPIO.PWM(en, 1000)
pwm.start(25)  # Starting with a duty cycle of 25%

# Define a flag for autonomous operation
autonomous_active = threading.Event()

def move_forward(speed=25):
    GPIO.output(in1, GPIO.HIGH)
    GPIO.output(in2, GPIO.LOW)
    pwm.ChangeDutyCycle(speed)

def move_backward(speed=25):
    GPIO.output(in1, GPIO.LOW)
    GPIO.output(in2, GPIO.HIGH)
    pwm.ChangeDutyCycle(speed)

def stop_motor():
    GPIO.output(in1, GPIO.LOW)
    GPIO.output(in2, GPIO.LOW)

@app.route('/start', methods=['POST'])
def start_robot():
    autonomous_active.set()
    move_forward(50)  # Example: move forward at medium speed
    return jsonify({"message": "Robot started"}), 200

@app.route('/stop', methods=['POST'])
def stop_robot():
    autonomous_active.clear()
    stop_motor()
    return jsonify({"message": "Robot stopped"}), 200

if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=5000)
    except KeyboardInterrupt:
        GPIO.cleanup()