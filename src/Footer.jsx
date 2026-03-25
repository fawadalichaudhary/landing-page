import * as React from "react";

function Footer() {
    return (
        <footer className="bg-[#f7f3f2] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

            <div className="max-w-7xl mx-auto">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    <div>
                        <h2 className="text-xl font-bold text-superman-red mb-4">
                            BerrySkin
                        </h2>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            Fruit-powered Korean formulas designed for the modern glow.
                            We believe in the power of nature meets clinical science.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">SHOP</h3>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li>Cleancers</li>
                            <li>Serums & Treatments</li>
                            <li>Moisturizers</li>
                            <li>Sun Protection</li>
                            <li>Bundles</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">SUPPORT</h3>
                        <ul className="space-y-2 text-gray-500 text-sm">
                            <li>Skin Quiz</li>
                            <li>Track Order</li>
                            <li>Shipping Policy</li>
                            <li>Returns & Exchanges</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">JOIN THE BERRY LIST</h3>

                        <p className="text-gray-500 text-sm mb-4">
                            Get 15% off your first order and stay updated on the latest K-Beauty drops.
                        </p>

                        <div className="flex flex-col  gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="px-4 py-2 rounded-full border outline-none w-full"
                            />
                            <button className="bg-superman-red text-white px-6 py-2 rounded-full">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2026 BerrySkin Beauty. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-gray-600">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-gray-600">Terms of Service</span>
                        <span className="cursor-pointer hover:text-gray-600">Accessibility</span>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
