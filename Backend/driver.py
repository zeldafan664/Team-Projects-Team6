from flask import Flask, jsonify, request
from gpiozero import Motor

app = Flask(__name__)

# Assume motor connected to GPIO17 & GPIO18
motor = Motor(17, 18)

# Mocking battery life for now
battery_life = 100  # represents 100%
task_completion_time = 60  # time in minutes

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
                   
                                    
    
    
    
    