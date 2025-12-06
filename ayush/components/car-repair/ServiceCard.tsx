import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
    category: string;
    image?: string;
    layout?: string;
    items: string[];
}

export default function ServiceCard({ service }: { service: ServiceItem }) {
    const { category, image, layout, items } = service;

    const renderItems = (columns: number = 1) => (
        <div className={`grid grid-cols-1 ${columns > 1 ? `md:grid-cols-${columns}` : ''} gap-x-8 gap-y-2`}>
            {items.map((item, idx) => (
                <Link
                    href={`/car-repair-service/${encodeURIComponent(item.toLowerCase().replace(/ /g, '-'))}`}
                    key={idx}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer block py-1"
                >
                    {item}
                </Link>
            ))}
        </div>
    );

    // Horizontal Layout (e.g., Air Conditioning)
    if (layout === 'horizontal') {
        return (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-8 flex flex-col md:flex-row items-center gap-8 col-span-full">
                <div className="flex-1 w-full">
                    <h2 className="text-2xl font-serif text-gray-900 mb-6">{category}</h2>
                    {renderItems(1)}
                </div>
                <div className="w-full md:w-1/2 h-64 relative rounded-2xl overflow-hidden">
                    {image && (
                        <Image
                            src={image}
                            alt={category}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
            </div>
        );
    }

    // Full Width Layout (e.g., Brakes)
    if (layout === 'full-width') {
        return (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-8 col-span-full">
                <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-8">
                    {image && (
                        <Image
                            src={image}
                            alt={category}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
                <h2 className="text-2xl font-serif text-center text-gray-900 mb-8">{category}</h2>
                {renderItems(4)}
            </div>
        );
    }

    // Vertical Layout (Default)
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-8 flex flex-col h-full">
            <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-8">
                {image && (
                    <Image
                        src={image}
                        alt={category}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
            <h2 className="text-2xl font-serif text-center text-gray-900 mb-8">{category}</h2>
            <div className="text-center">
                {items.map((item, idx) => (
                    <Link
                        href={`/car-repair-service/${encodeURIComponent(item.toLowerCase().replace(/ /g, '-'))}`}
                        key={idx}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer block py-1"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
}
