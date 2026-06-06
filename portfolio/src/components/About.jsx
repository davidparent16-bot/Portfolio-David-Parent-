import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal, experience } from '../data/content'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="font-mono text-xs tracking-widest uppercase text-gray-500">02</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">About</h2>
        <div className="flex-1 h-0.5 bg-brutalist-black" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="brutal-border brutal-shadow-lg p-8 bg-brutalist-white">
            <p className="font-mono text-sm leading-loose text-gray-700 whitespace-pre-line">
              {personal.bio}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: 'Location', value: personal.location },
              { label: 'Status', value: 'Open to work' },
              { label: 'Focus', value: 'Full-Stack' },
              { label: 'Mode', value: 'Async-first' },
            ].map(({ label, value }) => (
              <div key={label} className="brutal-border p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-1">{label}</p>
                <p className="font-mono font-bold text-sm">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-mono font-bold uppercase tracking-widest text-sm mb-6">Experience</h3>
          <div className="flex flex-col gap-0">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="brutal-border border-b-0 last:border-b-2 p-6 hover:bg-brutalist-yellow transition-colors duration-150"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-display font-bold text-lg">{exp.role}</p>
                    <p className="font-mono text-sm text-gray-600">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-gray-500 whitespace-nowrap ml-4">{exp.period}</span>
                </div>
                <p className="font-mono text-sm text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
