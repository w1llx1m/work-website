
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section 
      className="py-20 px-8 max-w-2xl mx-auto" id="contact"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }}
    >
      
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <form action="https://formspree.io/f/xqapvvdn" method="POST" className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Seu nome" className="p-3 border rounded-lg" required />
        <input type="email" name="email" placeholder="Seu email" className="p-3 border rounded-lg" required />
        <textarea name="message" placeholder="Sua mensagem" className="p-3 border rounded-lg" required></textarea>
        <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">Enviar</button>
      </form>
      
      <a
  href="https://wa.me/5511966017045?text=Olá,%20gostaria%20de%20mais%20informações!"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#22c55e',
    color: 'white',
    padding: '12px 16px',
    borderRadius: '9999px',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    textDecoration: 'none',
  }}
>
  <span style={{ fontSize: '20px' }}>💬</span>
  WhatsApp
</a>


    </motion.section>
  )
}
