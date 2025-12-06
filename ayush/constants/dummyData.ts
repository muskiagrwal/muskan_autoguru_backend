
export const MOCK_QUOTES = [
    { id: 1, customer: "John Doe", vehicle: "Toyota Camry 2018", service: "Logbook Service", status: "Open", date: "2023-11-20" },
    { id: 2, customer: "Jane Smith", vehicle: "Mazda 3 2019", service: "Brake Replacement", status: "Responded", date: "2023-11-21" },
    { id: 3, customer: "Bob Brown", vehicle: "Ford Ranger 2020", service: "General Repair", status: "Accepted", date: "2023-11-19" },
    { id: 4, customer: "Alice Green", vehicle: "Honda Civic 2021", service: "Oil Change", status: "Open", date: "2023-11-22" },
    { id: 5, customer: "Charlie White", vehicle: "Hyundai i30 2017", service: "Battery Replacement", status: "Responded", date: "2023-11-23" },
];

export const MOCK_INQUIRIES = [
    { _id: '1', name: 'Alice Johnson', email: 'alice@example.com', subject: 'Service Inquiry', message: 'How much for a full service?', createdAt: '2023-11-25T10:00:00Z', status: 'New' },
    { _id: '2', name: 'Bob Williams', email: 'bob@example.com', subject: 'Booking Issue', message: 'I cannot book online.', createdAt: '2023-11-24T14:30:00Z', status: 'Read' },
    { _id: '3', name: 'Charlie Davis', email: 'charlie@example.com', subject: 'Feedback', message: 'Great service last time!', createdAt: '2023-11-23T09:15:00Z', status: 'Replied' },
    { _id: '4', name: 'Diana Evans', email: 'diana@example.com', subject: 'Complaint', message: 'Wait time was too long.', createdAt: '2023-11-22T16:45:00Z', status: 'New' },
];

export const MOCK_BOOKINGS = [
    { _id: '1', name: 'John Doe', email: 'john@example.com', serviceType: 'Logbook Service', vehicleName: 'Toyota', vehicleModel: 'Camry', createdAt: '2023-11-20T10:00:00Z', status: 'pending' },
    { _id: '2', name: 'Jane Smith', email: 'jane@example.com', serviceType: 'Brake Repair', vehicleName: 'Mazda', vehicleModel: '3', createdAt: '2023-11-21T14:00:00Z', status: 'confirmed' },
    { _id: '3', name: 'Bob Brown', email: 'bob@example.com', serviceType: 'General Repair', vehicleName: 'Ford', vehicleModel: 'Ranger', createdAt: '2023-11-19T09:00:00Z', status: 'completed' },
    { _id: '4', name: 'Alice Green', email: 'alice@example.com', serviceType: 'Oil Change', vehicleName: 'Honda', vehicleModel: 'Civic', createdAt: '2023-11-22T11:30:00Z', status: 'cancelled' },
];

export const MOCK_MECHANICS = [
    { _id: '1', businessName: 'Auto Fix Pro', contactName: 'Mike Ross', email: 'mike@autofix.com', address: '123 Main St, Sydney', rating: 4.8, status: 'approved' },
    { _id: '2', businessName: 'Mechanic Masters', contactName: 'Sarah Lee', email: 'sarah@masters.com', address: '456 High St, Melbourne', rating: 4.5, status: 'pending' },
    { _id: '3', businessName: 'Quick Repairs', contactName: 'Tom Jones', email: 'tom@quickrepairs.com', address: '789 Broadway, Brisbane', rating: 4.2, status: 'approved' },
    { _id: '4', businessName: 'Best Mechanics', contactName: 'Emily Clark', email: 'emily@bestmech.com', address: '321 Park Ave, Perth', rating: 4.9, status: 'rejected' },
];

