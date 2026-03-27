import * as React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "./constants/features";

function Section1() {
    return (
        <section className=" bg-[#f7f3f2] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">


            <div className="  max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto">

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                        Why BerrySkin is Different
                    </h2>

                    <p className="text-gray-500 mt-4 text-sm sm:text-base">
                        Experience the power of K-Beauty science infused with potent fruit extracts for results you can actually see.
                    </p>

                </div>

                {/* Grid */}
                <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {features.map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Section1;