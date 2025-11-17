import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#0a1120] to-[#050a14]" />
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-20 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-40 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, ease:'easeOut'}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Enterprise-grade cybersecurity
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">for a connected world</span>
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.7}} className="mt-6 text-lg text-white/70 max-w-xl">
              Protect your data, infrastructure, and people with AI-driven threat detection, zero-trust access, and continuous compliance.
            </motion.p>

            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.7}} className="mt-8 flex items-center gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all">
                Get a Live Demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/30 transition-all">
                Explore Features
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {["ISO 27001","SOC 2","GDPR"].map((t,i)=> (
                <motion.div key={t} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.25 + i*0.05}} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <p className="text-xs text-white/60">Certified</p>
                  <p className="mt-1 text-sm font-semibold text-white">{t}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.8, ease:'easeOut'}} className="relative h-[480px] sm:h-[560px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
              <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" />
            </div>
          </motion.div>
        </div>

        <div className="pt-20 pb-10 flex items-center justify-center gap-10 opacity-70">
          {['Cisco','Cloudflare','Okta','CrowdStrike','Azure'].map((b)=> (
            <span key={b} className="text-white/60 text-sm">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
