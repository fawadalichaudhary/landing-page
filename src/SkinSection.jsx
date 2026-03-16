import * as React from "react";
import ConcernCard from "./SkinSectioncard";
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
    { img: acne, title: "Acne Prone" }
  ];

  return (
    <section className="px-10 py-16">

      <h3 className="text-xl font-semibold mb-6">
        Shop by Skin Concern
      </h3>

      <div className="flex gap-6 overflow-x-auto">

        {concerns.map((item, index) => (
          <ConcernCard key={index} {...item} />
        ))}

      </div>

    </section>
  );
}

export default SkinConcern;