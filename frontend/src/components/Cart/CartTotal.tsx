import { useContext } from "react";
import "./cart-total.css";
import { StoreContext } from "../../context/Store";
import { useNavigate } from "react-router-dom";

interface CartTotalProps {
  url: string;
  text: string;
}
const CartTotal = ({ url, text }: CartTotalProps) => {
  const navigate = useNavigate();
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="cart-total">
      <h2>Car Totals</h2>
      <div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>₹{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          {" "}
          <p>Deliver Fee</p>
          <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
        </div>
      </div>
      <button onClick={() => navigate(url)}>{text}</button>
    </div>
  );
};

export default CartTotal;
