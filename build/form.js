/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/10/12
 * @description
 *
 */
var FromTest = React.createClass({displayName: "FromTest",
  getInitialState: function () {
    return {
      value: 'Hello!'
    }
  },
  handleChange: function (e) {
    this.setState({
      value: e.target.value
    })
  },

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", value: this.state.value, onChange: this.handleChange}), 
        React.createElement("input", {type: "radio", name: "opt", defaultChecked: true}), " option1", 
        React.createElement("input", {type: "radio", name: "opt"}), " option3"
      )
    );
  }
});
ReactDOM.render(React.createElement(FromTest, null), document.getElementById('example'));