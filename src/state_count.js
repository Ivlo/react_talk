import React from 'react';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  _handleClick(e) {
    e.preventDefault()
    this.setState({count: this.state.count + 1});
  }

  render() {
    return(
      <div>
        <p>{this.state.count}</p>
        <p><a href="" onClick={this._handleClick.bind(this)}>Pincha aquí</a></p>
      </div>
    )
  }
}

export default Count;
