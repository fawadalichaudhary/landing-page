import React from "react";

const reviews = [
    {
        text: `"The BerryGlass serum is a game changer. I've struggled with dull skin for years, and after just two weeks, my friends are asking what foundation I'm wearing."`,
        name: "Sarah M.",
    },
    {
        text: `"Finally an SPF that doesn't make me look like a ghost. It's so light, it feels like a second moisturizer."`,
        name: "Amina J.",
    },
    {
        text: `"I love that it's fragrance-free but still feels premium. My sensitive skin usually reacts, but this is soothing."`,
        name: "Liam R.",
    },
];

function Reviews() {
    return (
        <section className=" py-16 px-4 sm:px-6 lg:px-8">

            <div className="bg-[#f6f1ef] max-w-7xl mx-auto text-center">

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Glow-getters' Reviews
                </h2>

                <div className="text-superman-red mt-2 text-lg">★★★★★</div>

                <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">

                    {reviews.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-left flex flex-col justify-between"
                        >
                            <p className="text-gray-600 text-sm">
                                {item.text}
                            </p>

                            <div className="flex items-center gap-3 mt-6">
                                <div className="w-10 h-10 rounded-full bg-pink-200"></div>

                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Verified Buyer
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Reviews;