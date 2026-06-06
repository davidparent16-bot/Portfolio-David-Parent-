import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/content'

const categories = [...new Set(skills.map((s) => s.category))]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6 bg-brutalist-black text-brutalist-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-gray-500">04</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Skills</h2>
          <div className="flex-1 h-0.5 bg-gray-700" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.12 }}
            >
              <h3 className="font-mono font-bold uppercase tracking-widest text-brutalist-yellow text-xs mb-6">
                {cat}
              </h3>
              <div className="flex flex-col gap-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between font-mono text-sm mb-2">
                        <span>{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 w-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 0.8, delay: ci * 0.12 + si * 0.08, ease: 'easeOut' }}
                          className="h-full bg-brutalist-yellow"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {['VS Code', 'Linux', 'REST APIs', 'GraphQL', 'Redis', 'Nginx', 'GitHub Actions', 'Figma', 'Vercel'].map(
              (tool) => (
                <span
                  key={tool}
                  className="font-mono text-xs px-3 py-1 border border-gray-700 text-gray-400"
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
