import * as React from "react"
import ArticleCard from "./article";

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
        <section className="px-10 py-16 bg-[#faf7f6]">

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Your Skin Deserves Science
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Dive deep into the ingredients and routines that power your glow with our expert-led education series.
                    </p>
                </div>

                <button className="text-pink-600 font-medium hover:underline">
                    View all articles →
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {articles.map((item, index) => (
                    <ArticleCard key={index} {...item} />
                ))}
            </div>

        </section>
    );
}

export default SkinScience;