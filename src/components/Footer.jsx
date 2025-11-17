export default function Footer(){
  return (
    <footer id="about" className="border-t border-white/10 bg-[#050a14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© 2025 Sentinel Cyber. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white">Terms</a>
            <a href="#" className="text-white/60 hover:text-white">Security</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
