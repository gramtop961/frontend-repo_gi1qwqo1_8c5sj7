import { motion } from 'framer-motion'
import { ShieldCheck, Fingerprint, Radar, GlobeLock } from 'lucide-react'

const features = [
  {
    title: 'Zero‑Trust Access',
    desc: 'Grant the least privilege with adaptive, context-aware policies.',
    icon: GlobeLock,
  },
  {
    title: 'AI Threat Detection',
    desc: 'Detect anomalies in real time across endpoints, cloud, and network.',
    icon: Radar,
  },
  {
    title: 'Identity Security',
    desc: 'Strong MFA, passwordless auth, and continuous verification.',
    icon: Fingerprint,
  },
  {
    title: 'Compliance Guard',
    desc: 'Automated evidence collection and audit-ready reports.',
    icon: ShieldCheck,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#070e1a]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-white">
            Built for modern security teams
          </motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-white/70">
            Seamless protection without slowing down your business.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1 * i, duration:0.6}} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
