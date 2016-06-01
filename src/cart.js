import React from 'react';
import Product from './product'
class Cart extends React.Component {
  handleClick(id) {
    console.log(id);
  }


render() {
  return (
    <ul>
      <Product id={1} name="Macbook Air 11" callback={this.handleClick} />
      <Product id={2} name="Macbook 12'" callback={this.handleClick} />
      <Product id={3} name="Macbook Air 13" callback={this.handleClick} />
    </ul>
  );
}
 };
export default Cart;
