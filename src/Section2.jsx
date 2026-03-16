import * as React from "react";
import FeatureCard from "./Section2Card";
import { features } from "./constants/features";


function section1() {


    return (
        <section className="bg-[#f7f3f2] py-20 px-10">

            <div className="text-center max-w-3xl mx-auto mb-14">

                <h2 className="text-3xl font-bold text-gray-900">
                    Why BerrySkin is Different
                </h2>

                <p className="text-gray-500 mt-4">
                    Experience the power of K-Beauty science infused with potent fruit extracts for results you can actually see.
                </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {features.map((item, index) => (
                    <FeatureCard key={index} {...item} />
                ))}
            </div>

        </section>
    );
}

export default section1;