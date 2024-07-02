'use strict';

  const e = React.createElement;

  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      const savedLikes = localStorage.getItem('likes');
      this.state = { likes: savedLikes ? parseInt(savedLikes, 10) : 0 };
    }

    handleLike = () => {
      this.setState(
        (prevState) => ({ likes: prevState.likes + 1 }),
        () => {
          localStorage.setItem('likes', this.state.likes);
        }
      );
    };

    render() {
      return e(
        'div',
        { className: 'like-button-container' },
        e(
          'button',
          { className: 'like-button', onClick: this.handleLike },
          'Likes'
        ),
        e(
          'span',
          { className: 'likes-count' },
          this.state.likes
        )
      );
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const likeButtonContainers = document.querySelectorAll('.like_button_container');
    likeButtonContainers.forEach(container => {
      const root = ReactDOM.createRoot(container);
      root.render(e(LikeButton));
    });
  });