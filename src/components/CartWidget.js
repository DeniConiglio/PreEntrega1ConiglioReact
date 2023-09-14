import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const numeroEstilos = {
    color: 'green', 
  };

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge" style={numeroEstilos}>3</span>
    </div>
  );
}

export default CartWidget;
