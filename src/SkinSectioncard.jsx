import React from "react";

function ConcernCard({ img, title }) {
    return (
        <div className="relative rounded-xl overflow-hidden cursor-pointer group">

            <img
                src={img}
                className="w-44 h-56 object-cover group-hover:scale-105 transition"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm p-3">
                {title}
            </div>

        </div>
    );
}

export default ConcernCard;