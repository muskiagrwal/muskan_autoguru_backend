"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { toast } from "sonner";

// Type definition for page types
type PageType = 'car-repair' | 'car-servicing' | 'car-advice' | 'car-battery' | 'windscreens' | 'mobile-mechanics' | 'mechanics' | 'air-conditioning';

interface NeedARepairProps {
  pageType?: PageType;
}

export default function NeedARepair({ pageType = 'car-repair' }: NeedARepairProps) {
  const router = useRouter();
  const [vehicle, setVehicle] = useState("");
  const [model, setModel] = useState("");
  const [location, setLocation] = useState("");
  const [isLocating, setIsLocating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to the quote page with the hardcoded ID as requested
    router.push('/quote/2be92782-d9d9-4f68-959e-08b6ae5ba3aa?step=location');
  };

  const handleLocationClick = async () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();

          const suburb = data.locality || data.city || data.principalSubdivision;
          const postcode = data.postcode;

          const locationString = [suburb, postcode].filter(Boolean).join(" ");

          if (locationString) {
            setLocation(locationString);
            toast.success("Location detected successfully");
          } else {
            toast.error("Could not determine your location");
          }
        } catch (error) {
          console.error("Error fetching location:", error);
          toast.error("Failed to fetch location details");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        let errorMessage = "Failed to detect location";
        if (error.code === error.PERMISSION_DENIED) {
          errorMessage = "Location permission denied";
        }
        toast.error(errorMessage);
        setIsLocating(false);
      }
    );
  };

  // Define content based on page type
  const getPageContent = () => {
    const contentMap = {
      'car-repair': {
        title: "Need a repair on your car?",
        subtitle: "Instantly book Australia's best mechanics.",
        buttonText: "Let's go!",
        infoItems: [
          { header: "Australia's #1 booking site", subtext: "for car services & repairs" },
          { header: "Book now, pay later", subtext: "Interest-free payments" },
          { header: "Transparent prices", subtext: "no surprises" }
        ]
      },
      'car-servicing': {
        title: "Need a service for your car?",
        subtitle: "Book professional servicing with Australia's top mechanics.",
        buttonText: "Book Service",
        infoItems: [
          { header: "Expert mechanics", subtext: "for all service types" },
          { header: "Logbook compliant", subtext: "warranty-friendly" },
          { header: "Fixed pricing", subtext: "no hidden costs" }
        ]
      },
      'car-advice': {
        title: "Need advice on your car?",
        subtitle: "Get expert automotive advice from professionals.",
        buttonText: "Get Advice",
        infoItems: [
          { header: "Expert insights", subtext: "on automotive care" },
          { header: "Professional guidance", subtext: "from certified mechanics" },
          { header: "Personalized tips", subtext: "for your vehicle" }
        ]
      },
      'car-battery': {
        title: "Need a new battery?",
        subtitle: "Find certified mechanics for battery replacement.",
        buttonText: "Find Battery Service",
        infoItems: [
          { header: "Same-day replacement", subtext: "for most vehicles" },
          { header: "Quality batteries", subtext: "from trusted brands" },
          { header: "Warranty included", subtext: "on all batteries" }
        ]
      },
      'windscreens': {
        title: "Need windscreen repair/replacement?",
        subtitle: "Connect with specialists for glass services.",
        buttonText: "Find Glass Service",
        infoItems: [
          { header: "Mobile service available", subtext: "at your location" },
          { header: "Insurance assistance", subtext: "with claims" },
          { header: "Quality glass", subtext: "for safety" }
        ]
      },
      'mobile-mechanics': {
        title: "Need a mobile mechanic?",
        subtitle: "Connect with mechanics who come to you.",
        buttonText: "Find Mobile Mechanic",
        infoItems: [
          { header: "Mechanics come to you", subtext: "convenient & fast" },
          { header: "Flexible scheduling", subtext: "for your convenience" },
          { header: "Full service range", subtext: "at your doorstep" }
        ]
      },
      'mechanics': {
        title: "Find a mechanic near you?",
        subtitle: "Book with Australia's top-rated mechanics.",
        buttonText: "Find Mechanic",
        infoItems: [
          { header: "Verified mechanics", subtext: "with top ratings" },
          { header: "Competitive pricing", subtext: "transparent quotes" },
          { header: "Quality service", subtext: "guaranteed" }
        ]
      },
      'air-conditioning': {
        title: "Car AC blowing hot air?",
        subtitle: "Book an AC service or regas with local experts.",
        buttonText: "Find AC Specialist",
        infoItems: [
          { header: "Keep cool", subtext: "all summer long" },
          { header: "Leak detection", subtext: "and repair included" },
          { header: "Certified experts", subtext: "for all AC systems" }
        ]
      }
    };

    return contentMap[pageType] || contentMap['car-repair'];
  };

  const content = getPageContent();

  return (
    <section className="w-full bg-emerald-400 py-24 px-4 flex flex-col items-center text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        {content.title}
      </h1>
      <p className="text-xl text-gray-800 mb-10">
        {content.subtitle}
      </p>

      {/* Search Box */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 sm:grid-cols-4"
      >
        {/* Vehicle Dropdown */}
        <div className="border-r p-4 flex items-center">
          <select
            className="w-full bg-transparent outline-none text-gray-700"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option value="">What do you drive?</option>
            <option value="car">Car</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
          </select>
        </div>

        {/* Model Dropdown */}
        <div className="border-r p-4 flex items-center">
          <select
            className="w-full bg-transparent outline-none text-gray-700"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="">Which model?</option>
            <option value="model1">Model 1</option>
            <option value="model2">Model 2</option>
          </select>
        </div>

        {/* Location Input */}
        <div className="border-r p-4 flex items-center relative group">
          <input
            type="text"
            className="w-full bg-transparent outline-none text-gray-700 pr-10"
            placeholder="Postcode or Suburb"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            type="button"
            onClick={handleLocationClick}
            disabled={isLocating}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-emerald-500 transition-colors disabled:opacity-50"
            title="Use my current location"
          >
            {isLocating ? (
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <MapPin className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-gray-900 text-white font-semibold text-lg p-4 hover:bg-gray-800 transition"
        >
          {content.buttonText}
        </button>
      </form>

      {/* Info Section */}
      <div className="flex flex-col sm:flex-row gap-10 mt-12 text-gray-900 text-lg font-medium">
        {content.infoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span>{item.header}</span>
            <p className="text-gray-700 text-base">{item.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
