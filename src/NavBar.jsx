import React from "react";

const navBar = () => {
  return (
    <>
      <header className=" bg-amber-500 flex justify-around items-center">
        <div
          className="max-w-7xl mx-autopx-4 py-4 flex gap-1.5 flex-col justify-between md:flex-row md:items-centermd:justify-between">
          <h2 className="text-rose-800 font-bold text-2xls">BerrySkin</h2>
          <nav className="">
            <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <li>Shop</li>
              <li>Ingredients</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <input type="text" placeholder="Search routine..." className="bg-white border-2 rounded-3xl p-1" />
          <button className="bg-green-400 p-1 border rounded-3xl font-semibold">Skip Quiz</button>
        </div>
      </header>
    </>
  );
};

export default navBar;
