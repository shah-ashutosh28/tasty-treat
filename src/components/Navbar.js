import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slices/SearchSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="text-2xl font-bold">Tasty Treat Foods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          onChange={(e)=>{dispatch(setSearch(e.target.value))}}
          placeholder="Seach Here"
          autoComplete="off"
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] sm:mt-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;
