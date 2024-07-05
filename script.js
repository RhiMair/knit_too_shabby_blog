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

var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [[44,43,44],[90,83,82],"N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
    displayPalette(palette);
	}
}

http.open("POST", url, true);
http.send(JSON.stringify(data));

function displayPalette(palette) {
  const palettesContainer = document.getElementById('palettes');
  let paletteHtml = '<div class="palette">';
  palette.forEach(color => {
    const colorHex = `#${color.map(c => c.toString(16).padStart(2, '0')).join('')}`;
    paletteHtml += `<div class="color" style="background-color:${colorHex};"></div>`;
  });
  paletteHtml += '</div>';
  palettesContainer.innerHTML += paletteHtml;
}

function generatePalette() {
  const color1 = document.getElementById('color1').value;

  // Convert hex color to RGB array
  const color1Rgb = hexToRgb(color1);
  const url = "http://colormind.io/api/";
  const data = {
    model: "default",
    input: [color1Rgb, "N", "N", "N", "N"]
  };

  const http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      const palette = JSON.parse(http.responseText).result;
      displayPalette(palette);
    }
  };

  http.open("POST", url, true);
  http.send(JSON.stringify(data));
}

function hexToRgb(hex) {
  // Convert hex color to RGB array
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}