export const MOCK_SERVICES = [
    {
        _id: '1',
        title: 'Logbook Service',
        slug: 'logbook-service',
        description: 'Comprehensive logbook service for your vehicle.',
        icon: 'Book',
        features: ['Oil Change', 'Filter Replacement', 'Safety Check'],
        providers: [],
        isActive: true,
        subServices: [
            { id: '1-1', name: 'Minor Service', description: 'Basic checkup and oil change.', price: 150 },
            { id: '1-2', name: 'Major Service', description: 'Full inspection and replacement of key components.', price: 350 }
        ],
        availableSubServices: [
            "Minor Service",
            "Major Service",
            "Premium Service",
            "Fleet Service",
            "Uber Inspection"
        ]
    },
    {
        _id: '2',
        title: 'Brake Repair',
        slug: 'brake-repair',
        description: 'Expert brake repair and replacement services.',
        icon: 'Disc',
        features: ['Brake Pad Replacement', 'Rotor Resurfacing', 'Fluid Check'],
        providers: [],
        isActive: true,
        subServices: [
            { id: '2-1', name: 'Brake Pad Replacement', description: 'Replace worn brake pads.', price: 200 },
            { id: '2-2', name: 'Brake Fluid Flush', description: 'Replace old brake fluid.', price: 100 }
        ],
        availableSubServices: [
            "Brake Pad Replacement",
            "Brake Fluid Flush",
            "Rotor Machining",
            "Caliper Replacement",
            "ABS Module Repair"
        ]
    },
    {
        _id: '3',
        title: 'General Repair',
        slug: 'general-repair',
        description: 'General mechanical repairs for all makes and models.',
        icon: 'Wrench',
        features: ['Engine Diagnostics', 'Suspension Repair', 'Transmission Service'],
        providers: [],
        isActive: false,
        subServices: [],
        availableSubServices: [
            "Engine Diagnostics",
            "Suspension Repair",
            "Transmission Service",
            "Clutch Replacement",
            "Radiator Repair"
        ]
    },
    {
        _id: '4',
        title: 'Air Conditioning',
        slug: 'air-conditioning',
        description: 'Keep your car cool with our AC services.',
        icon: 'Wind',
        features: ['Regas', 'Leak Test', 'Compressor Repair'],
        providers: [],
        isActive: true,
        subServices: [
            { id: '4-1', name: 'Regas', description: 'Recharge air conditioning gas.', price: 180 },
            { id: '4-2', name: 'Leak Test', description: 'Check for leaks in the system.', price: 80 },
            { id: '4-3', name: 'Compressor Replacement', description: 'Replace faulty compressor.', price: 600 }
        ],
        availableSubServices: [
            "Regas",
            "Leak Test",
            "Compressor Replacement",
            "Condenser Replacement",
            "Evaporator Cleaning"
        ]
    },
];

export const MOCK_REVIEWS = [
    { _id: '1', reviewerName: 'John Doe', mechanicName: 'Auto Fix Pro', rating: 5, comment: 'Great service! Highly recommended.', createdAt: '2023-11-20T10:00:00Z' },
    { _id: '2', reviewerName: 'Jane Smith', mechanicName: 'Mechanic Masters', rating: 4, comment: 'Good job but a bit expensive.', createdAt: '2023-11-18T15:00:00Z' },
    { _id: '3', reviewerName: 'Bob Brown', mechanicName: 'Quick Repairs', rating: 3, comment: 'Average service, took longer than expected.', createdAt: '2023-11-15T09:00:00Z' },
    { _id: '4', reviewerName: 'Alice Green', mechanicName: 'Auto Fix Pro', rating: 5, comment: 'Excellent work, very professional.', createdAt: '2023-11-22T11:30:00Z' },
];

export const MOCK_VEHICLES_DATA = [
    {
        id: "ford",
        name: "Ford",
        logo: "https://logo.clearbit.com/ford.com",
        description: "You'll go further in a tough-built Ford if you keep it looked after...",
        serviceGuide: "Our Ford log book service price guide...",
        facts: "One of the word's great car brands...",
        serviceCosts: { logbook: 349, basic: 210 },
        models: [
            {
                id: "ford-falcon",
                name: "Ford Falcon",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=300&q=80",
                rating: 4.7,
                reviews: 5,
                quotesProvided: "410,027+",
                expertMechanics: "16,079+",
                description: "The Ford Falcon has been one of Australia's great cars...",
                serviceIntervals: [
                    "105,000km / 84mth", "100000 kms / 36 months", "200000 kms / 120 months"
                ]
            },
            {
                id: "ford-focus",
                name: "Ford Focus",
                image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=300&q=80",
                rating: 4.6,
                reviews: 4,
                quotesProvided: "320,150+",
                expertMechanics: "12,500+",
                description: "The Ford Focus is a compact car...",
                serviceIntervals: [
                    "15,000km / 12mth", "30,000km / 24mth"
                ]
            }
        ]
    },
    {
        id: "toyota",
        name: "Toyota",
        logo: "https://logo.clearbit.com/toyota.com",
        description: "Oh what a feeling! Toyota reliability needs regular care.",
        serviceGuide: "Trusted Toyota mechanics.",
        facts: "Toyota is one of the largest car manufacturers...",
        serviceCosts: { logbook: 310, basic: 180 },
        models: [
            {
                id: "toyota-corolla",
                name: "Toyota Corolla",
                image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=300&q=80",
                rating: 4.8,
                reviews: 12,
                quotesProvided: "600,000+",
                expertMechanics: "20,000+",
                description: "The Toyota Corolla is the world's best-selling car...",
                serviceIntervals: [
                    "10,000km / 6mth", "20,000km / 12mth"
                ]
            }
        ]
    }
];
