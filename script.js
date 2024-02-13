document.getElementById('showSurprise').addEventListener('click', function() {
  var surpriseDiv = document.getElementById('surprise');
  if (surpriseDiv.style.display === 'none') {
    surpriseDiv.style.display = 'block';
  } else {
    surpriseDiv.style.display = 'none';
  }
});
