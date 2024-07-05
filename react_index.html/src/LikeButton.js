'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    // Retrieve the likes and likedItems arrays from localStorage or initialize them
    const savedLikes = localStorage.getItem('likes');
    const savedLikedItems = localStorage.getItem('likedItems');
    this.state = { 
      likes: savedLikes ? JSON.parse(savedLikes) : [], 
      likedItems: savedLikedItems ? JSON.parse(savedLikedItems) : [] 
    };
  }

  componentDidMount() {
    const { id } = this.props;
    // Ensure the likes array has a count for this button
    this.setState((prevState) => {
      const likes = [...prevState.likes];
      const likedItems = [...prevState.likedItems];
      if (likes[id] === undefined) {
        likes[id] = 0;
      }
      return { likes, likedItems };
    });
  }

  handleLike = () => {
    const { id } = this.props;

    // Prevent liking the same item multiple times
    if (this.state.likedItems.includes(id)) {
      return;
    }

    this.setState(
      (prevState) => {
        const likes = [...prevState.likes];
        const likedItems = [...prevState.likedItems];
        likes[id] += 1;
        likedItems.push(id);
        return { likes, likedItems };
      },
      () => {
        localStorage.setItem('likes', JSON.stringify(this.state.likes));
        localStorage.setItem('likedItems', JSON.stringify(this.state.likedItems));
      }
    );
  };

  render() {
    const { id } = this.props;
    const isLiked = this.state.likedItems.includes(id);
    return e(
      'div',
      { className: 'like-button-container' },
      e(
        'button',
        { 
          className: `like-button ${isLiked ? 'liked' : ''}`, 
          onClick: this.handleLike,
          disabled: isLiked // Disable the button if already liked
        },
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
