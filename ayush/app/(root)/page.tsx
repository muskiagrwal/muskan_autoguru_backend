"use client";
import Hero from "@/components/homepage/Hero";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AutoGuruBannerCarousol from "@/components/homepage/AutoGuruBannerCarousol";
import Features from "@/components/homepage/Features";
import HowItWorks from "@/components/homepage/HowItWorks";
import CTA from "@/components/homepage/CTA";
import About from "@/components/homepage/About";
import Pricing from "@/components/homepage/Pricing";
import Gallery from "@/components/homepage/Gallery";
import Testimonials from "@/components/homepage/Testimonials";
import Contact from "@/components/homepage/Contact";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import BrandsWeServe from "@/components/homepage/BrandsWeServe";
import WhyAutoGuru from "@/components/homepage/WhyAutoGuru";
import FleetPromo from "@/components/homepage/FleetPromo";
import SuperchargeBusiness from "@/components/homepage/SuperchargeBusiness";
import TopBrands from "@/components/homepage/TopBrands";
import FleetServicingFeatures from "@/components/homepage/FleetServicingFeatures";
import FleetTestimonials from "@/components/homepage/FleetTestimonials";
import ServicesOffered from "@/components/homepage/ServicesOffered";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Home = () => {
    useEffect(() => {
        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <main className="">
            <Hero />
            <WhyChooseUs />
            <FleetPromo />
            <SuperchargeBusiness />
            <TopBrands />
            <FleetServicingFeatures />
            <FleetTestimonials />
            <ServicesOffered />
            {/* <About /> */}
            {/* <Testimonials /> */}
            {/* <Features /> */}
            {/* <WhyAutoGuru /> */}
            {/* <Gallery /> */}
            {/* <BrandsWeServe /> */}
            {/* <Pricing /> */}
            {/* <AutoGuruBannerCarousol /> */}
            {/* <HowItWorks /> */}
        </main>
    );
};

export default Home;
