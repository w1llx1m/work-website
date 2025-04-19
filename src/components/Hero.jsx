
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-blue-500 via-pink-500 to-purple-600 text-white"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <motion.img
        src="src\logos\montheon.png"  // Caminho para o arquivo logo
        alt="Montheon Logo"
        className="h-auto w-48 mx-auto mt-4 mb-4" // Altere conforme o tamanho desejado
      />
      <motion.h1 
        className="text-4xl md:text-6xl font-bold"
        initial={{ y: -20 }} 
        animate={{ y: 0 }} 
        transition={{ delay: 0.3 }}
      >
        Olá, bem vindo a Montheon
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
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
        whileHover={{ scale: 1.05 }}
      >
        Ver Projetos
      </motion.a>
    </motion.section>
  )
}
