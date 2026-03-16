import * as React from "react";
function Card({ step, title, desc, img }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">

            <p className="text-sm text-pink-500 font-semibold">
                STEP {step}
            </p>

            {img && (
                <img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-contain my-4"
                />
            )}


            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-gray-500 text-sm mt-2">
                {desc}
            </p>

        </div>
    );
}

export default Card;