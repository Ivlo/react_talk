import React from 'react';

class Event extends React.Component {
  _handleClick(e) {
    e.preventDefault()
    alert('Has hecho click Ivlo')
    console.log(e.target)
  }

  render() {
    return(
      <button onClick={this._handleClick}> Haz click aquí figura</button>
    )
  }
}

export default Event;
