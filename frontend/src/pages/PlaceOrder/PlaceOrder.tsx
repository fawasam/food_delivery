import { useContext } from "react";
import "./placeorder.css";
import { StoreContext } from "../../context/Store";
import CartTotal from "../../components/Cart/CartTotal";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <form className="place-order">
        <div className="place-order-left">
          <div className="title">Delivery Information</div>
          <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
          <CartTotal url="/" text="PROCEED TO PAYMENT" />
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
