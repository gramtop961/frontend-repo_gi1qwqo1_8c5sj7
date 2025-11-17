import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="demo" className="relative py-24 bg-[#070e1a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 sm:p-12 backdrop-blur">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl sm:text-3xl font-bold text-white">
                See Sentinel Cyber in action
              </motion.h3>
              <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} className="mt-3 text-white/70">
                Get a personalized walkthrough tailored to your environment.
              </motion.p>
            </div>
            <motion.form initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.6}} onSubmit={(e)=> e.preventDefault()} className="grid sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                  <input className="w-full rounded-xl border border-white/15 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:border-white/30" placeholder="Work email" />
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all">
                Request Demo <ArrowRight className="h-4 w-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
