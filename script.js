// Define an array of random phrases
const phrases = [
  "You mean everything to me.",
  "I love you more than words can express.",
  "You're the best thing that's ever happened to me.",
  "Every moment with you is a blessing.",
  "You light up my world.",
  "You're my everything and more.",
  "I'm so grateful to have you in my life.",
  "My love for you knows no bounds.",
  "You're the reason I smile every day.",
  "I cherish every moment we spend together."
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
  "image1.jpg",
  "image2.jpg",
  "IMG_6353.jpeg",
  "https://raw.githubusercontent.com/juantapexe/nams/main/IMG_1436.jpeg",
  // Add more image URLs as needed
];

// Function to get a random image URL
function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

// Event listener for the "Click to Relive Memories" button
document.getElementById('showSurprise').addEventListener('click', function() {
  var surpriseDiv = document.getElementById('surprise');
  var surpriseText = document.getElementById('surpriseText');
  var surpriseImage = document.getElementById('surpriseImage');
  
  // Set the random image source
  surpriseImage.src = getRandomImage();
  
  // Show the surprise div
  surpriseDiv.style.display = 'block';
});

