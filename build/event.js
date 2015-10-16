/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/10/12
 * @description
 *
 */


var LikeButton = React.createClass({displayName: "LikeButton",
  getInitialState: function () {
    return {liked: false};
  },
  handleClick: function (event) {
    this.setState({liked: !this.state.liked})
  },
  render: function () {
    var text = this.state.liked ? 'like': 'haven\'t liked!';
    return (
      React.createElement("p", {onClick: this.handleClick}, 
      "You ", text, " this,Click to toggle."
      )
    );
  }
});

ReactDOM.render(
  React.createElement(LikeButton, null),
  document.getElementById('example2')
);