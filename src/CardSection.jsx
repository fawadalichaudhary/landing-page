import * as React from "react";
import cleanserImg from "./assets/Cleanserproduct.svg"
import Serum from "./assets/Serumproduct.svg"
import Card from "./card";
import moist from "./assets/Moisturizerproduct.svg"
import spf from "./assets/SPFproduct.svg"
function cardSection() {

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
      type: "BerryClear Cleanser",
      desc: "BerryGlass Serum for glowing skin.",
      img: Serum
    },
    {
      step: "03",
      title: "Hydrate",
      type: "BerryClear Cleanser",
      desc: "BerryHydrate Moisturizer locks moisture.",
      img: moist
    },
    {
      step: "04",
      title: "Protect",
      type: "BerryClear Cleanser",
      desc: "BerryDefence SPF for daily protection.",
      img: spf
    }
  ];

  return (
    <section className="px-12 py-20 bg-[#8D204C05]">

      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold">
            The Berry Routine
          </h2>

          <p className="text-gray-500 mt-2">
            Our core 4-step skincare routine.
          </p>
        </div>

        <button className="bg-pink-100 text-superman-red px-5 py-2 rounded-full">
          Shop Bundle & Save 20%
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

    </section>
  );
}

export default cardSection;