import { Wrench, Car, Settings, ShieldCheck, Clock, PenTool, Minimize } from "lucide-react";

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Porsche Owner",
        content: "AutoGuru provides exceptional service. They treat my car with the utmost care and professionalism. Highly recommended for luxury vehicles.",
        rating: 5,
        image: "/testimonial/avatar1.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "BMW Enthusiast",
        content: "I've tried many mechanics, but AutoGuru stands out. Their attention to detail and transparent pricing is refreshing. A truly premium experience.",
        rating: 5,
        image: "/testimonial/avatar2.jpg"
    },
    {
        id: 3,
        name: "Emma Wilson",
        role: "Audi Driver",
        content: "Fast, reliable, and friendly. The team at AutoGuru knows exactly what they are doing. My car runs smoother than ever.",
        rating: 5,
        image: "/testimonial/avatar3.jpg"
    },
    {
        id: 4,
        name: "James Rodriguez",
        role: "Mercedes Owner",
        content: "The diagnostics were spot on. They fixed an issue two other shops couldn't figure out. I'm a customer for life now.",
        rating: 5,
        image: "/testimonial/avatar1.jpg"
    },
    {
        id: 5,
        name: "Lisa Thompson",
        role: "Range Rover Driver",
        content: "Professionalism at its finest. The waiting area is clean, the staff is polite, and my car was ready exactly when promised.",
        rating: 5,
        image: "/testimonial/avatar2.jpg"
    },
    {
        id: 6,
        name: "David Kim",
        role: "Lexus Owner",
        content: "Great value for the level of service provided. It feels like a dealership experience without the dealership price tag.",
        rating: 5,
        image: "/testimonial/avatar3.jpg"
    },
];

export const fleetTestimonials = [
    {
        id: 1,
        company: "City Logistics",
        name: "Mariah",
        role: "Business Owner",
        image: "/hero/hero-car-1.avif", // Using existing image
        content:
            "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
    },
    {
        id: 2,
        company: "Metro Transport",
        name: "James",
        role: "Fleet Manager",
        image: "/hero/hero-car-2.avif", // Using existing image
        content:
            "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
    },
    {
        id: 3,
        company: "Urban Delivery",
        name: "Sarah",
        role: "Operations Head",
        image: "/hero/hero-car-3.avif", // Using existing image
        content:
            "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
    },
];

export const HERO_SLIDES = [
    {
        id: 1,
        image: "/hero/hero-car-3.avif",
        title: "PREMIUM CAR SERVICE",
        highlight: "YOU CAN TRUST",
        subtitle: "Experience the highest standard of automotive care with our certified experts.",
        ctaText: "Book an Appointment",
        ctaLink: "/book"
    },
    {
        id: 2,
        image: "/hero/hero-car-2.avif",
        title: "EXPERT DIAGNOSTICS",
        highlight: "& REPAIR",
        subtitle: "State-of-the-art equipment to diagnose and fix issues with precision.",
        ctaText: "Our Services",
        ctaLink: "/services"
    },
    {
        id: 3,
        image: "/hero/hero-car-1.avif",
        title: "GENUINE PARTS",
        highlight: "GUARANTEED",
        subtitle: "We use only authentic parts to ensure your vehicle's longevity and performance.",
        ctaText: "Contact Us",
        ctaLink: "/contact"
    }
];

export const HOTSPOTS = [
    { top: "35%", left: "22%", label: "Engine Diagnostics" },
    { top: "45%", left: "50%", label: "Body Work" },
    { top: "65%", left: "75%", label: "Tire Services" },
    { top: "60%", left: "15%", label: "Brake Repair" },
    { top: "30%", left: "70%", label: "Glass Repair" },
];

export const BRANDS = [
    { name: "Audi", logo: "/brands/audi.svg" },
    { name: "BMW", logo: "/brands/bmw.svg" },
    { name: "Mercedes-Benz", logo: "/brands/mercedes.svg" },
    { name: "Porsche", logo: "/brands/porsche.svg" },
    { name: "Volkswagen", logo: "/brands/volkswagen.svg" },
    { name: "Land Rover", logo: "/brands/land-rover.png" },
    { name: "Jaguar", logo: "/brands/jaguar.png" },
    { name: "Volvo", logo: "/brands/volvo.svg" },
    { name: "Toyota", logo: "/brands/toyota.svg" },
    { name: "Honda", logo: "/brands/honda.svg" },
    { name: "Ford", logo: "/brands/ford.svg" },
    { name: "Chevrolet", logo: "/brands/chevrolet.png" }
];

