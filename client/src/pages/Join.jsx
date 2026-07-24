import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Join() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [sessionCode, setSessionCode] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSessionCodeChange = (e) => {
    const value = e.target.value.toUpperCase().slice(0, 6);
    setSessionCode(value);
    if (errors.sessionCode) {
      setErrors({ ...errors, sessionCode: "" });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors({ ...errors, name: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!sessionCode.trim()) {
      newErrors.sessionCode = "Session code is required.";
    } else if (sessionCode.trim().length !== 6) {
      newErrors.sessionCode = "Session code must be exactly 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/session");
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Background radial lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_40%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.05),transparent_40%)] pointer-events-none"></div>

      {/* Header / Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 rounded-lg px-2.5 py-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </Link>
          <div className="flex-1 text-center pr-14">
            <h1 className="text-lg font-semibold text-white">Join Session</h1>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-md w-full mx-auto px-6 py-12 flex flex-col justify-center relative">
        <div className="text-center mb-10 select-none">
          <h2 className="text-3xl font-extrabold tracking-tight bg-linear-to-b from-white to-slate-300 bg-clip-text text-transparent">
            Join a Live Poll
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Enter your details to participate in the session.
          </p>
        </div>

        {/* Main Card */}
        <form onSubmit={handleJoin} className="w-full rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-2xl shadow-blue-500/2">
          {/* Field 1: Participant Name */}
          <div className="mb-6">
            <label htmlFor="participant-name" className="block text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2">
              Participant Name
            </label>
            <input
              id="participant-name"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-slate-950/50 text-white placeholder-slate-500 shadow-inner focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-sm"
            />
            {errors.name && (
              <p className="mt-2 text-xs font-medium text-rose-400 flex items-center gap-1.5 animate-fade-in">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errors.name}
              </p>
            )}
          </div>

          {/* Field 2: Session Code */}
          <div className="mb-6">
            <label htmlFor="session-code" className="block text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2">
              Session Code
            </label>
            <input
              id="session-code"
              type="text"
              value={sessionCode}
              onChange={handleSessionCodeChange}
              placeholder="Example: ABC123"
              className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-slate-950/50 text-white placeholder-slate-500 shadow-inner tracking-widest focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-sm font-mono"
            />
            {errors.sessionCode && (
              <p className="mt-2 text-xs font-medium text-rose-400 flex items-center gap-1.5 animate-fade-in">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errors.sessionCode}
              </p>
            )}
          </div>

          {/* Remember me Switch */}
          <div className="mb-8">
            <label className="flex items-center gap-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded-md border-white/10 bg-slate-950/50 text-blue-600 focus:ring-blue-500/50 focus:ring-offset-slate-950 w-4 h-4 cursor-pointer"
              />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200">
                Remember me on this device
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full relative group overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-200 hover:scale-[1.01] hover:shadow-blue-500/25 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 text-center cursor-pointer"
          >
            Join Session
          </button>
        </form>

        {/* Helper Text */}
        <div className="text-center mt-6">
          <p className="text-xs text-slate-500 leading-relaxed">
            Don't have a session code? <br />
            Ask your host to share it with you.
          </p>
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

export default Join;
