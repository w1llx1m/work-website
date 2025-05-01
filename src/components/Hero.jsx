
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
    className="min-h-screen flex flex-col justify-center items-center text-center p-8  bg-gradient-to-br from-gray-900 via-zinc-800 to-amber-500 text-white"
    
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  >
    <motion.h1 
      className="text-4xl md:text-6xl font-bold"
      initial={{ y: -20 }} 
      animate={{ y: 0 }} 
      transition={{ delay: 0.3 }}
    >
      Olá, bem-vindo à Montheon
    </motion.h1>
    <motion.p 
      className="mt-4 text-lg md:text-2xl"
      initial={{ y: 20 }} 
      animate={{ y: 0 }} 
      transition={{ delay: 0.6 }}
    >
      Criamos experiências digitais e ajudamos a realizar seu sonho
    </motion.p>
    <motion.a 
        href="#projects" 
        className="mt-6 px-6 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
        whileHover={{
          scale: 1.1, // Aumenta o botão
          boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.6)', // Sombra expansiva
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
      >
        Ver Projetos
      </motion.a>
  </motion.section>
  
  )
}