export const SERVICES = [
    {
        icon: <Wrench className="w-10 h-10" />,
        title: "General Repair",
        description: "Comprehensive repair services for all makes and models."
    },
    {
        icon: <Car className="w-10 h-10" />,
        title: "Car Wash",
        description: "Professional washing and detailing to keep your car shining."
    },
    {
        icon: <Settings className="w-10 h-10" />,
        title: "Engine Tuning",
        description: "Optimize your engine performance and fuel efficiency."
    },
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "Safety Inspection",
        description: "Thorough checks to ensure your vehicle is road-safe."
    },
    {
        icon: <Clock className="w-10 h-10" />,
        title: "Oil Change",
        description: "Quick and efficient oil changes using premium products."
    },
    {
        icon: <PenTool className="w-10 h-10" />,
        title: "Brake Service",
        description: "Expert brake repair and replacement for your safety."
    }
];

export const GALLERY_IMAGES = [
    {
        id: 1,
        title: "Engine Repair",
        category: "Repair",
        src: "/gallery/engine-repair.jpg"
    },
    {
        id: 2,
        title: "Detailing",
        category: "Service",
        src: "/gallery/detailing.jpg"
    },
    {
        id: 3,
        title: "Brake Inspection",
        category: "Inspection",
        src: "/gallery/brake-inspection.jpg"
    },
    {
        id: 4,
        title: "Oil Change",
        category: "Service",
        src: "/gallery/oil-change.jpg"
    },
    {
        id: 5,
        title: "Tire Replacement",
        category: "Maintenance",
        src: "/gallery/tire-replacement.jpg"
    },
    {
        id: 6,
        title: "Diagnostic",
        category: "Inspection",
        src: "/gallery/diagnostic.jpg"
    }
];

export const PRICING_PACKAGES = [
    {
        name: "Basic",
        price: "149",
        description: "Essential maintenance",
        features: [
            "Engine oil change",
            "Oil filter replacement",
            "Fluid level check",
            "Safety inspection"
        ],
        popular: false
    },
    {
        name: "Standard",
        price: "249",
        description: "Recommended every 10k km",
        features: [
            "All Basic features",
            "Diagnostic scan",
            "Brake inspection",
            "Suspension check",
            "Logbook stamping"
        ],
        popular: true
    },
    {
        name: "Premium",
        price: "399",
        description: "Complete vehicle care",
        features: [
            "All Standard features",
            "Wheel alignment",
            "AC service",
            "Fuel system treatment",
            "Detailed report"
        ],
        popular: false
    }
];

export const NAV_LINKS = [
    { name: "Car Servicing", href: "/car-servicing" },
    { name: "Car Repair", href: "/car-repair-service" },
    { name: "Mechanics", href: "/mechanics" },
];

export const MORE_SERVICES_LINKS = [
    { name: "Home Service Repairing", href: "/book-service" },
    { name: "Mobile Mechanics", href: "/mobile-mechanic" },
    { name: "Car Battery", href: "/car-battery" },
    { name: "Windscreen", href: "/windscreens" },
    { name: "Air Conditioning", href: "/air-conditioning" },
    { name: "Fleet Guru", href: "/fleet-guru" },
    { name: "Car Wash", href: "/car-wash" },
];

export const FULL_NAV_ITEMS = [
    ...NAV_LINKS,
    ...MORE_SERVICES_LINKS,
    { name: "Contact", href: "/contact" }
];

export const LIMITED_NAV_ITEMS = [
    { name: "Contact", href: "/contact" },
    { name: "Log in", href: "/login" },
    { name: "Sign up", href: "/signup" },
];

export const FOOTER_LINKS = {
    services: [
        { name: "Book a Service", href: "/book-service" },
        { name: "Book a Repair", href: "/book-repair" },
        { name: "Mobile Mechanics", href: "/mobile-mechanics" },
        { name: "Car Battery", href: "/car-battery" },
        { name: "Windshields", href: "/windshields" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Our Mechanics", href: "/mechanics" },
        { name: "Fleet Guru", href: "/fleet-guru" },
        { name: "Car Advice", href: "/car-advice" },
    ],
    support: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faqs" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Customer Support", href: "tel:1300000000" },
    ]
};

export const WHY_AUTOGURU_FEATURES = [
    {
        icon: <Car className="w-6 h-6" />,
        title: "Treatment Done in a Closed Booth",
        link: "/closed-booth"
    },
    {
        icon: <Minimize className="w-6 h-6" />,
        title: "Minimal Human Touch for Better Results",
        link: "/human-touch"
    }
];

