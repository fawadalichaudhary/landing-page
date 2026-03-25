import React from "react";

function ConcernCard({ img, title }) {
    return (
        <div className="relative rounded-xl overflow-hidden cursor-pointer group bg-black/25 shadow-2xl h-56 min-w-40">

            <img
                src={img}
                className="h-full object-cover group-hover:scale-105 transition"
            />

            <div className="absolute bottom-0 bg-linear-to-t from-black/80 to-transparent text-white text-sm p-3 h-full w-full flex items-end justify-center ">
                {title}
            </div>

        </div>
    );
}

export default ConcernCard;