import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Results() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const resultsData = [
    { id: "excellent", label: "Excellent", percentage: 48, votes: 60, isWinner: true },
    { id: "good", label: "Good", percentage: 32, votes: 40, isWinner: false },
    { id: "average", label: "Average", percentage: 15, votes: 19, isWinner: false },
    { id: "poor", label: "Poor", percentage: 5, votes: 6, isWinner: false },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Background radial lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.05),transparent_40%)] pointer-events-none"></div>

      {/* Header / Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 rounded-lg px-2.5 py-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Home
          </Link>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span className="text-lg font-semibold text-white">Poll Results</span>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-[10px] font-semibold text-emerald-400 tracking-wider uppercase select-none">
            Completed
          </span>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 flex flex-col justify-center relative">
        <div className="text-center mb-10 select-none">
          <span className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">
            Final Stats
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mt-2 max-w-2xl mx-auto leading-tight">
            How satisfied are you with today's workshop?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Area: Results progress bars */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-2xl shadow-blue-500/2">
              <h3 className="text-xs font-semibold text-slate-400 tracking-wider uppercase mb-6">
                Vote Breakdown
              </h3>
              
              <div className="space-y-6">
                {resultsData.map((option) => (
                  <div key={option.id} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className={option.isWinner ? "text-white font-bold" : "text-slate-300"}>
                        {option.label}
                        {option.isWinner && (
                          <span className="ml-2 text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full uppercase">
                            Winner
                          </span>
                        )}
                      </span>
                      <span className={option.isWinner ? "text-cyan-400" : "text-slate-400"}>
                        {option.percentage}% ({option.votes} votes)
                      </span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          option.isWinner
                            ? "bg-linear-to-r from-blue-600 to-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                            : "bg-slate-700"
                        }`}
                        style={{ width: animate ? `${option.percentage}%` : "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Area: Winner Highlight Box */}
          <div className="lg:col-span-1">
            <div className="h-full rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 backdrop-blur-md shadow-2xl shadow-blue-500/2 flex flex-col justify-between relative overflow-hidden group">
              {/* Highlight Background Glow */}
              <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-[10px] font-semibold text-amber-400 tracking-wider uppercase mb-6 backdrop-blur-xs select-none">
                  🏆 Winner
                </div>
                <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  Winning Option
                </h4>
                <p className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Excellent
                </p>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 tracking-tighter">
                  48%
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  of all participants voted for this option.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* Stat 1 */}
          <div className="rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-md shadow-lg">
            <span className="block text-[10px] font-semibold text-slate-500 tracking-wider uppercase mb-1">
              Total Votes
            </span>
            <span className="block text-2xl font-bold text-white tracking-wide font-mono">
              125
            </span>
          </div>

          {/* Stat 2 */}
          <div className="rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-md shadow-lg">
            <span className="block text-[10px] font-semibold text-slate-500 tracking-wider uppercase mb-1">
              Winning Option
            </span>
            <span className="block text-2xl font-bold text-white tracking-wide truncate">
              Excellent
            </span>
          </div>

          {/* Stat 3 */}
          <div className="rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-md shadow-lg">
            <span className="block text-[10px] font-semibold text-slate-500 tracking-wider uppercase mb-1">
              Session Duration
            </span>
            <span className="block text-2xl font-bold text-white tracking-wide font-mono">
              30 sec
            </span>
          </div>
        </section>

        {/* Button Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/5 pt-10">
          <Link
            to="/host"
            className="w-full sm:w-auto min-w-[200px] relative group overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-500/25 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 text-center cursor-pointer"
          >
            Create New Poll
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto min-w-[200px] rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-[1.02] focus:outline-hidden focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-950 text-center cursor-pointer"
          >
            Back Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-slate-950/40 py-8 px-6 text-center">
        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} PulseLive. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Results;
