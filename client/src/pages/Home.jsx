import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Background radial lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.06),transparent_40%)] pointer-events-none"></div>
      
      {/* Header / Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-lg">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/20">
              <div className="w-3 h-3 rounded-full bg-linear-to-tr from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></div>
              <span className="absolute w-5 h-5 rounded-full border border-cyan-500/20 animate-ping [animation-duration:3s]"></span>
            </div>
            <span className="font-semibold text-lg tracking-tight bg-linear-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:text-white transition-colors duration-200">
              PulseLive
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/host" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">
              Host
            </Link>
            <Link to="/join" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200">
              Join
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 flex flex-col justify-center py-20 sm:py-28 relative">
        {/* Grid pattern background overlay for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        {/* Hero Section */}
        <section className="relative text-center max-w-4xl mx-auto mb-20 sm:mb-32">
          {/* Subtle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-6 backdrop-blur-xs select-none">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Real-Time Interaction
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-center bg-linear-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight select-none">
            Create Live Polls.<br />
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Collect Instant Feedback.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Launch interactive polling sessions in seconds and engage participants with a seamless real-time experience.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/host"
              className="w-full sm:w-auto relative group overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-500/25 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 text-center"
            >
              Create Session
            </Link>
            <Link
              to="/join"
              className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-slate-300 backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-[1.02] focus:outline-hidden focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-950 text-center"
            >
              Join Session
            </Link>
          </div>
        </section>

        {/* Feature Section */}
        <section className="mb-20 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 mb-6 group-hover:border-blue-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Create polls in seconds.</p>
            </div>

            {/* Card 2 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 mb-6 group-hover:border-blue-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-Time Experience</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Participants vote instantly.</p>
            </div>

            {/* Card 3 */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 mb-6 group-hover:border-blue-500/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Beautiful Results</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Clear charts and live insights.</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full py-12 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">10K+</div>
              <div className="text-slate-500 text-xs sm:text-sm mt-2 font-semibold tracking-wider uppercase">Votes Collected</div>
            </div>
            <div className="text-center border-y border-white/5 md:border-y-0 md:border-x py-8 md:py-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">99.9%</div>
              <div className="text-slate-500 text-xs sm:text-sm mt-2 font-semibold tracking-wider uppercase">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">100+</div>
              <div className="text-slate-500 text-xs sm:text-sm mt-2 font-semibold tracking-wider uppercase">Sessions Created</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-slate-950/40 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-linear-to-tr from-blue-500 to-cyan-400"></div>
            <span className="font-semibold text-white tracking-tight">PulseLive</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left leading-relaxed">
            Built for modern classrooms, workshops and live events.
          </p>
          <div className="text-xs sm:text-sm text-slate-600">
            &copy; {new Date().getFullYear()} PulseLive. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
