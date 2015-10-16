/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/10/11
 * @description
 *
 */
var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function () {
    return (
      React.createElement("p", null, 
      "Hello, ", React.createElement("input", {type: "text", placeholder: "Your name here"}), "!" + ' ' +
      "It is ", this.props.date.toTimeString()
      )
    )
  }
});

setInterval(function (){
  ReactDOM.render(
    React.createElement(HelloWorld, {date: new Date()}),
    document.getElementById('example')
  )
},500);
