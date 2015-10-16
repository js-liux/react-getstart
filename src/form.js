/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  15/10/12
 * @description
 *
 */
var FromTest = React.createClass({
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
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="radio" name="opt" defaultChecked /> option1
        <input type="radio" name="opt" /> option3
      </div>
    );
  }
});
ReactDOM.render(<FromTest/>, document.getElementById('example'));