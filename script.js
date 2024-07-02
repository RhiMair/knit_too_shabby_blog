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

// Colour palette API
fetch('https://www.colourlovers.com/api/palettes/top?format=json')
  .then(response => response.json())
  .then(data => {
    let palettesHtml = '';
    data.forEach(palette => {
      let colorsHtml = '';
      palette.colors.forEach(color => {
        colorsHtml += `<div style="background-color:#${color}; width:20px; height:20px; display:inline-block;"></div>`;
      });
      palettesHtml += `<div>
        <h3>${palette.title}</h3>
        ${colorsHtml}
      </div>`;
    });
    document.getElementById('palettes').innerHTML = palettesHtml;
  })
  .catch(error => console.error('Error:', error));

