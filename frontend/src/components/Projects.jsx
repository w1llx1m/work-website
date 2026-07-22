
import { motion } from 'framer-motion'

export default function Projects() {
  const projetos = [
    {
      titulo: "Portfólio Pessoal",
      descricao: "Landing page responsiva com React e Tailwind para apresentar meu trabalho.",
      link: "https://github.com/seunome/portfolio"
    },
    {
      titulo: "Dashboard de Finanças",
      descricao: "App com React, Chart.js e autenticação Firebase para controle financeiro.",
      link: "https://github.com/seunome/finance-dashboard"
    },
  ]

  return (
    <motion.section 
      className="py-20 px-8 bg-gray-100" id="projects"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projetos.map((projeto, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-lg p-6 rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">{projeto.titulo}</h3>
            <p className="mb-4">{projeto.descricao}</p>
            <a href={projeto.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
