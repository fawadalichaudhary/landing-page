import * as React from "react";

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

            <div className="text-pink-600 text-2xl mb-3">
                {icon}
            </div>

            <h3 className="font-semibold text-gray-900">
                {title}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
                {desc}
            </p>

        </div>
    );
}

export default FeatureCard;