import * as React from "react";
import hello from "./assets/img.png";

function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

      {/* Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <p className="text-xs sm:text-sm text-superman-red font-semibold mb-4">
            NEW ARRIVAL: CLOUDBERRY ESSENCE
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            BerrySkin <br />
            <span className="text-superman-red">
              Berries to Beyond.
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base">
            Fruit-Powered Korean Formula Skincare for Real Results.
          </p>

          <p className="text-superman-red mt-2 text-sm sm:text-base">
            Brighten. Hydrate. Protect. Repair.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center md:justify-start">

            <button className="bg-superman-red text-white px-6 py-3 rounded-lg w-full sm:w-auto">
              Shop The Routine
            </button>

            <button className="border px-6 py-3 rounded-lg w-full sm:w-auto">
              Take Skin Quiz
            </button>

          </div>

          <p className="mt-6 text-gray-500 text-xs sm:text-sm">
            Joined by 50,000+ glowing users
          </p>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={hello}
            alt="BerrySkin Product"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-2xl transition duration-300 hover:scale-105 md:hover:rotate-6"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;