export const CAR_REPAIR_SERVICES = [
    {
        category: "Air Conditioning",
        image: "/car-service/air-conditioning.png",
        layout: "horizontal",
        items: [
            "Air conditioning not cold",
            "Air Conditioner Condenser Replacement",
            "Air Conditioning Regas",
            "Blower motor replacement",
            "Air conditioning high-pressure hose replacement",
            "Fan speed resistor replacement",
            "Air conditioning compressor relay replacement",
            "Air conditioning pressure switch replacement",
            "Air conditioning low-pressure hose replacement",
            "Car Air Conditioner Compressor Replacement"
        ]
    },
    {
        category: "Auto Glass",
        image: "/car-service/auto-glass.jpg",
        layout: "vertical",
        items: [
            "Windscreen Replacement",
            "Side window replacement",
            "Windscreen chip repair",
            "Rear window replacement"
        ]
    },
    {
        category: "Battery",
        image: "/car-service/car-battery.jpg",
        layout: "vertical",
        items: [
            "Car Battery Replacement",
            "Battery cable replacement"
        ]
    },
    {
        category: "Body",
        image: "/car-service/car-body.jpg",
        layout: "vertical",
        items: [
            "Boot lock assembly replacement",
            "Car roof lining repair",
            "Sunroof repair"
        ]
    },
    {
        category: "Brakes",
        image: "/car-service/brakes.jpg",
        layout: "full-width",
        items: [
            "Front Brake Pad Replacement",
            "ABS/wheel speed sensor replacement",
            "Front Brake Pad and Rotor Replacement",
            "Rear brake pad replacement",
            "Rear brake pad and rotor replacement",
            "Brake system flush",
            "Brake caliper replacement",
            "Brake light bulb replacement",
            "Brake drum replacement",
            "Brake hose replacement",
            "Brake shoe replacement",
            "Brake master cylinder replacement",
            "Brake wheel cylinder replacement",
            "Handbrake cable replacement",
            "Front shudder when braking repair",
            "Brake booster replacement",
            "Handbrake shoe replacement",
            "Brake light switch replacement",
            "Rear shudder when braking repair"
        ]
    },
    {
        category: "Clutch",
        image: "/car-service/clutch.jpg", // Placeholder using existing image
        layout: "vertical",
        items: [
            "Clutch Replacement",
            "Clutch fluid replacement",
            "Clutch master cylinder replacement",
            "Clutch cable replacement",
            "Clutch cable adjustment"
        ]
    },
    {
        category: "Cooling",
        image: "/car-service/cooling.jpg",
        layout: "vertical",
        items: [
            "Cooling system flush",
            "Coolant level sensor replacement",
            "Water pump replacement",
            "Cooling fan replacement",
            "Oil cooler replacement",
            "Radiator top hose replacement",
            "Radiator Replacement",
            "Thermostat Replacement",
            "Heater hose replacement",
            "Coolant reservoir replacement",
            "Radiator bottom hose replacement"
        ]
    },
    {
        category: "Electrical",
        image: "/car-service/electrical.jpg",
        layout: "full-width",
        items: [
            "Headlight bulb replacement",
            "Horn replacement",
            "Throttle position sensor replacement",
            "Alternator Replacement",
            "Ignition coil replacement",
            "Starter motor replacement",
            "Spark plug cable replacement",
            "Fuse replacement",
            "Glow plug replacement",
            "Ignition switch replacement",
            "Indicator bulb replacement",
            "Oil pressure sensor replacement",
            "Power window switch replacement",
            "Headlight switch replacement",
            "Power mirror switch replacement",
            "Window regulator replacement",
            "Key does not turn in ignition"
        ]
    },
    {
        category: "Engine",
        image: "/car-service/engine.jpg",
        layout: "full-width",
        items: [
            "Timing belt replacement",
            "Drive belt replacement",
            "Engine mount replacement",
            "Oil pump replacement",
            "Head gasket replacement",
            "Valve cover gasket replacement",
            "Oil pan gasket replacement",
            "Rear main seal replacement",
            "Piston ring replacement",
            "Engine block replacement",
            "Cylinder head replacement",
            "Camshaft replacement",
            "Crankshaft replacement"
        ]
    },
    {
        category: "Installation",
        image: "/car-service/car-service-banner-bg.jpg", // Placeholder
        layout: "vertical",
        items: [
            "Dash cam installation",
            "Reverse camera installation",
            "Stereo installation",
            "UHF radio installation",
            "Light bar installation",
            "Tow bar installation"
        ]
    },
    {
        category: "Lights",
        image: "/car-service/light.jpg", // Placeholder
        layout: "vertical",
        items: [
            "Headlight bulb replacement",
            "Tail light bulb replacement",
            "Indicator bulb replacement",
            "Fog light replacement",
            "Number plate light replacement",
            "Interior light replacement"
        ]
    },
    {
        category: "Scratch, Dent & Paint",
        image: "/car-service/scratch.jpg", // Placeholder
        layout: "full-width",
        items: [
            "Paint repair",
            "Scratch repair",
            "Dent removal",
            "Bumper repair",
            "Alloy wheel repair",
            "Rust repair",
            "Panel beating",
            "Spray painting",
            "Car detailing",
            "Paint protection",
            "Ceramic coating",
            "Cut and polish"
        ]
    },
    {
        category: "Suspension / Steering",
        image: "/car-service/suspension.jpg", // Placeholder
        layout: "full-width",
        items: [
            "Shock absorber replacement",
            "Strut replacement",
            "Wheel alignment",
            "Power steering flush",
            "Power steering pump replacement",
            "Power steering rack replacement",
            "Ball joint replacement",
            "Control arm replacement",
            "Sway bar link replacement",
            "Tie rod end replacement",
            "Wheel bearing replacement",
            "Coil spring replacement",
            "Leaf spring replacement",
            "Suspension bush replacement",
            "CV joint replacement",
            "CV boot replacement"
        ]
    },
    {
        category: "Transmission",
        image: "/car-service/transmission.jpg", // Placeholder
        layout: "full-width",
        items: [
            "Automatic transmission service",
            "Manual transmission service",
            "Transmission fluid change",
            "Transmission flush",
            "Clutch replacement",
            "Flywheel resurfacing",
            "Differential service",
            "Transfer case service",
            "Transmission mount replacement",
            "Gearbox repair",
            "Transmission solenoid replacement",
            "Transmission cooler installation"
        ]
    },
    {
        category: "Timing Belt",
        image: "/car-service/engine.jpg", // Placeholder
        layout: "vertical",
        items: [
            "Timing belt replacement",
            "Timing chain replacement",
            "Water pump replacement",
            "Tensioner replacement",
            "Idler pulley replacement"
        ]
    },
    {
        category: "Tyre",
        image: "/car-service/tyres.jpg", // Placeholder
        layout: "vertical",
        items: [
            "Tyre replacement",
            "Tyre puncture repair",
            "Wheel balancing",
            "Wheel rotation",
            "Wheel alignment"
        ]
    },
    {
        category: "Wheel",
        image: "/car-service/wheel.jpg", // Placeholder
        layout: "vertical",
        items: [
            "Wheel bearing replacement",
            "Wheel stud replacement",
            "Wheel nut replacement",
            "Rim repair"
        ]
    },
    {
        category: "Window Tinting",
        image: "/car-service/window.jpg", // Placeholder
        layout: "vertical",
        items: [
            "Car window tinting",
            "Tint removal",
            "UV protection tint",
            "Privacy tint"
        ]
    },
    {
        category: "Wipers",
        image: "/car-service/wiper.jpg", // Placeholder
        layout: "vertical",
        items: [
            "Wiper blade replacement",
            "Wiper arm replacement",
            "Wiper motor replacement",
            "Windscreen washer pump replacement"
        ]
    }
];

