import React from 'react';
import ReactDOM from 'react-dom';

class Refs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      third: ''
    }
  }

  updateState(e) {
    this.setState({
      first: ReactDOM.findDOMNode(this.refs.first).value,
      second: ReactDOM.findDOMNode(this.refs.second).value,
      third: ReactDOM.findDOMNode(this.refs.third).value
    });
  }

  clearInput() {
    this.setState({data: ''});
    ReactDOM.findDOMNode(this.refs.first).focus()

  }

  render() {
    return (
      <div>
        <p>
          <input value= {this.state.first} onChange = {this.updateState.bind(this)} ref="first" />
          <br/>
          <span>{this.state.first}</span>
        </p>
        <p>
          <input value= {this.state.second} onChange = {this.updateState.bind(this)} ref="second" />
          <br/>
          <span>{this.state.second}</span>
        </p>
        <p>
          <input value= {this.state.third} onChange = {this.updateState.bind(this)} ref="third" />
          <br/>
          <span>{this.state.third}</span>
        </p>

        <button onClick={this.clearInput.bind(this)}>Clear</button>
        <p>{this.state.data}</p>
      </div>
    )
  }
}


export default Refs;
