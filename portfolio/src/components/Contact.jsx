import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '../data/content'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="font-mono text-xs tracking-widest uppercase text-gray-500">05</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Contact</h2>
        <div className="flex-1 h-0.5 bg-brutalist-black" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
            Got a project?
            <br />
            <span className="bg-brutalist-yellow px-2">Let's talk.</span>
          </h3>
          <p className="font-mono text-sm text-gray-600 leading-relaxed mb-8 max-w-sm">
            I'm open to freelance projects, full-time roles, and interesting problems. If you have something
            worth building, I'd love to hear about it.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="brutal-btn bg-brutalist-black text-brutalist-white inline-flex items-center gap-3 w-fit"
            >
              <span>✉</span> {personal.email}
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn bg-transparent text-brutalist-black inline-flex items-center gap-3 w-fit"
            >
              <span>⌥</span> GitHub
            </a>
          </div>
        </motion.div>

        {/* Right — availability card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="brutal-border brutal-shadow-lg p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block animate-pulse" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider">Available now</span>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: 'Response time', value: '< 24 hours' },
                { label: 'Timezone', value: 'CET (UTC+1)' },
                { label: 'Preferred contact', value: 'Email' },
                { label: 'Work type', value: 'Remote / Hybrid' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-gray-500">{label}</span>
                  <span className="font-mono text-sm font-bold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