export const MAIN_NAV_ITEMS = [
    { name: "Vehicles", href: "/car-servicing" },
    { name: "Repairs", href: "/car-repair-service" },
    { name: "Mechanics", href: "/mechanics" },
    { name: "Design", href: "/car-advice" },
    { name: "Innovation", href: "/fleet-guru" },
    { name: "Exclusive", href: "/contact" },
];

export const MECHANIC_ARTICLES = [
    {
        id: 1,
        title: "BNPL & Flexible Payments Car Servicing & Car Repairs",
        author: "AutoGuru",
        category: "ARTICLES",
        image: "/car-service/tyres.jpg" // Placeholder for BNPL
    },
    {
        id: 2,
        title: "Can A Mobile Mechanic Do The Same Job As A Workshop?",
        author: "Joel Elton",
        category: "ASK A MECHANIC",
        image: "/mechanic/mechanic.png"
    },
    {
        id: 3,
        title: "Will I Void My New Car Warranty If I Use An Independent Workshop",
        author: "Rita Bonivento",
        category: "CAR SAFETY",
        image: "/car-service/engine.jpg"
    },
    {
        id: 4,
        title: "If I Use AutoGuru Will That Affect My Warranty?",
        author: "Joel Elton",
        category: "ASK A MECHANIC",
        image: "/car-service/brakes.jpg"
    },
    {
        id: 5,
        title: "What's The Difference Between Basic & Logbook Services?",
        author: "Joel Elton",
        category: "ASK A MECHANIC",
        image: "/car-service/suspension.jpg"
    },
    {
        id: 6,
        title: "How often should my car be serviced?",
        author: "Joel Elton",
        category: "ARTICLES",
        image: "/mechanic/car.png"
    }
];

