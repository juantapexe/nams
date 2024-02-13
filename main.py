import random

def generate_valentines_message():
    messages = [
        "Roses are red, violets are blue, sugar is sweet, and so are you.",
        "You're the best thing that's ever happened to me. Happy Valentine's Day!",
        "I love you more than words can express. Happy Valentine's Day!",
        # Add more messages as needed
    ]
    return random.choice(messages)

# Example usage:
valentines_message = generate_valentines_message()
print(valentines_message)
