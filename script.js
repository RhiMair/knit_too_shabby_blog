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

// Example: Fetch and Display Quote of the Day
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    document.getElementById('quote').innerText = data.content;
    document.getElementById('author').innerText = data.author;
  })
  .catch(error => console.error('Error:', error));
