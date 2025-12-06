interface ServiceIntervalsProps {
    makeName: string;
    modelName: string;
    intervals: string[];
}

import Link from 'next/link';

const ServiceIntervals = ({ makeName, modelName, intervals }: ServiceIntervalsProps) => {
    if (!intervals || intervals.length === 0) return null;

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{modelName} service intervals</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-blue-500">
                {intervals.map((interval, index) => (
                    <Link
                        key={index}
                        href={`/car-servicing/${makeName.toLowerCase()}/${modelName.toLowerCase().replace(/ /g, '-')}/${encodeURIComponent(interval)}`}
                        className="hover:underline cursor-pointer text-sm"
                    >
                        {interval}
                    </Link>
                ))}
                <div className="text-gray-500 text-sm mt-2 col-span-2 sm:col-span-3">
                    ... show {Math.max(0, 13)} more
                </div>
            </div>
        </div>
    );
};

export default ServiceIntervals;
