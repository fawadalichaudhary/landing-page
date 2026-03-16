import * as React from "react";
import logo from "./assets/Link.svg"
function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
        <div className="flex justify-around gap-3">
          <img src={logo} alt="" srcSet="" />

          <ul className="flex gap-8 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-pink-600">Shop</li>
            <li className="cursor-pointer hover:text-pink-600">Ingredients</li>
            <li className="cursor-pointer hover:text-pink-600">Blog</li>
            <li className="cursor-pointer hover:text-pink-600">About</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <input
            placeholder="Search routine..."
            className="border px-4 py-2 rounded-full"
          />

          <button className="bg-pink-600 text-white px-5 py-2 rounded-full">
            Skin Quiz
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;