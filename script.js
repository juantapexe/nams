// Define an array of random phrases
const phrases = [
  "You mean everything to me.",
  "But there has been a lil bit of error.",
  "You're the best thing that's ever happened to me.",
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
  "Happy Valentine’s Day to the most special person in my life.",
  "Once again thank you very much for the jibbitz I love em."
  // Added a comma after the last phrase
];

// Function to get a random phrase
function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

// Event listener for the "Click to Reveal" button
document.getElementById('showSurprise').addEventListener('click', function() {
  var surpriseDiv = document.getElementById('surprise');
  var surpriseText = document.getElementById('surpriseText');
  var randomPhrase = getRandomPhrase();
  
  // Set the random phrase text
  surpriseText.textContent = randomPhrase;
  
  // Show the surprise div
  surpriseDiv.style.display = 'block';
});

// Define an array of image URLs
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
  // Removed the commented line and added a comma after the last image URL
];

// Function to get a random image URL
function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

// Event listener for the "Click to Relive Memories" button
document.getElementById('showSurprise').addEventListener('click', function() {
  var surpriseDiv = document.getElementById('surprise');
  var surpriseImage = document.getElementById('surpriseImage');
  
  // Set the random image source
  surpriseImage.src = getRandomImage();
  
  // Show the surprise div
  surpriseDiv.style.display = 'block';
});
