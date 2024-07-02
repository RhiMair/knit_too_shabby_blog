// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './LikeButton';
import './index.css';

// Find the root element where the LikeButton should be rendered
const likeButtonRoot = document.getElementById('like-button-root');

if (likeButtonRoot) {
  ReactDOM.render(<LikeButton />, likeButtonRoot);
}
