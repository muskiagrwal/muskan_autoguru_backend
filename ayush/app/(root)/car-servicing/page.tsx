import CarServiceHero from "@/components/car-servicing/CarServiceHero";
import ServicesOffered from "@/components/homepage/ServicesOffered";


const CarServicingPage = () => {
  return (
    <div className="min-h-screen">
      <CarServiceHero />
      <ServicesOffered />
    </div>
  );
};

export default CarServicingPage;