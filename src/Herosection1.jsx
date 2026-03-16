import * as React from "react";
import hello from "./assets/img.png"
function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center px-12 py-16 gap-10 justify-center">

      <div>
        <p className="text-sm text-superman-red font-semibold mb-4">
          NEW ARRIVAL: CLOUDBERRY ESSENCE
        </p>

        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          BerrySkin - <br />
          <span className="text-superman-red">Berries to Beyond.</span>
        </h1>

        <p className="mt-6 text-gray-600">
          Fruit-Powered Korean Formula Skincare for Real Results.
        </p>

        <p className="text-superman-red mt-2">
          Brighten. Hydrate. Protect. Repair.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-superman-red text-white px-6 py-3 rounded-lg">
            Shop The Routine
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Take Skin Quiz
          </button>
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          Joined by 50,000+ glowing users
        </p>
      </div>

      <div className="flex justify-center object-cover ">
        <img
          src={hello}
          className="rounded-2xl shadow-2xl hover:rotate-6 duration-300  hover:scale-105"
        />
      </div>

    </section>
  );
}

export default Hero;