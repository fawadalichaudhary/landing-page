import * as React from "react";
function Card({ step, title, type, desc, img }) {
    return (
        <>
            <div className="rounded-2xl ">
                <div className="h-[85%] relative shadow-2xl rounded-2xl  ">

                    <p className="text-sm text-superman-red px-2 font-semibold  absolute bg-white border rounded-xl top-2 left-2 ">
                        STEP {step}
                    </p>

                    {img && (
                        <img
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    )}

                </div>
                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="text-[#8D204C] text-md mt-2">
                    {type}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                    {desc}
                </p>
            </div>
        </>
    );
}

export default Card;