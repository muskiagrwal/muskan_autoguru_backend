import DynamicBreadcrumbs from "@/components/general/DynamicBreadcrumbs";
import SearchHero from "@/components/general/SearchHero";

export default function CarServicingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <SearchHero
                title="Compare car service costs"
                subtitle="Instantly book Australia's best mechanics."
                backgroundImage="/car-service/car-service-banner-bg.jpg"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <DynamicBreadcrumbs />
            </div>
            {children}
        </div>
    );
}
