import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/Slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
    console.log(categories);
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best Food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden">
        <button
          className={`px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory==="All" && "bg-green-500 text-white"}`}
          onClick={() => dispatch(setCategory("All"))}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <>
              <button
                key={index}
                className={`px-3 py-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory===category && "bg-green-500 text-white"}`}
                onClick={() => dispatch(setCategory(category))}
              >
                {category}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
