import { useContext, useState } from "react";
import "./food-display.css";
import { StoreContext } from "../../context/Store";
import FoodItem from "../FoodItem/FoodItem";

interface FoodDisplayProps {
  category: string;
}
const FoodDisplay = ({ category }: FoodDisplayProps) => {
  const { food_list } = useContext(StoreContext);
  const [itemsToShow, setItemsToShow] = useState(8);

  const loadMore = () => {
    setItemsToShow((prev) => prev + 12);
  };

  const filteredFoodList = food_list.filter(
    (item: any) => item.category === category || category === "All"
  );

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dished Near you</h2>
      <div className="food-display-list">
        {filteredFoodList.slice(0, itemsToShow).map((item: any) => {
          return (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </div>
      <div className="food-loadmore">
        {itemsToShow < filteredFoodList.length && (
          <button onClick={loadMore} className="food-loadMore">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
