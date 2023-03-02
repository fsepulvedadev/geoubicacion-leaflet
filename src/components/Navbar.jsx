import React from "react";
import { IoHomeOutline, IoAddOutline } from "react-icons/io5";
import { TbTrees } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-emerald-600 h-[8vh] grid grid-cols-3 place-content-center text-white absolute w-full bottom-0">
      <Link to={"/inicio"} className="flex items-center justify-center">
        <IoHomeOutline className="text-3xl" />
      </Link>
      <Link
        to={"/camara"}
        className="flex items-center justify-center rounded-full bg-white text-emerald-600 w-fit mx-auto scale-125 drop-shadow-xl"
      >
        <IoAddOutline className="text-4xl" />
      </Link>
      <Link to={"lista"} className="flex items-center justify-center">
        <TbTrees className="text-3xl" />
      </Link>
    </div>
  );
};

export default Navbar;