export const MECHANIC_FAQS = [
    {
        question: "Where can I get my car serviced?",
        answer: "You can get your car serviced at any of our certified mechanics or workshops listed on AutoGuru. We have a wide network of trusted professionals across the country."
    },
    {
        question: "Do I need to service my car before I sell it?",
        answer: "While not legally required, servicing your car before selling it can increase its value and appeal to potential buyers, showing that the vehicle has been well-maintained."
    },
    {
        question: "Do I legally need to get my car serviced regularly?",
        answer: "There is no legal requirement to service your car, but regular servicing is crucial for safety, reliability, and maintaining your vehicle's warranty and resale value."
    },
    {
        question: "Can I Buy Now, Pay Later my car service?",
        answer: "Yes! AutoGuru offers flexible payment options including Afterpay, Humm, and Zip, allowing you to service your car now and pay later."
    },
    {
        question: "Will servicing my car with an independent mechanic void my warranty?",
        answer: "No. As long as the mechanic is qualified and uses parts that meet the manufacturer's specifications, your warranty will remain intact."
    }
];

export const MOBILE_MECHANIC_FAQS = [
    {
        question: "What services can a mobile mechanic perform?",
        answer: "Mobile mechanics can perform a wide range of services including logbook servicing, brake repairs, battery replacements, diagnostics, and general repairs right at your location."
    },
    {
        question: "Is it more expensive to use a mobile mechanic?",
        answer: "Not necessarily. Mobile mechanics often have lower overhead costs than traditional workshops, which can sometimes result in more competitive pricing."
    },
    {
        question: "Do I need to provide tools or equipment?",
        answer: "No, our mobile mechanics come fully equipped with all the necessary tools and diagnostic equipment to complete the job."
    },
    {
        question: "What if my car needs a major repair that can't be done on-site?",
        answer: "If a repair requires a workshop hoist or specialized equipment, the mobile mechanic will advise you on the best course of action and can often arrange for the vehicle to be taken to a workshop."
    }
];

export const MOBILE_MECHANIC_ARTICLES = [
    {
        id: 1,
        title: "The Convenience of Mobile Mechanics: We Come to You",
        author: "AutoGuru",
        category: "ARTICLES",
        image: "/car-service/car-image.png"
    },
    {
        id: 2,
        title: "5 Signs You Need a Mobile Mechanic ASAP",
        author: "Joel Elton",
        category: "ASK A MECHANIC",
        image: "/car-service/engine.jpg"
    },
    {
        id: 3,
        title: "How to Prepare for Your Mobile Mechanic Visit",
        author: "Rita Bonivento",
        category: "CAR SAFETY",
        image: "/car-service/brakes.jpg"
    }
];



export const COMMON_BATTERY_REPAIRS = [
    {
        id: 1,
        title: "Car Battery Replacement",
        image: "/car-service/car-battery.jpg"
    },
    {
        id: 2,
        title: "Battery Cable Replacement",
        image: "/car-service/electrical.jpg"
    }
];



export const COMMON_WINDSCREEN_REPAIRS = [
    {
        id: 1,
        title: "Windscreen Chip Repair",
        image: "/car-service/auto-glass.jpg"
    },
    {
        id: 2,
        title: "Windscreen Replacement",
        image: "/car-service/window.jpg"
    }
];

export const AIR_CONDITIONING_FAQS = [
    {
        question: "How often should I service my car's air conditioning?",
        answer: "It is recommended to service your car's air conditioning every 1-2 years to ensure it runs efficiently and to prevent gas leaks."
    },
    {
        question: "Why is my car AC blowing warm air?",
        answer: "Common causes include low refrigerant gas, a blocked condenser, a faulty compressor, or electrical issues. A diagnostic check can identify the problem."
    },
    {
        question: "What is an AC re-gas?",
        answer: "An AC re-gas involves removing the old refrigerant gas and replacing it with new gas to restore the cooling performance of your air conditioning system."
    },
    {
        question: "Does AC service include checking for leaks?",
        answer: "Yes, a comprehensive AC service includes a pressure test and leak detection to ensure the system is sealed and operating correctly."
    }
];



export const COMMON_AIR_CONDITIONING_REPAIRS = [
    {
        id: 1,
        title: "AC Re-gas & Service",
        image: "/car-service/air-conditioning.png"
    },
    {
        id: 2,
        title: "AC Compressor Replacement",
        image: "/car-service/cooling.jpg"
    }
];

