import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Session() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const options = [
    { id: "excellent", label: "Excellent" },
    { id: "good", label: "Good" },
    { id: "average", label: "Average" },
    { id: "poor", label: "Poor" },
  ];

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleSelect = (optionId) => {
    if (timeLeft > 0 && !isSubmitted) {
      setSelectedOption(optionId);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (timeLeft <= 0) {
      setError("Voting has closed for this session.");
      return;
    }
    if (!selectedOption) {
      setError("Please select an option before submitting.");
      return;
    }
    setIsSubmitted(true);
    navigate("/results");
  };

  const isTimerLow = timeLeft <= 10;
  const isVotingDisabled = timeLeft <= 0 || isSubmitted;

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Background radial lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.05),transparent_40%)] pointer-events-none"></div>

      {/* Header / Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-rose-400/80 hover:text-rose-400 transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-rose-500 rounded-lg px-2.5 py-1"
            aria-label="Leave Session"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Leave Session
          </Link>
          <div className="flex-1 text-center pr-24">
            <span className="text-lg font-semibold text-white">Live Session</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12 flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Area: Voting Section */}
          <div className="lg:col-span-2 order-1">
            <div className="h-full w-full rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-2xl shadow-blue-500/2 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-[10px] font-semibold text-cyan-400 tracking-wider uppercase mb-6 backdrop-blur-xs select-none">
                  <span className={`flex h-1.5 w-1.5 relative ${timeLeft > 0 ? "animate-pulse" : ""}`}>
                    <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${timeLeft > 0 ? "animate-ping bg-cyan-400" : "bg-slate-500"}`}></span>
                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${timeLeft > 0 ? "bg-cyan-500" : "bg-slate-600"}`}></span>
                  </span>
                  {timeLeft > 0 ? "Voting Active" : "Voting Ended"}
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8 leading-snug">
                  How satisfied are you with today's workshop?
                </h2>

                {/* Options list */}
                <div className="space-y-4">
                  {options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSelect(option.id)}
                        disabled={isVotingDisabled}
                        className={`w-full flex items-center justify-between p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${isVotingDisabled
                            ? "opacity-50 cursor-not-allowed border-white/5 bg-white/2"
                            : isSelected
                              ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/5"
                              : "border-white/10 bg-slate-950/40 hover:bg-slate-900/60 hover:border-white/20"
                          }`}
                        aria-checked={isSelected}
                        role="radio"
                      >
                        <span className={`text-base font-semibold transition-colors duration-200 ${isSelected ? "text-white" : "text-slate-300"}`}>
                          {option.label}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${isSelected
                            ? "border-blue-500 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                            : "border-white/20 bg-slate-950"
                          }`}>
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Area */}
              <div className="mt-8 pt-6 border-t border-white/5">
                {error && (
                  <p className="mb-4 text-xs font-medium text-rose-400 flex items-center gap-1.5 animate-fade-in">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {error}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!selectedOption || isVotingDisabled}
                  className="w-full sm:w-auto min-w-[180px] relative group overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-500/25 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 text-center cursor-pointer disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  Submit Vote
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-1 order-2">
            <div className="w-full rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md shadow-2xl shadow-blue-500/2 space-y-6">

              {/* Participant & Code Details */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="p-4 rounded-xl border border-white/5 bg-slate-950/40">
                  <span className="block text-[10px] font-semibold text-slate-500 tracking-wider uppercase mb-1">
                    Participant
                  </span>
                  <span className="block text-sm font-bold text-white tracking-wide truncate">
                    Mirza Sohaib
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-slate-950/40">
                  <span className="block text-[10px] font-semibold text-slate-500 tracking-wider uppercase mb-1">
                    Session Code
                  </span>
                  <span className="block text-sm font-bold text-cyan-400 tracking-wider font-mono">
                    ABC123
                  </span>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="p-6 rounded-xl border border-white/5 bg-slate-950/40 flex flex-col items-center justify-center text-center">
                <span className="block text-[10px] font-semibold text-slate-500 tracking-wider uppercase mb-3">
                  Time Remaining
                </span>

                {/* Timer Clock Circle */}
                <div className={`relative flex items-center justify-center w-28 h-28 rounded-full border transition-all duration-300 ${timeLeft === 0
                    ? "border-slate-800 bg-slate-950/80 shadow-none text-slate-600"
                    : isTimerLow
                      ? "border-rose-500/40 bg-rose-500/5 shadow-[0_0_20px_rgba(244,63,94,0.15)] text-rose-400"
                      : "border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_20px_rgba(6,182,212,0.1)] text-cyan-400"
                  }`}>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-extrabold font-mono tracking-tighter">
                      {timeLeft}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 mt-0.5 uppercase tracking-wide">
                      Sec
                    </span>
                  </div>

                  {/* Rotating/pulsating visual effect for timer active */}
                  {timeLeft > 0 && (
                    <span className={`absolute inset-0 rounded-full border border-dashed animate-spin [animation-duration:15s] ${isTimerLow ? "border-rose-500/20" : "border-cyan-500/20"
                      }`}></span>
                  )}
                </div>

                {timeLeft === 0 && (
                  <span className="block mt-4 text-xs font-semibold text-rose-500/80 tracking-wide uppercase">
                    Voting Closed
                  </span>
                )}
              </div>

            </div>
          </div>

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

export default Session;
