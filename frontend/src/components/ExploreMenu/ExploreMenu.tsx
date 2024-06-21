import { menu_list } from "../../assets/assets";
import "./explore-menu.css";

interface ExploreMenuProps {
  category: string;
  setCategory: (prev: any) => void;
}
const ExploreMenu = ({ category, setCategory }: ExploreMenuProps) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            className="explore-menu-item"
            key={index}
            onClick={() =>
              setCategory((prev: string) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={category === item.menu_name ? "active" : ""}
            />
            <p
              className={category === item.menu_name ? "active_paragraph" : ""}
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
