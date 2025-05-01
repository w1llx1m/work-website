import logo from '../logos/Montheon-dourado.png'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.section >
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
      <motion.img src={logo} alt="Montheon Logo" className="h-20 size-20 shadow-xl rounded-fullh-20 size-20 shadow-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover: filter saturate-150" 
      whileHover={{
        scale: 1.1, // Aumenta o botão
        boxShadow: '0px 4px 20px rgba(231, 170, 3, 0.83)', // Sombra expansiva
        y: -5, // Move o botão para cima
      }}
      whileTap={{
        scale: 0.95, // Efeito de pressionamento (diminui)
        y: 3, // Efeito de recuo quando pressionado
      }}
      transition={{
        scale: { type: 'spring', stiffness: 300, damping: 20 }, // Animação de aumento/diminuição suave
        boxShadow: { duration: 0.2 }, // Animação da sombra
        y: { duration: 0.2 }, // Animação do movimento
      }}
      />
      <nav className="space-x-6 text-white font-medium">
        <a href="#about" className="hover:text-amber-300">Sobre</a>
        <a href="#projects" className="hover:text-amber-400">Projetos</a>
        <a href="#contact" className="hover:text-amber-500">Contato</a>
      </nav>
    </header>
    </motion.section>
  )
}