export const RECENT_REVIEWS = [
    {
        id: 1,
        customer: "Dean P",
        car: "2018 Renault Captur",
        mechanic: "NSW Vehicle Inspections",
        rating: 4,
        date: "19 November 2025",
        review: "They helped me out with a last minute rego inspection, even though they were clearly busy at the time. This showed great customer service and really impressed me.",
        image: "/hero/hero-car-1.avif"
    },
    {
        id: 2,
        customer: "Sharon G",
        car: "2014 Ford Focus",
        mechanic: "Rapid Tune Airport West",
        rating: 5,
        date: "19 November 2025",
        review: "Josh went above and beyond. Very happy with repairs.",
        image: "/hero/hero-car-2.avif"
    },
    {
        id: 3,
        customer: "Kam N",
        car: "2013 Toyota Camry",
        mechanic: "A1 Auto Service & Repair",
        rating: 5,
        date: "19 November 2025",
        review: "I'm new to the area and found this shop through AutoGuru. I booked a basic service and RWC for my Camry, and the whole process was quick, smooth, and fairly priced.",
        image: "/hero/hero-car-3.avif"
    },
    {
        id: 4,
        customer: "Edy S",
        car: "2018 Honda Jazz",
        mechanic: "Bridgestone Select Tyre & Auto",
        rating: 5,
        date: "16 November 2025",
        review: "Very good service and have 100 percent trust on them.",
        image: "/hero/hero-car-1.avif"
    },
    {
        id: 5,
        customer: "Joseph Z",
        car: "2009 Toyota Kluger",
        mechanic: "Gepps Cross Autocare",
        rating: 5,
        date: "29 October 2025",
        review: "Flexibility and fast service...",
        image: "/hero/hero-car-2.avif"
    },
    {
        id: 6,
        customer: "Paul K",
        car: "2001 Jeep Wrangler",
        mechanic: "Ultra Tune Tuggeranong",
        rating: 5,
        date: "8 November 2025",
        review: "Ultra Tune, Tuggeranong worked with me to resolve a complex mechanical issue with my 25 year old vehicle. Very happy.",
        image: "/hero/hero-car-3.avif"
    }
];

export const LOCATIONS = [
    {
        state: "NSW",
        suburbs: ["Albury", "Armidale", "Ballina", "Bathurst", "Central Coast", "Central West", "Coffs Harbour", "Dubbo", "Goulburn", "Grafton", "Griffith", "Hunter", "Illawarra", "Kempsey", "Lake Macquarie", "Lismore", "Lithgow", "New England", "Newcastle", "North Coast", "Nowra", "Orana", "Orange", "Port Macquarie", "Queanbeyan", "Riverina", "Singleton", "South Eastern", "Sydney", "Tweed Heads", "Wagga Wagga", "Wollongong"]
    },
    {
        state: "VIC",
        suburbs: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton", "Melton", "Sunbury", "Mildura", "Warrnambool", "Traralgon", "Wangaratta", "Ocean Grove", "Moe", "Horsham", "Bairnsdale", "Morwell", "Sale", "Echuca", "Wodonga", "Torquay", "Colac", "Portland", "Swan Hill", "Hamilton", "Benalla", "Maryborough", "Ararat", "Castlemaine", "Seymour", "Stawell", "Kyabram", "Cobram"]
    },
    {
        state: "QLD",
        suburbs: ["Brisbane", "Gold Coast", "Sunshine Coast", "Townsville", "Cairns", "Toowoomba", "Mackay", "Rockhampton", "Hervey Bay", "Bundaberg", "Gladstone", "Maryborough", "Mount Isa", "Gympie", "Nambour", "Bongaree", "Yeppoon", "Warwick", "Emerald", "Dalby", "Bowen", "Ayr", "Charters Towers", "Kingaroy", "Innisfail", "Moranbah", "Roma", "Gatton", "Mareeba", "Goondiwindi", "Blackwater", "Chinchilla"]
    },
    {
        state: "SA",
        suburbs: ["Adelaide", "Mount Gambier", "Gawler", "Whyalla", "Murray Bridge", "Mount Barker", "Port Lincoln", "Port Pirie", "Victor Harbor", "Port Augusta", "Goolwa", "Nuriootpa", "Strathalbyn", "Naracoorte", "Renmark", "Millicent", "Tanunda", "Kadina", "Berri", "Loxton", "Roxby Downs", "Peterborough", "Ceduna", "Coober Pedy", "Clare", "Wallaroo", "Moonta", "Kapunda", "Bordertown", "Waikerie", "Mannum", "Angaston"]
    },
    {
        state: "WA",
        suburbs: ["Perth", "Bunbury", "Geraldton", "Kalgoorlie", "Albany", "Busselton", "Karratha", "Broome", "Port Hedland", "Esperance", "Carnarvon", "Collie", "Northam", "Newman", "Kununurra", "Manjimup", "Narrogin", "Margaret River", "Katanning", "Derby", "Tom Price", "Exmouth", "Donnybrook", "Merredin", "Bridgetown", "Harvey", "Denmark", "York", "Pinjarra", "Waroona", "Moora", "Mount Barker"]
    },
    {
        state: "TAS",
        suburbs: ["Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone", "Kingston", "New Norfolk", "Wynyard", "George Town", "Blackmans Bay", "Sorell", "Smithton", "Penguin", "Latrobe", "Longford", "Deloraine", "Perth", "Scottsdale", "St Helens", "Huonville", "Queenstown", "Zeehan", "Rosebery", "Sheffield", "Westbury", "Evandale", "Beaconsfield", "Bridport", "Campbell Town", "Oatlands", "Bothwell", "Ross"]
    },
    {
        state: "ACT",
        suburbs: ["Canberra", "Queanbeyan", "Goulburn", "Yass", "Cooma", "Batemans Bay", "Bega", "Merimbula", "Ulladulla", "Nowra", "Bowral", "Mittagong", "Moss Vale", "Picton", "Camden", "Campbelltown", "Liverpool", "Parramatta", "Penrith", "Blacktown", "Bankstown", "Hurstville", "Sutherland", "Cronulla", "Wollongong", "Shellharbour", "Kiama", "Gerringong", "Berry", "Kangaroo Valley", "Bundanoon", "Robertson"]
    },
    {
        state: "NT",
        suburbs: ["Darwin", "Alice Springs", "Palmerston", "Katherine", "Nhulunbuy", "Tennant Creek", "Wadeye", "Jabiru", "Yulara", "Alyangula", "Maningrida", "Galiwinku", "Nguiu", "Milingimbi", "Angurugu", "Ramingining", "Oenpelli", "Gapuwiyak", "Yuendumu", "Lajamanu", "Hermannsburg", "Santa Teresa", "Kintore", "Papunya", "Borroloola", "Elliott", "Mataranka", "Pine Creek", "Adelaide River", "Batchelor", "Timber Creek", "Daly Waters"]
    }
];

