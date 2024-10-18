'use client'

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Partners() {
    const [currentPartner, setCurrentPartner] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentPartner(
          (prevPartner) => (prevPartner + 1) % partners.length
        );
      }, 3000);
      return () => clearInterval(timer);
    }, []);

    const partners = [
      { name: "TechCorp", logo: "/placeholder.svg?height=100&width=200" },
      { name: "InnovateX", logo: "/placeholder.svg?height=100&width=200" },
      { name: "SpeedWorks", logo: "/placeholder.svg?height=100&width=200" },
      { name: "EnginePro", logo: "/placeholder.svg?height=100&width=200" },
      { name: "RaceTech", logo: "/placeholder.svg?height=100&width=200" },
    ];

  return (
    <section id="partners" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#722F37]">
          Our Partners
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPartner * 100}%)` }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center items-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-xs mx-auto"
                  width={200}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {partners.map((_, index) => (
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