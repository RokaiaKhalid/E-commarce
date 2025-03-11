import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const { all_product, cartItems, removeFromCart, increase, decrease, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if (cartItems[e.id] > 0) {
          return <div>
              <div className="cartitems-format format-main">
              <img src={e.image} alt="" className="carticon-product-icon" />
              <div>
              <p className="name">{e.name}</p>
                <p>${e.new_price}</p>
                <div className="cartitems-quantity">
                  <button onClick={() => decrease(e.id)}>-</button>
                  {cartItems[e.id]}
                  <button onClick={() => increase(e.id)}>+</button>
                </div>
                <p>${e.new_price * cartItems[e.id]}</p>
              <img
                className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
                
              </div>

              <hr />
            </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="total">
          <h1>Cart Total</h1>
          <div>
            <div className="total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECHOUT</button>
        </div>
        <div className="promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
