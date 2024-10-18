'use client'

import Image from "next/image";
import { useState } from "react";


export default function Members() {
  const [hoveredMember, setHoveredMember] = useState<null | number>(null);

    const teamMembers = [
      {
        name: "John Doe",
        role: "Team Leader",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Jane Smith",
        role: "Design Engineer",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Mike Johnson",
        role: "Manufacturing Engineer",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Emily Brown",
        role: "Resource Manager",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Alex Lee",
        role: "Graphic Designer",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Sarah Wilson",
        role: "Marketing Manager",
        image: "/placeholder.svg?height=300&width=300",
      },
    ];

    return (
      <section id="team" className="py-20 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#722F37]">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto"
                  width={200}
                  height={300}
                />
                <div
                  className={`absolute inset-0 bg-[#722F37] bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ${
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
    )

}