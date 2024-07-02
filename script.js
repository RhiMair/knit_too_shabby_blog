// script.js

// Example JavaScript code
function greetUser() {
  var userName = prompt("Please enter your name:");
  if (userName != null && userName != "") {
    alert("Hello, " + userName + "! Welcome to our blog.");
  }
}

// Image Slider
var currentIndex = 0;
var images = ["Images/Petal_drop_sock.jpg", "Images/Raglan_creabea_sweater.png", "Images/Yellow_Jumper.jpg"];

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  var imageUrl = images[currentIndex];
  document.getElementById("sliderImage").src = imageUrl;
}

// Example: Fetch and Display a Joke
fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(data => {
    document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
  })
  .catch(error => console.error('Error:', error));
