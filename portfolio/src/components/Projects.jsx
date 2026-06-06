import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/content'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="brutal-border brutal-shadow-lg flex flex-col h-full"
      style={{ background: project.accent === '#0a0a0a' ? '#0a0a0a' : project.accent }}
    >
      <div
        className="p-6 flex-1 flex flex-col"
        style={{ color: project.accent === '#0a0a0a' ? '#f5f5f0' : '#0a0a0a' }}
      >
        {/* Number */}
        <span
          className="font-mono text-xs tracking-widest uppercase mb-4 opacity-60"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title */}
        <h3 className="font-display font-bold text-2xl mb-3 tracking-tight">{project.title}</h3>

        {/* Description */}
        <p className="font-mono text-sm leading-relaxed flex-1 mb-4 opacity-80">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs uppercase tracking-wider px-2 py-1"
              style={{
                border: `1px solid ${project.accent === '#0a0a0a' ? '#f5f5f0' : '#0a0a0a'}`,
                opacity: 0.8,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold uppercase tracking-wider underline"
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold uppercase tracking-wider underline"
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="font-mono text-xs tracking-widest uppercase text-gray-500">03</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Projects</h2>
        <div className="flex-1 h-0.5 bg-brutalist-black" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-0 border-2 border-brutalist-black">
        {projects.map((project, i) => (
          <div key={project.id} className={`border-r-2 border-b-2 border-brutalist-black ${i % 2 === 1 ? 'border-r-0' : ''} ${i >= projects.length - 2 ? 'border-b-0' : ''}`}>
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
