
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

function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

document.getElementById('showSurprise').addEventListener('click', function() {
  var surpriseDiv = document.getElementById('surprise');
  var surpriseText = document.getElementById('surpriseText');
  var randomPhrase = getRandomPhrase();
  
  surpriseText.textContent = randomPhrase;
  
  surpriseDiv.style.display = 'block';
});

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

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

document.getElementById('showSurprise').addEventListener('click', function() {
  var surpriseDiv = document.getElementById('surprise');
  var surpriseImage = document.getElementById('surpriseImage');
  
  surpriseImage.src = getRandomImage();
  
  surpriseDiv.style.display = 'block';
});
