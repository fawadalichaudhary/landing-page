import * as React from "react";
import cleanserImg from "./assets/Cleanserproduct.svg";
import Serum from "./assets/Serumproduct.svg";
import moist from "./assets/Moisturizerproduct.svg";
import spf from "./assets/SPFproduct.svg";
import Card from "./card";

function CardSection() {

  const products = [
    {
      step: "01",
      title: "Cleanse",
      type: "BerryClear Cleanser",
      desc: "BerryClear Cleanser removes impurities.",
      img: cleanserImg
    },
    {
      step: "02",
      title: "Treat",
      type: "BerryGlass Serum",
      desc: "BerryGlass Serum for glowing skin.",
      img: Serum
    },
    {
      step: "03",
      title: "Hydrate",
      type: "BerryHydrate Moisturizer",
      desc: "BerryHydrate Moisturizer locks moisture.",
      img: moist
    },
    {
      step: "04",
      title: "Protect",
      type: "BerryDefence SPF",
      desc: "BerryDefence SPF for daily protection.",
      img: spf
    }
  ];

  return (
    <section className="bg-[#8D204C05] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">


        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-center lg:text-left mb-10">

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              The Berry Routine
            </h2>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Our core 4-step skincare routine.
            </p>
          </div>

          <button className="bg-pink-100 text-superman-red px-5 py-2 rounded-full self-center lg:self-auto">
            Shop Bundle & Save 20%
          </button>

        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}

        </div>

      </div>
    </section>
  );
}

export default CardSection;