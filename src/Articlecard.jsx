import * as React from "react";

function ArticleCard({ category, title, desc }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-left flex flex-col justify-between">

            <span className="text-xs text-superman-red uppercase font-semibold">{category}</span>

            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>

            <p className="text-gray-500 text-sm">{desc}</p>

        </div>
    );
}

export default ArticleCard;