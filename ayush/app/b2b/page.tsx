import React from 'react';
import B2BHero from '@/components/b2b/B2BHero';
import B2BBenefits from '@/components/b2b/B2BBenefits';
import B2BHowItWorks from '@/components/b2b/B2BHowItWorks';
import B2BTestimonials from '@/components/b2b/B2BTestimonials';

const B2BPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <B2BHero />
            <B2BBenefits />
            <B2BHowItWorks />
            <B2BTestimonials />
        </div>
    );
};

export default B2BPage;
