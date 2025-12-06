const ModelSidebarRight = () => {
    return (
        <div className="space-y-8">
            {/* Book Now Pay Later */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 uppercase mb-1">BOOK NOW, PAY LATER</h3>
                <p className="text-gray-600 text-sm mb-6">Interest-free payments</p>

                <div className="space-y-4">
                    <div className="bg-emerald-100 p-3 rounded flex justify-center items-center h-12">
                        <span className="font-bold text-emerald-800 text-lg">afterpay</span>
                    </div>
                    <div className="bg-orange-100 p-3 rounded flex justify-center items-center h-12">
                        <span className="font-bold text-orange-600 text-lg">humm</span>
                    </div>
                    <div className="bg-purple-100 p-3 rounded flex justify-center items-center h-12">
                        <span className="font-bold text-purple-800 text-lg">zip</span>
                    </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 uppercase mt-8 mb-2">AVAILABLE</h4>
                <p className="text-xs text-gray-500">*Available at select suppliers. T&Cs apply.</p>
            </div>

            {/* Top Mechanics */}
            <div>
                <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                    <h3 className="font-bold text-gray-900">Top Mechanics</h3>
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>

                <ul className="space-y-0">
                    {["Sydney", "Brisbane", "Melbourne", "Perth", "Adelaide"].map((city) => (
                        <li key={city} className="border-b border-gray-100 last:border-0">
                            <a href="#" className="flex justify-between items-center py-3 text-gray-600 hover:text-blue-600 group">
                                <span className="text-sm">Top Mechanics in {city}</span>
                                <span className="text-blue-200 group-hover:text-blue-600 transition-colors">→</span>
                            </a>
                        </li>
                    ))}
                    <li className="pt-2">
                        <a href="#" className="flex justify-between items-center py-2 text-gray-600 hover:text-blue-600 group">
                            <span className="text-sm">View all</span>
                            <span className="text-blue-200 group-hover:text-blue-600 transition-colors">→</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ModelSidebarRight;
