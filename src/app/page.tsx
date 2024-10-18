import { Suspense } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Members from "./_components/Members";
import Partners from "./_components/Partners";
import Image from "next/image";
import Navbar from "./_components/Navbar";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#4a021e] to-[#b98322] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center relative">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/logo.png"
              alt="Tusker Power Logo"
              height={60}
              width={60}
              className="aspect-square"
            />
            <Image
              src="/f1schools.png"
              alt="Tusker Power Logo"
              height={60}
              width={60}
              className="aspect-square"
            />
          </div>
          <Suspense>
            <Navbar />
          </Suspense>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#4a021e] text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Tusker Power</h2>
          <p className="text-xl mb-8">
            Avançando na competição das Escolas de F1 com inovação e
            determinação
          </p>
          <a
            href="#about"
            className="bg-secondary text-gray-100 px-6 py-3 rounded-full font-bold hover:bg-opacity-80 hover:text-white transition duration-300"
          >
            Conheça
          </a>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#722F37]">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg"
                alt="Tusker Power Team"
                className="rounded-lg shadow-lg"
                height={400}
                width={600}
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">
                Tusker Power is a dedicated team of six talented students
                participating in the F1 Schools competition. Our passion for
                engineering, design, and innovation drives us to create
                cutting-edge miniature F1 cars that push the boundaries of speed
                and aerodynamics.
              </p>
              <p className="text-lg">
                With a focus on teamwork, creativity, and technical excellence,
                we strive to make our mark in the world of F1 Schools while
                promoting STEM education and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Suspense>
        <Members />
      </Suspense>

      {/* Our Partners */}
      <Suspense>
        <Partners />
      </Suspense>

      {/* Be Our Partner */}
      <section id="partner" className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#722F37]">
            Be Our Partner
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our journey to success in the F1 Schools competition.
            Your support can help us innovate, create, and inspire the next
            generation of engineers and designers.
          </p>
          <a
            href="#"
            className="bg-[#722F37] text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-80 transition duration-300"
          >
            Partner With Us
          </a>
        </div>
      </section>

      {/* Social Project */}
      <section id="social" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#722F37]">
            Our Social Project
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Social Project"
                className="rounded-lg shadow-lg"
                height={400}
                width={600}
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-bold mb-4 text-[#722F37]">
                STEM Education Outreach
              </h3>
              <p className="text-lg mb-4">
                At Tusker Power, we believe in giving back to our community. Our
                social project focuses on promoting STEM education in local
                schools, inspiring young minds to explore the exciting world of
                science, technology, engineering, and mathematics.
              </p>
              <p className="text-lg mb-6">
                Through workshops, mentoring sessions, and interactive
                demonstrations, we aim to spark curiosity and foster a love for
                learning among students of all ages.
              </p>
              <a
                href="#"
                className="bg-[#FFD700] text-[#722F37] px-6 py-3 rounded-full font-bold hover:bg-opacity-80 transition duration-300"
              >
                Learn More About Our Impact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#722F37] text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Tusker Power</h3>
              <p>Powering innovation in F1 Schools</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFD700]">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#FFD700]">
                <Twitter />
              </a>
              <a href="#" className="hover:text-[#FFD700]">
                <Instagram />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Tusker Power. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
