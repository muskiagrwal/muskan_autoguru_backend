interface CommonRepairsProps {
    makeName: string;
    repairs: string[];
}

const CommonRepairs = ({ makeName, repairs }: CommonRepairsProps) => {
    if (!repairs || repairs.length === 0) return null;

    return (
        <div className="py-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Common {makeName} Repairs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {repairs.map((repair, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">{repair}</span>
                        <button className="bg-emerald-500 text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-emerald-600 transition-colors">
                            Get quotes
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommonRepairs;
