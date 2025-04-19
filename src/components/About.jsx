
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section 
      className="py-20 px-8 max-w-4xl mx-auto" id="about"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4">Sobre a Montheon</h2>
      <p className="text-lg">Somos uma empresa de solução de software focade em desenvolvimento Web.</p>
    </motion.section>
  )
}
