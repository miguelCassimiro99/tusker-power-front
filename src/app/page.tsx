import { Suspense } from "react";
import { Instagram, Linkedin, PhoneCall } from "lucide-react";
import Members from "./_components/Members";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import Partners from "./_components/Partners";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 w-full overflow-y-hidden">
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
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">
            Sobre nós
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/logo.png"
                alt="Tusker Power Team"
                className="rounded-lg shadow-lg"
                height={400}
                width={600}
              />
            </div>
            <div className="md:w-1/2 md:pl-8 text-gray-800 leading-relaxed px-2 md:px-0">
              <p className="text-lg mb-4">
                Nossa equipe, anteriormente conhecida como Power Up na First
                Lego League (FLL), Agora, de cara nova, a equipe enfrenta um
                capítulo novo a F1 in schools. Com muito orgulho, somos a única
                equipe representando o Vale do Paraíba.
              </p>
              <p className="text-lg">
                Premiada duas vezes consecutivas na categoria CORE VEALUS, foi
                símbolo de resiliência e trabalho em equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Suspense>
        <Members />
      </Suspense>

      {/* Our Partners */}
      <Suspense><Partners /></Suspense>

      {/* Be Our Partner */}
      <section id="partner" className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#722F37]">
            Seja nosso parceiro
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Join us in our journey to success in the F1 Schools competition.
            Your support can help us innovate, create, and inspire the next
            generation of engineers and designers.
          </p>
          <a
            href="https://wa.me/5512997480571"
            target="_blank"
            className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-opacity-80 transition duration-300"
          >
            Vem com a gente
          </a>
        </div>
      </section>

      {/* Social Project */}
      <section id="social" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#722F37]">
            Nosso projeto social
          </h2>
          <div className="flex flex-col items-center justify-between gap-10">
            <div className="mb-8 md:mb-0">
              <Image
                src="/equipe.webp"
                alt="Social Project"
                className="rounded-lg shadow-lg"
                height={400}
                width={600}
              />
            </div>
            <div className="md:pl-8 px-2 md:px-0">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Inclusion Power
              </h3>
              <p className="text-lg text-gray-800 mb-4">
                Na Tusker Power, além de nossa dedicação à excelência na F1 in
                Schools, temos um compromisso com o impacto positivo fora das
                pistas. Nosso projeto social foca em criar uma plataforma de
                jogos seguros, saudáveis e educativos, oferecendo um espaço de
                diversão adequado para crianças. Queremos garantir que, durante
                os momentos de lazer, elas possam explorar jogos que promovam
                aprendizado e criatividade, longe de conteúdos inadequados.
              </p>
              <p className="text-lg text-gray-800 mb-6">
                Acreditamos que o acesso a jogos saudáveis é essencial para o
                desenvolvimento infantil, e por isso estamos trabalhando com
                especialistas para garantir que nossa plataforma atenda a essas
                necessidades. Este projeto reflete nosso propósito de levar o
                conhecimento e o cuidado além da competição, promovendo um
                ambiente de diversão responsável e educativo para crianças em
                diversas comunidades.
              </p>
              <a
                href="https://wa.me/5512997480571"
                target="_blank"
                className="bg-[#FFD700] text-primary px-6 py-3 rounded-full font-bold hover:bg-opacity-80 transition duration-300"
              >
                Descubra mais sobre nossa iniciativa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#722F37] text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Tusker Power</h3>
              <p>Powering innovation in F1 Schools</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5512997480571"
                target="_blank"
                className="hover:text-[#FFD700]"
              >
                <PhoneCall />
              </a>
              <a
                href="https://www.instagram.com/tuskerpower_/"
                target="_blank"
                className="hover:text-[#FFD700]"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/in/tuskerpowerf1/"
                target="_blank"
                className="hover:text-[#FFD700]"
              >
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Tusker Power. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
