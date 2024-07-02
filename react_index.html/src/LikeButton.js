'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
  }

  render() {
    return e(
      'div',
      null,
      e(
        'button',
        { onClick: () => this.setState({ likes: this.state.likes + 1 }) },
        'Like'
      ),
      e(
        'p',
        null,
        `Likes: ${this.state.likes}`
      )
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));