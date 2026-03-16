import * as React from "react";
import logo from "./assets/Link.svg"
function Navbar() {
  return (
    <div>
      <nav className="flex flex-col items-center justify-between px-10 py-5 bg-white shadow-sm md:flex-row">
        <div className="flex justify-around gap-3">
          <img src={logo} alt="" srcSet="" />

          <ul className="flex gap-8 flex-col md:flex-row text-gray-700  font-medium">
            <li>Shop</li>
            <li>Ingredients</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <input
            placeholder="Search routine..."
            className="border px-4 py-2 rounded-full"
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