export const CAR_ADVICE_TIPS = [
    {
        category: "Maintenance Tips",
        icon: "Wrench",
        tips: [
            "Change oil every 5,000-7,500 miles depending on your vehicle and oil type",
            "Rotate tires every 6,000-8,000 miles to ensure even wear",
            "Check tire pressure monthly, especially with temperature changes",
            "Replace air filter every 12,000-15,000 miles",
            "Flush brake fluid every 2 years or 24,000 miles"
        ]
    },
    {
        category: "Cost-Saving Tips",
        icon: "PiggyBank",
        tips: [
            "Do regular maintenance to prevent expensive repairs",
            "Compare prices on parts and services before purchasing",
            "Consider independent mechanics for routine maintenance",
            "Buy tires in sets of 4 for optimal performance",
            "Keep a maintenance log to track service history"
        ]
    },
    {
        category: "Common Issues",
        icon: "AlertTriangle",
        tips: [
            "Warning lights: Don't ignore them, get them checked",
            "Strange noises: Usually indicate wear or damage",
            "Poor fuel economy: Often related to maintenance",
            "Vibrations: Can indicate wheel, brake, or engine issues",
            "Leaks: Check fluid levels regularly if you notice any"
        ]
    }
];

export const CAR_ADVICE_ARTICLES = [
    {
        id: 1,
        title: "Winter Car Maintenance Essentials",
        author: "AutoGuru",
        category: "MAINTENANCE",
        image: "/hero/hero-car-1.avif"
    },
    {
        id: 2,
        title: "Signs You Need Brake Service",
        author: "Joel Elton",
        category: "SAFETY",
        image: "/hero/hero-car-2.avif"
    },
    {
        id: 3,
        title: "Extending Your Car's Lifespan",
        author: "Rita Bonivento",
        category: "TIPS & TRICKS",
        image: "/hero/hero-car-3.avif"
    }
];

export const CAR_ADVICE_FAQS = [
    {
        question: "How often should I get my car serviced?",
        answer: "Most manufacturers recommend servicing every 10,000-15,000 km or 6-12 months, whichever comes first. However, consult your owner's manual for specific recommendations for your vehicle model and driving conditions."
    },
    {
        question: "When should I replace my brake pads?",
        answer: "Brake pads typically last 25,000-65,000 km, depending on driving habits and vehicle type. Replace them when they're down to 3mm thickness, or if you hear squeaking or grinding sounds."
    },
    {
        question: "Why is my check engine light on?",
        answer: "The check engine light can indicate many things, from minor issues like a loose gas cap to more serious problems. Have it checked by a professional to prevent further damage and ensure optimal performance."
    }
];

export const CAR_BATTERY_ARTICLES = [
    {
        id: 1,
        title: "BNPL & Flexible Payments Car Servicing & Car Repairs",
        author: "AutoGuru",
        category: "ARTICLES",
        image: "/hero/hero-car-1.avif"
    },
    {
        id: 2,
        title: "Mobile car battery replacement",
        author: "Rowan Johnstone",
        category: "ARTICLES",
        image: "/hero/hero-car-2.avif"
    },
    {
        id: 3,
        title: "5 tips to make your battery last longer",
        author: "Jason Unrau",
        category: "ARTICLES",
        image: "/hero/hero-car-3.avif"
    }
];

