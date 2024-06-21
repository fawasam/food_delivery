import React, { useContext, useState } from "react";
import "./food-item.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/Store";

interface FoodItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}
const FoodItem = ({ id, name, image, price, description }: FoodItemProps) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />

        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt=""
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <div className="food-item-desc">{description}</div>
        <div className="food-item-price">$ {price}</div>
      </div>
    </div>
  );
};

export default FoodItem;
