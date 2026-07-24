import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Host() {
  const navigate = useNavigate();

  const [pollTitle, setPollTitle] = useState("");
  const [options, setOptions] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
  ]);
  const [duration, setDuration] = useState("30");
  const [allowMultiple, setAllowMultiple] = useState(false);
  const [errors, setErrors] = useState({});

  const handleOptionChange = (id, newValue) => {
    setOptions(options.map(opt => opt.id === id ? { ...opt, value: newValue } : opt));
    if (errors.options) {
      setErrors({ ...errors, options: "" });
    }
  };

  const addOption = () => {
    setOptions([...options, { id: Date.now(), value: "" }]);
  };

  const deleteOption = (id) => {
    if (options.length > 2) {
      setOptions(options.filter(opt => opt.id !== id));
      if (errors.options) {
        setErrors({ ...errors, options: "" });
      }
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!pollTitle.trim()) {
      newErrors.pollTitle = "Poll question is required.";
    }

    const trimmedValues = options.map(opt => opt.value.trim());

    if (trimmedValues.some(val => val === "")) {
      newErrors.options = "All option fields must be filled.";
    }

    const uniqueValues = new Set(trimmedValues.map(v => v.toLowerCase()));
    if (uniqueValues.size !== trimmedValues.length && !newErrors.options) {
      newErrors.options = "Duplicate options are not allowed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateSession = () => {
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
            <h1 className="text-lg font-semibold text-white">Create New Poll</h1>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-12 flex flex-col justify-center relative">
        <div className="text-center mb-10 select-none">
          <h2 className="text-3xl font-extrabold tracking-tight bg-linear-to-b from-white to-slate-300 bg-clip-text text-transparent">
            Create New Poll
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Design your poll and share it instantly.
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-md shadow-2xl shadow-blue-500/2">
          {/* Section 1: Poll Title */}
          <div className="mb-8">
            <label htmlFor="poll-title" className="block text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2">
              Poll Question
            </label>
            <input
              id="poll-title"
              type="text"
              value={pollTitle}
              onChange={(e) => {
                setPollTitle(e.target.value);
                if (errors.pollTitle) setErrors({ ...errors, pollTitle: "" });
              }}
              placeholder="Enter your poll question..."
              className="w-full px-4 py-4 rounded-xl border border-white/10 bg-slate-950/50 text-white placeholder-slate-500 shadow-inner focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-base"
            />
            {errors.pollTitle && (
              <p className="mt-2 text-xs font-medium text-rose-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errors.pollTitle}
              </p>
            )}
          </div>

          {/* Section 2: Poll Options */}
          <div className="mb-8">
            <label className="block text-xs font-semibold text-slate-400 tracking-wider uppercase mb-3">
              Poll Options
            </label>
            <div className="space-y-3">
              {options.map((option, index) => (
                <div key={option.id} className="flex items-center gap-3 transition-all duration-200">
                  <input
                    type="text"
                    value={option.value}
                    onChange={(e) => handleOptionChange(option.id, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="flex-1 px-4 py-3 rounded-xl border border-white/10 bg-slate-950/50 text-white placeholder-slate-500 shadow-inner focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => deleteOption(option.id)}
                    disabled={options.length <= 2}
                    className="flex items-center justify-center p-3 rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:bg-white/5 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addOption}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add Another Option
            </button>

            {errors.options && (
              <p className="mt-3 text-xs font-medium text-rose-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errors.options}
              </p>
            )}
          </div>

          {/* Section 3: Session Settings */}
          <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="duration" className="block text-xs font-semibold text-slate-400 tracking-wider uppercase mb-2">
                Duration
              </label>
              <select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-slate-950 text-white shadow-inner focus:outline-hidden focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-sm appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1.25rem",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <option value="30">30 seconds</option>
                <option value="60">60 seconds</option>
                <option value="90">90 seconds</option>
                <option value="120">120 seconds</option>
              </select>
            </div>

            <div className="flex flex-col justify-center">
              <span className="block text-xs font-semibold text-slate-400 tracking-wider uppercase mb-3">
                Settings
              </span>
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200 select-none">
                  Allow Multiple Selection
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={allowMultiple}
                    onChange={(e) => setAllowMultiple(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-800 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 peer-checked:after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 transition-colors duration-200"></div>
                </div>
              </label>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={handleCreateSession}
              className="w-full sm:w-auto min-w-[200px] relative group overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-500/25 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950 text-center cursor-pointer"
            >
              Create Session
            </button>
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

export default Host;
