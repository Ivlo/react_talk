import React from 'react';
class Product extends React.Component {
  render() {
   return (
    <li onClick={this.props.callback.bind(null, this.props.id)}> {this.props.name}
    </li>
    );
  }
};
export default Product;
