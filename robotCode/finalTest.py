import RPi.GPIO as GPIO
from flask import Flask, jsonify, request
from time import sleep

app = Flask(__name__)

# Motor control setup
in1 = 20
in2 = 21
en = 16
in1_2 = 19
in2_2 = 26
en_2 = 13

# Initialize GPIO pins for motors
def setup_gpio():
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(in1, GPIO.OUT)
    GPIO.setup(in2, GPIO.OUT)
    GPIO.setup(en, GPIO.OUT)
    GPIO.output(in1, GPIO.LOW)
    GPIO.output(in2, GPIO.LOW)
    p = GPIO.PWM(en, 1000)

    GPIO.setup(in1_2, GPIO.OUT)
    GPIO.setup(in2_2, GPIO.OUT)
    GPIO.setup(en_2, GPIO.OUT)
    GPIO.output(in1_2, GPIO.LOW)
    GPIO.output(in2_2, GPIO.LOW)
    p2 = GPIO.PWM(en_2, 1000)

    p.start(75)
    p2.start(75)
    return p, p2

p, p2 = setup_gpio()

def move_forward():
    GPIO.output(in1, GPIO.HIGH)
    GPIO.output(in2, GPIO.LOW)
    GPIO.output(in1_2, GPIO.HIGH)
    GPIO.output(in2_2, GPIO.LOW)

def move_backward():
    GPIO.output(in1, GPIO.LOW)
    GPIO.output(in2, GPIO.HIGH)
    GPIO.output(in1_2, GPIO.LOW)
    GPIO.output(in2_2, GPIO.HIGH)

def stop():
    GPIO.output(in1, GPIO.LOW)
    GPIO.output(in2, GPIO.LOW)
    GPIO.output(in1_2, GPIO.LOW)
    GPIO.output(in2_2, GPIO.LOW)

def autoOperation():
    # Move forward for 3 seconds
    move_forward()
    sleep(3)
    
    # Stop
    stop()
    sleep(1)

    # Turn around (assuming this means reversing direction)
    move_backward()
    sleep(3)

    # Stop
    stop()

@app.route('/start', methods=['POST'])
def start_robot():
    autoOperation()
    return jsonify({"status": "Robot started"}), 200

@app.route('/stop', methods=['POST'])
def stop_robot():
    stop()
    return jsonify({"status": "Robot stopped"}), 200

if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=5000)
    except KeyboardInterrupt:
        GPIO.cleanup()
