"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";
import { Toaster } from "sonner";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    // Define routes where Navbar and Footer should be hidden
    const authRoutes = ["/login", "/signup", "/supplier/login"];
    const isAuthPage = authRoutes.includes(pathname);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {!isAuthPage && <Navbar />}
            <div className={!isAuthPage ? "pt-[5%]" : ""}>
                {children}
            </div>
            {!isAuthPage && <Footer />}
            <Toaster />
        </>
    );
};

export default ClientLayout;
