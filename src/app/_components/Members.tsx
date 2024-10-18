'use client'

import Image from "next/image";
import { useState } from "react";


export default function Members() {
  const [hoveredMember, setHoveredMember] = useState<null | number>(null);

    const teamMembers = [
      {
        name: "Lucas Salgado",
        role: "Gestor de Projetos Sociais",
        image: "/members/lucas.jpeg",
      },
      {
        name: "João Lucas",
        role: "Engenheiro",
        image: "/members/joao-lucas.jpeg",
      },
      {
        name: "Leticia Siqueira",
        role: "Engenheira",
        image: "/members/leticia-siqueira.jpeg",
      },
      {
        name: "Isabella Bellotti",
        role: "Líder da Equipe",
        image: "/members/isa.jpeg",
      },
      {
        name: "Guilherme",
        role: "Engenheiro",
        image: "/members/gui-barcelos.jpeg",
      },
      {
        name: "Sophia",
        role: "Social Media",
        image: "/members/sophia.jpeg",
      },
      {
        name: "Fábio",
        role: "Técnico da Equipe",
        image: "/members/fabio.jpeg",
      },
    ];

    return (
      <section id="team" className="py-20 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">
            Nosso time
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg flex"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-cover"
                  width={200}
                  height={300}
                />

                <div className="text-black absolute md:hidden bottom-5 w-full flex flex-col justify-center items-center">
                  <p className="bg-primary text-white text-lg px-2 w-fit shadow-lg">
                    {member.name}
                  </p>
                  <p className="bg-secondary text-primary font-semibold px-2 w-fit shadow-lg">
                    {member.role}
                  </p>
                </div>

                <div
                  className={`absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredMember === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#FFD700]">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

}