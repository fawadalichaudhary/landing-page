import * as React from "react";
import FeatureCard from "./Section2Card";
import { ShieldCheck, Sun, Droplets, FlaskConical, Leaf, Sparkles } from "lucide-react";

function section1() {

    const features = [
        {
            icon: <FlaskConical />,
            title: "Fruit Extract Complex",
            desc: "Potent antioxidants from acai, blueberry, and goji berries fight free radicals."
        },
        {
            icon: <FlaskConical />,
            title: "Korean-Formula Science",
            desc: "Advanced molecular delivery systems derived from leading Seoul labs."
        },
        {
            icon: <ShieldCheck />,
            title: "Barrier-First Skincare",
            desc: "Every product focuses on strengthening your natural skin shield."
        },
        {
            icon: <Leaf />,
            title: "Fragrance-Free & Gentle",
            desc: "Clean, clinical formulations that are gentle for sensitive skin."
        },
        {
            icon: <Sun />,
            title: "No White Cast SPF",
            desc: "Invisible protection for all skin tones without the greasy finish."
        },
        {
            icon: <Droplets />,
            title: "Non-Comedogenic Formulas",
            desc: "Clinically tested to ensure it won't clog pores or cause breakouts."
        }
    ];

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