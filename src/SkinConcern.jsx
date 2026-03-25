import * as React from "react";
import ConcernCard from "./ConcernCard";
import hyper from "./assets/Hyperpigmentation.svg"
import dull from "./assets/DullSkin.svg"
import dehyd from "./assets/Dehydration.svg"
import acne from "./assets/AcneProne.svg"
import barrier from "./assets/BarrierDamage.svg"

function SkinConcern() {

  const concerns = [
    { img: hyper, title: "Hyperpigmentation" },
    { img: dull, title: "Dull Skin" },
    { img: dehyd, title: "Dehydration" },
    { img: barrier, title: "Barrier Damage" },
    { img: acne, title: "Acne Prone" },
    { img: hyper, title: "Hyperpigmentation" },
    { img: dull, title: "Dull Skin" },
    { img: dehyd, title: "Dehydration" },
    { img: barrier, title: "Barrier Damage" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-6">
          Shop by Skin Concern
        </h3>

        <div className="flex gap-6 flex-col md:flex-row scrollbar-hide overflow-x-auto">

          {concerns.map((item, index) => (
            <ConcernCard key={index} {...item} />
          ))}

        </div>
      </div>
    </section>
  );
}

export default SkinConcern;