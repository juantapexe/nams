// --- 1. Your Phrases ---
const phrases = [
    "youre so secsy that even life gets hard.",
    "But there has been a lil bit of error.",
    "how much beauty sleep does one need to look that good.",
    "Every moment with you is a blessing.",
    "Just know that im never letting you go.",
    "I didnt time it right.",
    "I'm so grateful to have you in my life.",
    "I actually got you something.",
    "You're the reason I smile every day.",
    "I cherish every moment we spend together.",
    "In case you ever foolishly forget: I am never not thinking about you.",
    "I love how youre the cause of this relationship.",
    "Mine.",
    "To the only person id share my snacks with.",
    "To my favourite snack.",
    "nerd saali.",
    "Once again thank you very much for the jibbitz I love them."
];

// --- 2. Your Images ---
const images = [
    "IMG_1436.jpeg",
    "IMG_1544.jpeg",
    "IMG_1937.jpeg",
    "IMG_1945.jpeg",
    "IMG_6353.jpeg",
    "IMG_1424.jpeg",
    "72793484987__07C4C528-83C1-4284-A062-3EF04A3B8B6E.jpeg",
    "IMG_0896.jpeg",
    "IMG_5371.jpeg",
    "IMG_5944.jpeg",
    "IMG_6114.jpeg",
    "IMG_6515.jpeg",
    "IMG_8075.jpeg"
];

// --- 3. Your Helper Functions (Perfect!) ---
function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

// --- 4. Your COMBINED Click Function ---
document.getElementById('showSurprise').addEventListener('click', function() {
    // Get all the elements you want to change
    var surpriseDiv = document.getElementById('surprise');
    var surpriseText = document.getElementById('surpriseText');
    var surpriseImage = document.getElementById('surpriseImage');
    
    // Call BOTH of your random functions
    var newPhrase = getRandomPhrase();
    var newImage = getRandomImage();
    
    // Set the text and the image source
    surpriseText.textContent = newPhrase;
    surpriseImage.src = newImage;
    
    // Show the whole surprise div
    surpriseDiv.style.display = 'block';
});
