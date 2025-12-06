import React from "react";
import { Car, Minimize } from "lucide-react";
import Image from "next/image";

const WhyAutoGuru = () => {
  return (
    <section className="relative h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <header className="text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight uppercase">
          Why AutoGuru
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          We are one of the leading auto repair companies.
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-7xl mx-auto w-full h-[calc(100vh-20rem)]">
        <a
          href="/closed-booth"
          className="group flex items-center gap-3 hover:text-red-500 transition-all duration-300"
        >
          <div className="border border-white p-3 rounded-full group-hover:border-red-500 transition">
            <Car className="w-6 h-6" />
          </div>
          <span className="text-base sm:text-lg font-medium tracking-wide">
            Treatment Done in a Closed Booth
          </span>
        </a>

        <div className="w-full flex justify-center">
          <Image
            src="/Why_AutoGuru.png"
            alt="Top view of a dark car"
            width={600}
            height={400}
            className="w-full max-w-md h-auto object-contain opacity-90"
          />
        </div>

        <a
          href="/human-touch"
          className="group flex items-center gap-3 hover:text-red-500 transition-all duration-300"
        >
          <span className="text-base sm:text-lg font-medium tracking-wide text-right leading-tight">
            Minimal Human Touch for <br className="hidden sm:block" /> Better Results
          </span>
          <div className="border border-white p-3 rounded-full group-hover:border-red-500 transition">
            <Minimize className="w-6 h-6" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default WhyAutoGuru;
