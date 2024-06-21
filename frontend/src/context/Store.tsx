import { createContext, useEffect, useState } from "react";
import { Food, food_list } from "../assets/assets";

export const StoreContext = createContext<any>(null);

interface cartItemsProps {
  [key: string]: number;
}
const StoreContextProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<cartItemsProps>({});

  const addToCart = (itemId: string): void => {
    setCartItems((prev: { [key: string]: number }) => {
      return {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      };
    });
  };
  const removeFromCart = (itemId: string): void => {
    setCartItems((prev: { [key: string]: number }) => {
      const cart = { ...prev };
      if (cart[itemId] === 1) {
        delete cart[itemId];
      } else {
        cart[itemId] -= 1;
      }
      return cart;
    });
  };

  const getTotalCartAmount = (): number => {
    let totalAmount: number = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemDetails: Food | undefined = food_list.find(
          (food) => food._id === item
        );
        totalAmount += itemDetails!.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
