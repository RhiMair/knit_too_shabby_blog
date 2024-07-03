'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    // Retrieve the likes array from localStorage or initialize it
    const savedLikes = localStorage.getItem('likes');
    this.state = { likes: savedLikes ? JSON.parse(savedLikes) : [] };
  }

  componentDidMount() {
    const { id } = this.props;
    // Ensure the likes array has a count for this button
    this.setState((prevState) => {
      const likes = [...prevState.likes];
      if (likes[id] === undefined) {
        likes[id] = 0;
      }
      return { likes };
    });
  }

  handleLike = () => {
    const { id } = this.props;
    this.setState(
      (prevState) => {
        const likes = [...prevState.likes];
        likes[id] += 1;
        return { likes };
      },
      () => {
        localStorage.setItem('likes', JSON.stringify(this.state.likes));
      }
    );
  };

  render() {
    const { id } = this.props;
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
        this.state.likes[id]
      )
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const likeButtonContainers = document.querySelectorAll('.like_button_container');
  likeButtonContainers.forEach((container, index) => {
    const root = ReactDOM.createRoot(container);
    root.render(e(LikeButton, { id: index }));
  });
});
