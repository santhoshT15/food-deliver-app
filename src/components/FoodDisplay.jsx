import React, { useContext, useEffect, useState } from "react";
import { storeContext } from "../context/storeContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   console.log(food_list);
  //   setMenu(food_list.slice(0, 10));
  // }, [food_list]);
  return (
    <div className="mt-[30px]">
      <h2 className="text-[max(2vw,_24px)] font-semibold ">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
