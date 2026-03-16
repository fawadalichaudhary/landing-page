import * as React from "react";

function ArticleCard({ category, title, desc }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col gap-3">

            <span className="text-xs text-pink-600 uppercase font-semibold">{category}</span>

            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>

            <p className="text-gray-500 text-sm">{desc}</p>

        </div>
    );
}

export default ArticleCard;