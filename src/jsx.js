import React from 'react';

const Hello = React.createClass({
  displayName: 'Hello',
  render: function() {
    return React.createElement("h1", null, "Hello without jsx");
  }
});

export default Hello;

// ReactDOM.render(
//   React.createElement(Hello, {name: "World"}),
//   document.getElementById('container')
// );
