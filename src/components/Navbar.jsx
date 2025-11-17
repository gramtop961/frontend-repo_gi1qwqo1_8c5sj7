import { useState } from 'react'
import { Menu, Shield, X, Lock, Globe, Phone } from 'lucide-react'

const navItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Features', href: '#features' },
  { label: 'Cases', href: '#cases' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-inner shadow-blue-900/20">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-tight">Sentinel Cyber</p>
                <p className="text-xs text-white/70 -mt-0.5">Secure by Design</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="hidden lg:flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <Phone className="h-4 w-4" /> Contact
              </a>
              <a href="#about" className="hidden lg:flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <Globe className="h-4 w-4" /> About
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white text-sm font-semibold px-4 py-2 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all">
                <Lock className="h-4 w-4" /> Get a Demo
              </a>
            </div>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-white/90 hover:text-white/100">
                    {item.label}
                  </a>
                ))}
                <a href="#demo" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white text-sm font-semibold px-4 py-2">
                  <Lock className="h-4 w-4" /> Get a Demo
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
