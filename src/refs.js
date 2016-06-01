import React from 'react';
import ReactDOM from 'react-dom';

class Refs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  updateState(e) {
    this.setState({data: e.target.value});
  }

  clearInput() {
    this.setState({data: ''});
    ReactDOM.findDOMNode(this.refs.first).focus()

  }

  render() {
    return (
      <div>
        <p>
          <input value= {this.state.data} onChange = {this.updateState.bind(this)} ref="first" />
        </p>
        <p>
          <input value= {this.state.data} onChange = {this.updateState.bind(this)} ref="second" />
        </p>
        <p>
          <input value= {this.state.data} onChange = {this.updateState.bind(this)} ref="third" />
        </p>

        <button onClick={this.clearInput.bind(this)}>Clear</button>
        <p>{this.state.data}</p>
      </div>
    )
  }
}

export default Refs;
