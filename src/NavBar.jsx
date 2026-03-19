import * as React from "react";
import logo from "./assets/Link.svg"
function Navbar() {
  return (
    <div className="max-w-7xl mx-auto">
      <nav className="flex flex-col items-center justify-between px-10 py-5 bg-white shadow-sm md:flex-row flex-wrap">
        <div className="flex justify-around gap-3 flex-wrap mb-2 ">
          <img src={logo} alt="" srcSet="" />
          <ul
            className="flex gap-8  md:flex-row text-gray-700 font-medium flex-wrap ">
            <li>Shop</li>
            <li>Ingredients</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex gap-4 flex-wrap">
          <input
            placeholder="Search routine..."
            className="border px-4 py-2 rounded-full w-40 md:w-auto"
          />

          <button className="bg-superman-red text-white px-5 py-2 rounded-full">
            Skin Quiz
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;