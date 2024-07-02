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

document.addEventListener("DOMContentLoaded", function() {
  const accessToken = 'IGQWROYWFGc09hSV9la2QxcG9HTl9zZAlhheDlrRDVuUFBRcDlpcEh3V2JhOWx3ZAnVXTVEyWnVFV2g1ZAFdkTkhQa0t3cFRYWVdkZAXBMWGV6Y3dkUXMtME9wZAkwyYzVZAcXZAlN0xoU1JoRzNjSm1sUXRESFBselVSR28ZD'; // Replace with your Instagram access token
  const userId = '57032395944'; // Replace with the Instagram user ID

  fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`)
      .then(response => response.json())
      .then(data => {
          const feedContainer = document.getElementById('instagram-feed');
          data.data.forEach(post => {
              const postElement = document.createElement('div');
              postElement.className = 'instagram-post';
              
              if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') {
                  const imgElement = document.createElement('img');
                  imgElement.src = post.media_url;
                  postElement.appendChild(imgElement);
              } else if (post.media_type === 'VIDEO') {
                  const videoElement = document.createElement('video');
                  videoElement.src = post.media_url;
                  videoElement.controls = true;
                  postElement.appendChild(videoElement);
              }

              if (post.caption) {
                  const captionElement = document.createElement('p');
                  captionElement.textContent = post.caption;
                  postElement.appendChild(captionElement);
              }

              feedContainer.appendChild(postElement);
          });
      })
      .catch(error => {
          console.error('Error fetching Instagram feed:', error);
      });
});
