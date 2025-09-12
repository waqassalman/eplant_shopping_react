import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    let cartcost = 0;
    cart.forEach(cartItem => {
      cartcost = parseFloat(cartItem.cost.substring(1))
      total += cartItem.quantity * cartcost

    })
    console.log(total)
    return total
  }

  const handleContinueShopping = (e) => {
    onContinueShopping(e)
  };



  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1)
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    else if (item.quantity < 1)
      dispatch(removeItem({ name: item.name, quantity: item.quantity }));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let total_cost = 0;
    let cartcost = 0
    cartcost = parseFloat(item.cost.substring(1))
    total_cost += item.quantity * cartcost
    return total_cost
  };

  return (
    <div class="cart-page">
      <div className='row'>
        <div className='column-8'>
          <div className="cart-container">
            {cart.map(item => (
              <div className="cart-item" key={item.name}>

                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">{item.cost}</div>
                </div>
                <div className="cart-quantity-sec">
                  <div className="cart-item-quantity">
                    <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <div className="cart-item-total">${calculateTotalCost(item)}</div>
                  <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                </div>
              </div>

            ))}
          </div>
        </div>
        <div className='column-4'>
          <div className="checkout-container">
            <h2 style={{ color: 'black' }}>Total </h2>
            <hr></hr>
            <div className='total-amount'>
              <h2 style={{ color: 'black' }}>Sub-total </h2>
              <div className='amount'>${calculateTotalAmount()}</div>
            </div>
            <div className='total-amount'>
              <h2 style={{ color: 'black' }}>Tax </h2>
              <div className='amount'>$0</div>
            </div>
            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
            <div className="continue_shopping_btn">
              <br />
              <button className="get-started-button1">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
    </div>
  );
};

export default CartItem;


