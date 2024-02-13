import random

messages = [
    "Roses are red, violets are blue, sugar is sweet, and so are you.",
    "You're the best thing that's ever happened to me. Happy Valentine's Day!",
    "I love you more than words can express. Happy Valentine's Day!",
    "You make my heart skip a beat. Happy Valentine's Day, my love!",
    "Every moment with you is precious. Happy Valentine's Day!",
    "You're my sunshine on a cloudy day. Happy Valentine's Day, sweetheart!",
    "My love for you grows stronger with each passing day. Happy Valentine's Day!",
    "I'm so grateful to have you in my life. Happy Valentine's Day!",
    "You're the one I've been dreaming of. Happy Valentine's Day, my love!",
    "I cherish every moment we spend together. Happy Valentine's Day!"
]

valentine_message = random.choice(messages)

print(valentine_message)
from flask import Flask

app = Flask(__name__)

@app.route('/valentine-message')
def valentine_message():
    message = generate_valentines_message()
    return message

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode
