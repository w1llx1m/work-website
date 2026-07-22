// components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="py-20 px-8 bg-gray-50" id="about-us">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Sobre a Montheon
          </motion.span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img 
              src="src\logos\Montanha-curva.jpg" // Caminho para a imagem
              alt="Nossa História"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          {/* Texto da História da Empresa */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Nossa História</h3>
            <p className="text-lg leading-relaxed">
              A Montheon foi fundada com o objetivo de transformar ideias inovadoras em soluções reais. Com uma equipe apaixonada por tecnologia e design, trabalhamos para entregar excelência em cada projeto que realizamos. Ao longo dos anos, expandimos nossa atuação e estabelecemos uma reputação sólida no mercado de soluções digitais, atendendo clientes de diversos segmentos com comprometimento e qualidade.
            </p>
          </motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          {/* Texto Continuando a História */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Missão e Visão</h3>
            <p className="text-lg leading-relaxed">
              A missão da Montheon é fornecer soluções digitais de alta qualidade, inovadoras e customizadas para atender às necessidades de nossos clientes. Buscamos sempre o desenvolvimento contínuo e a adaptação às novas tendências do mercado, com foco em resultados de longo prazo e parcerias sólidas.
            </p>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img 
              src="src\logos\montheon.png" // Caminho para a imagem
              alt="Missão e Visão"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
