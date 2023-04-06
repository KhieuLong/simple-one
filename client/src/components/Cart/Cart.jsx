import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <div className="heading">Shopping Cart</div>
          <span className="btn-close" onClick={() => setShowCart(false)}>
            <MdClose />
            <span>Close</span>
          </span>
        </div>
        {/* <div className="empty-cart">
          <BsCartX size={70} />
          <span>No Products in the cart.</span>
          <button className="return-cta">Return To Shop</button>
        </div> */}

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">SubTotal:</span>
              <span className="text total">&#8377;1234 </span>
            </div>
            <div className="button">
              <button className="checkout-cta">Check Out</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
