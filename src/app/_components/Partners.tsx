'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const partners = [
  {
    name: "BoxBox Radio",
    logo: "/boxbox-logo.png",
    link: "https://www.boxbox-radio.com/",
  },
];

export default function Partners() {
    const [currentPartner, setCurrentPartner] = useState(0);

    useEffect(() => {
      if(partners.length < 2) return;
      const timer = setInterval(() => {
        setCurrentPartner(
          (prevPartner) => (prevPartner + 1) % partners.length
        );
      }, 3000);
      return () => clearInterval(timer);
    }, []);


  return (
    <section id="partners" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">
          Nossos parceiros
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out justify-center"
            style={{ transform: `translateX(-${currentPartner * 100}%)` }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col justify-center items-center">
                <a
                  href={partner.link}
                  target="_blank"
                  className="w-full flex-shrink-0 flex justify-center items-center"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-xs mx-auto"
                    width={200}
                    height={300}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {partners.length > 1 && partners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentPartner ? "bg-[#722F37]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentPartner(index)}
              aria-label={`Go to partner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}