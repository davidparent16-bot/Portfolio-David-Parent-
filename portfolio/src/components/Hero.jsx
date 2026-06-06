import { motion } from 'framer-motion'
import { personal } from '../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end pb-16 px-6 pt-32 max-w-7xl mx-auto"
    >
      {/* Top ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 font-mono text-xs tracking-widest uppercase text-gray-500 flex items-center gap-3"
      >
        <span className="w-8 h-px bg-gray-400 inline-block" />
        Available for work · France · {new Date().getFullYear()}
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show">
        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display font-bold leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
        >
          {personal.name
            .split(' ')
            .map((word, i) => (
              <span key={i} className={i === 1 ? 'block text-outline' : 'block'}>
                {word}
              </span>
            ))}
        </motion.h1>

        {/* Title badge */}
        <motion.div variants={item} className="mb-6 inline-block">
          <span className="bg-brutalist-black text-brutalist-yellow font-mono font-bold uppercase tracking-widest text-sm px-4 py-2">
            {personal.title}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="font-mono text-lg md:text-xl max-w-2xl leading-relaxed mb-10 text-gray-700"
        >
          {personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="brutal-btn bg-brutalist-yellow text-brutalist-black inline-block"
          >
            View Work →
          </a>
          <a
            href="#contact"
            className="brutal-btn bg-transparent text-brutalist-black inline-block"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom border accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
        className="mt-16 h-0.5 bg-brutalist-black"
      />

      <style>{`
        .text-outline {
          -webkit-text-stroke: 2px #0a0a0a;
          color: transparent;
        }
        @media (max-width: 640px) {
          .text-outline {
            -webkit-text-stroke: 1.5px #0a0a0a;
          }
        }
      `}</style>
    </section>
  )
}
