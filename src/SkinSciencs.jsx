import * as React from "react";
import ArticleCard from "./Articlecard";

function SkinScience() {

    const articles = [
        {
            category: "Ingredient Spotlight",
            title: "What is Niacinamide?",
            desc: "Everything you need to know about the holy grail ingredient for minimizing and improving skin texture."
        },
        {
            category: "Skin Protection",
            title: "Why SPF is Non-Negotiable",
            desc: "Preventing premature aging and damage starts with the right daily sun protection."
        },
        {
            category: "K-Beauty Guide",
            title: "Korean Skincare Routine Explained",
            desc: "From double cleansing to glass skin: a beginner’s guide to the K-Beauty philosophy."
        }
    ];

    return (
        <section className="bg-[#faf7f6] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">


            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-center lg:text-left">

                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                            Your Skin Deserves Science
                        </h2>

                        <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                            Dive deep into the ingredients and routines that power your glow with our expert-led education series.
                        </p>
                    </div>

                    <button className="text-superman-red font-medium hover:underline self-center lg:self-auto">
                        View all articles →
                    </button>

                </div>

                <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">

                    {articles.map((item, index) => (
                        <ArticleCard key={index} {...item} />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default SkinScience;