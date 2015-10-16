/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/10/11
 * @description
 *
 */
var HelloWorld = React.createClass({
  render: function () {
    return (
      <p>
      Hello, <input type="text" placeholder="Your name here" />!
      It is {this.props.date.toTimeString()}
      </p>
    )
  }
});

setInterval(function (){
  ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  )
},500);
