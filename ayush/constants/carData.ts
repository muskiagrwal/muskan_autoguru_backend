export const carBrands = [
    { name: "Ford", slug: "ford", logo: "https://logo.clearbit.com/ford.com" },
    { name: "Honda", slug: "honda", logo: "https://logo.clearbit.com/honda.com" },
    { name: "Mazda", slug: "mazda", logo: "https://logo.clearbit.com/mazda.com" },
    { name: "Nissan", slug: "nissan", logo: "https://logo.clearbit.com/nissan-global.com" },
    { name: "Toyota", slug: "toyota", logo: "https://logo.clearbit.com/toyota.com" },
    { name: "Holden", slug: "holden", logo: "https://logo.clearbit.com/holden.com.au" },
    { name: "Hyundai", slug: "hyundai", logo: "https://logo.clearbit.com/hyundai.com" },
    { name: "Mitsubishi", slug: "mitsubishi", logo: "https://logo.clearbit.com/mitsubishi-motors.com" },
    { name: "Subaru", slug: "subaru", logo: "https://logo.clearbit.com/subaru.com" },
    { name: "Volkswagen", slug: "volkswagen", logo: "https://logo.clearbit.com/vw.com" },
];

export const carDetails: Record<string, any> = {
    ford: {
        name: "Ford",
        description: "You'll go further in a tough-built Ford if you keep it looked after, and a good start is to follow the scheduled service program as laid out in your car's log book. And just like a fast Ford GT, we can hook you up with a mechanic fast. And easily.",
        serviceGuide: "Our Ford log book service price guide provides you a comprehensive list of scheduled service intervals for the majority of popular Ford vehicles, from more than 1,200 mechanics and workshops Australia-wide. Select your car model details, the service you need, and you can search, compare and book a mechanic near your home or office, at a fair price.",
        facts: "One of the word's great car brands, founded by Henry Ford in 1903, in Dearborn, Michigan. At one point, in order to keep itself in rubber for tyres, Ford built a complete town in Brazil, on a 10,000 square kilometre plot of land, that he called Fordlandia. The venture was a financial disaster, and worse, not one tyre was made from Fordlandia latex. Ford sold the land in 1945.",
        links: [
            "How much does it cost for Ford service and repairs?",
            "Compare Ford car service costs",
            "Common Ford Repairs",
            "Ford Service Centres in Australia",
            "Ford Mobile Mechanics in Australia"
        ],
        serviceCosts: {
            logbook: 349,
            basic: 210
        },
        popularModels: [
            { name: "Ford Falcon", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=300&q=80", slug: "ford-falcon" }, // Placeholder image
            { name: "Ford Focus", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=300&q=80", slug: "ford-focus" },
            { name: "Ford Ranger", image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?auto=format&fit=crop&w=300&q=80", slug: "ford-ranger" },
            { name: "Ford Territory", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=300&q=80", slug: "ford-territory" }
        ],
        models: {
            "ford-falcon": {
                name: "Ford Falcon",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=300&q=80",
                rating: 4.7,
                reviews: 5,
                quotesProvided: "410,027+",
                expertMechanics: "16,079+",
                description: "The Ford Falcon has been one of Australia's great cars, and nothing will keep a car great like having it regularly serviced, and our logbook service guide is just the thing to get this done. Simply select the model, engine configuration, and transmission type that match your Ford Falcon, the service you need, and then add your postcode or town/suburb.",
                serviceIntervals: [
                    "105,000km / 84mth", "100000 kms / 36 months", "200000 kms / 120 months",
                    "75,000km / 60mth", "100000 kms / 60 months", "200000 kms / 72 months",
                    "10000 kms / 6 months", "105000 kms / 84 months", "210000 kms / 126 months",
                    "15000 kms / 12 months", "120000 kms / 72 months", "210000 kms / 168 months",
                    "20000 kms / 12 months", "120000 kms / 96 months", "220000 kms / 132 months",
                    "30000 kms / 18 months", "130000 kms / 78 months", "220000 kms / 48 months",
                    "30000 kms / 24 months", "135000 kms / 108 months", "225000 kms / 180 months",
                    "40000 kms / 24 months", "140000 kms / 84 months", "230000 kms / 138 months",
                    "45000 kms / 36 months", "150000 kms / 120 months", "240000 kms / 144 months",
                    "50000 kms / 30 months", "150000 kms / 90 months", "240000 kms / 192 months",
                    "60000 kms / 36 months", "160000 kms / 96 months", "250000 kms / 150 months",
                    "60000 kms / 48 months", "165000 kms / 132 months", "255000 kms / 204 months",
                    "70000 kms / 42 months", "170000 kms / 102 months", "260000 kms / 156 months",
                    "75000 kms / 60 months", "180000 kms / 108 months", "270000 kms / 162 months",
                    "80000 kms / 48 months", "180000 kms / 144 months", "270000 kms / 216 months",
                    "90000 kms / 54 months", "190000 kms / 114 months", "280000 kms / 168 months",
                    "90000 kms / 72 months", "195000 kms / 156 months"
                ]
            },
            "ford-focus": {
                name: "Ford Focus",
                image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=300&q=80",
                rating: 4.6,
                reviews: 4,
                quotesProvided: "320,150+",
                expertMechanics: "12,500+",
                description: "The Ford Focus is a compact car that's big on features and fun to drive. Keep it running smoothly with regular servicing. Our network of mechanics can help you with logbook servicing, repairs, and maintenance.",
                serviceIntervals: [
                    "15,000km / 12mth", "30,000km / 24mth", "45,000km / 36mth",
                    "60,000km / 48mth", "75,000km / 60mth", "90,000km / 72mth",
                    "105,000km / 84mth", "120,000km / 96mth", "135,000km / 108mth",
                    "150,000km / 120mth"
                ]
            },
            "ford-ranger": {
                name: "Ford Ranger",
                image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?auto=format&fit=crop&w=300&q=80",
                rating: 4.8,
                reviews: 8,
                quotesProvided: "550,000+",
                expertMechanics: "18,200+",
                description: "The Ford Ranger is built tough for work and play. Ensure it stays reliable with scheduled logbook servicing. We connect you with expert mechanics who know your Ranger inside and out.",
                serviceIntervals: [
                    "15,000km / 12mth", "30,000km / 24mth", "45,000km / 36mth",
                    "60,000km / 48mth", "75,000km / 60mth", "90,000km / 72mth",
                    "105,000km / 84mth", "120,000km / 96mth", "135,000km / 108mth",
                    "150,000km / 120mth"
                ]
            },
            "ford-territory": {
                name: "Ford Territory",
                image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=300&q=80",
                rating: 4.5,
                reviews: 6,
                quotesProvided: "280,000+",
                expertMechanics: "10,000+",
                description: "The Ford Territory is a family favorite. Keep your family safe on the road with regular maintenance and repairs. Find trusted mechanics for your Territory today.",
                serviceIntervals: [
                    "15,000km / 12mth", "30,000km / 24mth", "45,000km / 36mth",
                    "60,000km / 48mth", "75,000km / 60mth", "90,000km / 72mth",
                    "105,000km / 84mth", "120,000km / 96mth", "135,000km / 108mth",
                    "150,000km / 120mth"
                ]
            }
        },
        otherModels: [
            "Ford Capri", "Ford Cobra Ute", "Ford Corsair", "Ford Cougar", "Ford Courier", "Ford Econovan", "Ford EcoSport", "Ford Endura", "Ford Escape",
            "Ford F350", "Ford F6", "Ford F6X", "Ford Fairlane", "Ford Fairmont", "Ford Falcon", "Ford Festiva", "Ford Fiesta", "Ford Focus",
            "Ford GT", "Ford GT Ute", "Ford Ka", "Ford Kuga", "Ford Laser", "Ford LTD", "Ford Maverick", "Ford Mondeo", "Ford Mustang",
            "Ford Raider", "Ford Ranger", "Ford Super Pursuit", "Ford Taurus", "Ford TE50", "Ford Telstar", "Ford Territory", "Ford TL50", "Ford Transit"
        ],
        commonRepairs: [
            "Ford Tyre Replacement", "Ford Clutch Replacement", "Ford Timing Chain Replacement", "Ford AC Compressor Replacement", "Ford Radiator Replacement",
            "Ford Front Windscreen Replacement", "Ford Transmission Fluid Service/Replacement", "Ford Battery Replacement", "Ford Front Brake Pad Replacement", "Ford Passenger Side Mirror Replacement"
        ],
        serviceCentres: {
            NSW: ["Albury", "Armidale", "Ballina", "Bathurst", "Broken Hill", "Central Coast", "Central West", "Coffs Harbour", "Dubbo", "Goulburn", "Grafton", "Griffith", "Hunter", "Illawarra", "Kempsey", "Lake Macquarie", "Lismore", "Lithgow", "Mudgee", "Murray", "New England", "Newcastle", "North Coast", "Nowra", "Orana", "Orange", "Port Macquarie", "Queanbeyan", "Riverina", "Singleton", "South Eastern", "Sydney", "Tweed Heads", "Wagga Wagga", "Wollongong"],
            VIC: ["Melbourne", "Geelong", "Ballarat", "Bendigo"],
            QLD: ["Brisbane", "Gold Coast", "Sunshine Coast", "Cairns"],
            SA: ["Adelaide", "Mount Gambier"],
            WA: ["Perth", "Bunbury"],
            TAS: ["Hobart", "Launceston"],
            ACT: ["Canberra"],
            NT: ["Darwin"]
        },
        mobileMechanics: {
            NSW: ["Broken Hill", "Central Coast", "Central West", "Hunter", "Illawarra", "Lake Macquarie", "Newcastle", "North Coast", "Nowra", "Riverina", "Sydney", "Wagga Wagga", "Wollongong"],
            VIC: ["Melbourne", "Geelong"],
            QLD: ["Brisbane", "Gold Coast"],
            SA: ["Adelaide"],
            WA: ["Perth"],
            TAS: ["Hobart"],
            ACT: ["Canberra"],
            NT: ["Darwin"]
        }
    },
    honda: {
        name: "Honda",
        description: "Honda is known for reliability and engineering excellence. Keep your Honda running at its peak with regular servicing.",
        serviceGuide: "Find the best mechanics for your Honda. We have a network of trusted professionals ready to service your vehicle according to manufacturer specifications.",
        links: [
            "Honda Service Costs",
            "Logbook Service for Honda",
            "Honda Repair Specialists"
        ],
        serviceCosts: { logbook: 320, basic: 190 },
        popularModels: [],
        otherModels: ["Honda Civic", "Honda Accord", "Honda CR-V", "Honda HR-V", "Honda Jazz", "Honda Odyssey"],
        commonRepairs: ["Honda Brake Pad Replacement", "Honda Battery Replacement", "Honda Oil Change"],
        serviceCentres: { NSW: ["Sydney", "Newcastle"], VIC: ["Melbourne"], QLD: ["Brisbane"] },
        mobileMechanics: { NSW: ["Sydney"], VIC: ["Melbourne"] }
    },
    // Add generic data for others to avoid errors if clicked
    mazda: { name: "Mazda", description: "Zoom Zoom. Keep your Mazda in top condition.", serviceGuide: "Expert Mazda servicing available.", links: [], serviceCosts: { logbook: 330, basic: 200 }, popularModels: [], otherModels: [], commonRepairs: [], serviceCentres: {}, mobileMechanics: {} },
    nissan: { name: "Nissan", description: "Innovation that excites. Maintain your Nissan's performance.", serviceGuide: "Quality Nissan servicing.", links: [], serviceCosts: { logbook: 340, basic: 205 }, popularModels: [], otherModels: [], commonRepairs: [], serviceCentres: {}, mobileMechanics: {} },
    toyota: { name: "Toyota", description: "Oh what a feeling! Toyota reliability needs regular care.", serviceGuide: "Trusted Toyota mechanics.", links: [], serviceCosts: { logbook: 310, basic: 180 }, popularModels: [], otherModels: [], commonRepairs: [], serviceCentres: {}, mobileMechanics: {} },
    holden: { name: "Holden", description: "Australian favorite. Keep your Holden running strong.", serviceGuide: "Specialized Holden service.", links: [], serviceCosts: { logbook: 350, basic: 220 }, popularModels: [], otherModels: [], commonRepairs: [], serviceCentres: {}, mobileMechanics: {} },
    hyundai: { name: "Hyundai", description: "New thinking. New possibilities. Service your Hyundai today.", serviceGuide: "Certified Hyundai servicing.", links: [], serviceCosts: { logbook: 300, basic: 185 }, popularModels: [], otherModels: [], commonRepairs: [], serviceCentres: {}, mobileMechanics: {} },
    mitsubishi: { name: "Mitsubishi", description: "Drive your Ambition. Reliable Mitsubishi service.", serviceGuide: "Mitsubishi experts near you.", links: [], serviceCosts: { logbook: 325, basic: 195 }, popularModels: [], otherModels: [], commonRepairs: [], serviceCentres: {}, mobileMechanics: {} },
    subaru: { name: "Subaru", description: "Confidence in Motion. Boxer engine specialists.", serviceGuide: "Subaru logbook service.", links: [], serviceCosts: { logbook: 360, basic: 230 }, popularModels: [], otherModels: [], commonRepairs: [], serviceCentres: {}, mobileMechanics: {} },
    volkswagen: { name: "Volkswagen", description: "Das Auto. German engineering requires precision servicing.", serviceGuide: "VW specialist mechanics.", links: [], serviceCosts: { logbook: 380, basic: 250 }, popularModels: [], otherModels: [], commonRepairs: [], serviceCentres: {}, mobileMechanics: {} },
};
