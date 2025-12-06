import React from 'react';
import Navbar from '@/components/general/Navbar';
import Footer from '@/components/general/Footer';

const B2BLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default B2BLayout;
