export default function Footer() {
  return (
    <footer className="border-t-2 border-brutalist-black py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono font-bold text-sm">
          DP<span className="bg-brutalist-black text-brutalist-yellow px-1">_</span>
        </span>
        <p className="font-mono text-xs text-gray-500 tracking-wider">
          Built with React · Tailwind CSS · Framer Motion · {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-gray-400">
          No cookies. No trackers. Just code.
        </p>
      </div>
    </footer>
  )
}
