import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeSingleItem,
} from "../redux/Slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";
const ItemCard = ({ food }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        className="absolute right-7 text-green-600 cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart(food));
          toast(`${food.name} Removed!`, {
            icon: '👋',
          });
        }}
      />
      <img src={food.img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{food.name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{food.price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={() => {
                dispatch(addToCart(food));
              }}
            />
            <span>{food.qty}</span>
            <AiOutlineMinus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none  rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={
                food.qty > 1
                  ? () => dispatch(removeSingleItem(food))
                  : () => dispatch(removeFromCart(food))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
