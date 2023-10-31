import math
import time
from flask import Flask, jsonify, request
from gpiozero import Motor, InputDevice, OutputDevice, PWMOutputDevice




from time import sleep 


app = Flask(__name__)

# Motor control for scrubbing brush here
# Assume motor connected to GPIO17 & GPIO18
motor = Motor(17, 18)

#Set up Grove Ultrasonic Ranger Sensors 
# Assuming SIG pin of the sensor is conencted to GPIO pin 25

TRIG = OutputDevice(25)
ECHO = InputDevice(25)

# Motor Control for wheels here 
# Initialize Motors


# Initialize motors
front_left = Motor(26, 19)
front_right = Motor(13, 6)
rear_left = Motor(21, 20)
rear_right = Motor(16, 12)

def move_forward():
    front_left.forward()
    front_right.forward()
    rear_left.forward()
    rear_right.forward()

def move_backward():
    front_left.backward()
    front_right.backward()
    rear_left.backward()
    rear_right.backward()

def turn_left():
    front_left.backward()
    front_right.forward()
    rear_left.backward()
    rear_right.forward()

def turn_right():
    front_left.forward()
    front_right.backward()
    rear_left.forward()
    rear_right.backward()

def stop():
    front_left.stop()
    front_right.stop()
    rear_left.stop()
    rear_right.stop()

# Wheel diamater in cm 
WHEEL_DIAMETER = 12.0 
CIRCUMFERENCE = (math.pi * WHEEL_DIAMETER) 
counts_per_cm = 1920 / CIRCUMFERENCE

def move_specific_distance(distance_cm, direction = 'forward'): 
    global left_encoder_count 
    global right_encoder_count 
    #reset encoder counts 
    left_encoder_count = 0 
    right_encoder_count = 0 
    
    desired_counts = distance_cm * counts_per_cm 
    
    if direction == 'forward': 
        move_forward()
        

# Mocking battery life for now
battery_life = 100  # represents 100%
task_completion_time = 60  # time in minutes

OBSTACLE_THRESHOLD = 0.1 # obstacle detection in meters 
def measure_distance(): 
    #Measure distance with the Ranger sensors; distance is returned in meters. 
    TRIG.on()
    sleep(0.00001) # 10 microseconds 
    TRIG.off()
    
    #Wait for the ECHO pin to go HIGH (start of the echo pulse)
    
    while ECHO.is_active == False: 
        pulse_start = time.time()
     #Wait for the ECHO pin to go LOW (end of echo pulse) 
     
    while ECHO.is_active == True: 
         pulse_end = time.time() 
         
    pulse_duration = pulse_end - pulse_start 
    #Speed of sound is approximately 343 m/s, so multiply speed / 2
    
    distance = (pulse_duration * 343.0 / 2.0)
    return distance 


@app.route('/status', methods=['GET'])
def status():
    global battery_life
    battery_life -= 1  # need to actually use a method to get battery status
    task_completion_time -= 1  # decrement remaining time
    
    return jsonify({
        "battery_life": battery_life,
        "time_remaining": task_completion_time
    })
    

@app.route('/control', methods=['POST'])
def control():
    action = request.json.get('action')
    
    if action == 'start':
        motor.forward()  # spin brush
    elif action == 'stop':
        motor.stop()  # stop brush
    elif action == 'pause':
        motor.stop()  # stop brush (pause and stop can be similar)
    
    return jsonify({"message": f"Action {action} executed!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
                   
                                    
    
    
    
    