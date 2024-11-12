"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";

const partners = [
  {
    name: "Senai",
    logo: "/partners/senai.jpeg",
    link: "#",
  },
  {
    name: "Revolution School",
    logo: "/partners/revolution.jpeg",
    link: "#",
  },
  {
    name: "BoxBox Radio",
    logo: "/boxbox-logo.png",
    link: "https://www.boxbox-radio.com/",
  },
  {
    name: "Beltronix",
    logo: "/partners/beltronix.jpeg",
    link: "#",
  },
  {
    name: "Paulo Marleinho de Ouro",
    logo: "/partners/paulo.jpeg",
    link: "#",
  },
];

export default function Partners() {
  // useEffect(() => {
  //   const logosSlide = document.querySelector(".logos-slide");
  //   const logos = document.querySelector(".logos");

  //   if (logosSlide && logos) {
  //     const copy = logosSlide.cloneNode(true);
  //     logos.appendChild(copy);
  //   }
  // }, []);

  return (
    <section id="partners" className="py-20">
      <Script />
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">
          Nossos parceiros
        </h2>
        <div className="relative overflow-hidden full flex items-center flex-wrap justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="p-10">
              <Image
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="max-w-xs mx-auto logo"
                width={150}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
