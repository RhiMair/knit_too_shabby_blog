// src/App.js

import React from 'react';
import LikeButton from './LikeButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Blog</h1>
      <div className="blog-post">
        <h2>Blog Post Title</h2>
        <p>This is a paragraph of the blog post. It contains interesting content.</p>
        <LikeButton />
      </div>
    </div>
  );
}

export default App;
