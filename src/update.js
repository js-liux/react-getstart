/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/10/12
 * @description
 *
 */
var FromTest2 = React.createClass({
  getInitialState: function () {
    return {
      value: {
        foo: 'foo!'
      }
    }
  },
  handleChange: function (e) {
    var value = this.state.value;
    value.foo += '123';
    this.setState({
      value: value
    })
  },
  shouldComponentUpdate: function (nexProps, nextState) {
    console.log('update begin');
    return this.state.value.foo !== nextState.value.foo;
  },
  render: function () {
    return (
      <div onClick={this.handleChange}>{this.state.value.foo}</div>
    );
  }
});
ReactDOM.render(<FromTest2/>, document.getElementById('example2'));