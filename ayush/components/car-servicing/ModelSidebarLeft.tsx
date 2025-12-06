interface ModelSidebarLeftProps {
    makeName: string;
    modelName: string;
    image: string;
    rating: number;
    quotesProvided: string;
    expertMechanics: string;
}

const ModelSidebarLeft = ({ makeName, modelName, image, rating, quotesProvided, expertMechanics }: ModelSidebarLeftProps) => {
    return (
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <div className="mb-4">
                <img src={image} alt={modelName} className="w-full h-auto object-contain" />
            </div>

            <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-700 uppercase mb-1">AVERAGE {makeName} RATING</h3>
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900 mr-2">{rating}</span>
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-700 uppercase mb-1">{makeName} QUOTES PROVIDED</h3>
                <p className="text-xl font-bold text-gray-900">{quotesProvided}</p>
            </div>

            <div>
                <h3 className="text-sm font-bold text-gray-700 uppercase mb-1">EXPERT {makeName} MECHANICS</h3>
                <p className="text-xl font-bold text-gray-900">{expertMechanics}</p>
            </div>
        </div>
    );
};

export default ModelSidebarLeft;
