import { motion } from 'framer-motion'
import { Server, Laptop, Cloud, Building2 } from 'lucide-react'

const solutions = [
  {
    title: 'Endpoint Security',
    desc: 'Next-gen EDR with behavioral analytics to stop ransomware and zero-days.',
    icon: Laptop,
  },
  {
    title: 'Cloud Security',
    desc: 'Agentless CSPM and CIEM to eliminate misconfigurations and privilege risks.',
    icon: Cloud,
  },
  {
    title: 'Network Defense',
    desc: 'Inline intrusion prevention with encrypted traffic inspection at scale.',
    icon: Server,
  },
  {
    title: 'Enterprise Suite',
    desc: 'Centralized visibility across hybrid environments with automated response.',
    icon: Building2,
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 bg-gradient-to-b from-[#050a14] to-[#060d18]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-white">
              Complete protection, simplified
            </motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-white/70">
              Our platform unifies detection, prevention, and response across every layer of your stack.
            </motion.p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((s, i) => (
                <motion.div key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.05 * i, duration:0.6}} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                  <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.7}} className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-hidden">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-white/10" />
            <p className="mt-4 text-sm text-white/60">
              Visualize risk posture, prioritize critical issues, and automate fixes with one click.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