export const CAR_BATTERY_FAQS = [
    {
        question: "How long will a car battery last?",
        answer: "On average, a car battery lasts between 3 to 5 years. However, this can vary depending on your driving habits, climate, and the type of vehicle you drive."
    },
    {
        question: "How much does a car battery cost?",
        answer: "Car battery prices vary depending on the make and model of your vehicle. You can get a fixed-price quote instantly on AutoGuru."
    },
    {
        question: "Does the battery warning light mean I need a new battery?",
        answer: "Not necessarily. It could indicate a problem with the alternator, a loose connection, or a dying battery. It's best to get it tested by a professional."
    },
    {
        question: "Will driving my car recharge a flat battery?",
        answer: "Driving can recharge a battery if it was only slightly drained. However, if the battery is old or deeply discharged, driving might not be enough, and you may need a replacement."
    },
    {
        question: "Will the battery go flat if I don't use my car?",
        answer: "Yes, batteries naturally lose charge over time, even when not in use. If you plan to leave your car parked for an extended period, consider using a trickle charger."
    },
    {
        question: "Do I need a special battery for a vehicle fitted with a stop/start feature?",
        answer: "Yes, vehicles with stop/start technology require specialized batteries (like AGM or EFB) to handle the frequent starting cycles."
    },
    {
        question: "Which car battery brand does AutoGuru recommend?",
        answer: "We recommend high-quality brands that offer reliable performance and good warranties. Our mechanics supply top-rated batteries suitable for your specific vehicle."
    }
];

export const BATTERY_SERVICES_LINKS = [
    { label: "Car Battery Replacement", href: "/car-repair-service/car-battery-replacement" },
    { label: "Battery cable replacement", href: "/car-battery/cable-replacement" },
    { label: "Car Battery Testing", href: "/car-battery/testing" },
    { label: "Alternator Repair", href: "/car-battery/alternator" }
];

export const WINDSCREEN_ARTICLES = [
    {
        id: 1,
        title: "Windscreen Chip Repair vs Replacement",
        author: "AutoGuru",
        category: "ARTICLES",
        image: "/hero/hero-car-1.avif"
    },
    {
        id: 2,
        title: "How much does a windscreen replacement cost?",
        author: "Rowan Johnstone",
        category: "ARTICLES",
        image: "/hero/hero-car-2.avif"
    },
    {
        id: 3,
        title: "Is it illegal to drive with a cracked windscreen?",
        author: "Jason Unrau",
        category: "ARTICLES",
        image: "/hero/hero-car-3.avif"
    }
];

export const WINDSCREEN_FAQS = [
    {
        question: "Can my windscreen be repaired?",
        answer: "If the chip is smaller than a $1 coin and not in the driver's direct line of sight, it can often be repaired. Otherwise, a replacement is necessary."
    },
    {
        question: "How long does a windscreen replacement take?",
        answer: "A replacement usually takes about 60-90 minutes, but you'll need to wait another hour for the adhesive to cure before driving."
    },
    {
        question: "Do you offer mobile windscreen service?",
        answer: "Yes! Our mobile technicians can come to your home or workplace to repair or replace your windscreen."
    },
    {
        question: "Will my insurance cover it?",
        answer: "Many comprehensive insurance policies cover windscreen damage. We can often bill your insurer directly."
    }
];

export const WINDSCREEN_SERVICES_LINKS = [
    { label: "Windscreen Replacement", href: "/car-repair-service/windscreen-replacement" },
    { label: "Chip Repair", href: "/car-repair-service/chip-repair" },
    { label: "Rear Window Replacement", href: "/car-repair-service/rear-window" },
    { label: "Side Window Replacement", href: "/car-repair-service/side-window" }
];

export const AIR_CONDITIONING_ARTICLES = [
    {
        id: 1,
        title: "Why is my car AC blowing hot air?",
        author: "AutoGuru",
        category: "ARTICLES",
        image: "/hero/hero-car-1.avif"
    },
    {
        id: 2,
        title: "How often should I regas my car AC?",
        author: "Rowan Johnstone",
        category: "ARTICLES",
        image: "/hero/hero-car-2.avif"
    },
    {
        id: 3,
        title: "Car AC smells bad? Here's why.",
        author: "Jason Unrau",
        category: "ARTICLES",
        image: "/hero/hero-car-3.avif"
    }
];


export const AIR_CONDITIONING_SERVICES_LINKS = [
    { label: "AC Regas", href: "/car-repair-service/car-air-conditioning" },
    { label: "AC Service", href: "/car-repair-service/car-air-conditioning/service" },
    { label: "Compressor Replacement", href: "/car-repair-service/car-air-conditioning/compressor" },
    { label: "Leak Detection", href: "/car-repair-service/car-air-conditioning/leak-detection" }
];
