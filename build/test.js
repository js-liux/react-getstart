/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/10/16
 * @description
 *
 */

var Test =  React.createClass({displayName: "Test",
  render: function(){
    return (
      React.createElement("h1", null, "hello world")
    )
  }
});

ReactDOM.render(React.createElement(Test, null), document.getElementById('example'));