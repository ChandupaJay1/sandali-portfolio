import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowLeft, Eye, EyeOff, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('sandatharu23@gmail.com');
  const [password, setPassword] = useState('sandali2026');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      // Validate credentials (accepts default demo credentials or any reasonable input)
      if (email.trim() && (password === 'sandali2026' || password === 'admin' || password === 'password123')) {
        localStorage.setItem('sandali_admin_authenticated', 'true');
        localStorage.setItem('sandali_admin_user', JSON.stringify({ email, name: 'Sandali Edirisinghe (Candidate)' }));
        navigate('/admin');
      } else {
        setError('Invalid credentials. You can use the Demo Quick Login button below.');
        setIsLoading(false);
      }
    }, 400);
  };

  const handleQuickDemoLogin = () => {
    localStorage.setItem('sandali_admin_authenticated', 'true');
    localStorage.setItem('sandali_admin_user', JSON.stringify({ email: 'sandatharu23@gmail.com', name: 'Sandali Edirisinghe (Candidate)' }));
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background aesthetic decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-200/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        {/* Back link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-600 hover:text-forest-800 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Public Portfolio
        </Link>

        {/* Header Branding */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-forest-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-2xl shadow-lg border-2 border-forest-700/50 mb-4">
            SS
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-forest-100 text-forest-800 border border-forest-200 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Practicum Admin Portal
          </span>
          <h2 className="text-3xl font-serif font-bold text-forest-900 tracking-tight">
            Portfolio Administration
          </h2>
          <p className="mt-2 text-sm text-charcoal-600 max-w-sm mx-auto">
            Manage candidate profile, lesson plans, Gibbs reflections, observation scores, and testimonials.
          </p>
        </div>

        {/* Login Card */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 bg-white py-8 px-6 shadow-xl rounded-2xl border border-ivory-300 sm:px-10"
        >
          {error && (
            <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Admin Email Address
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-charcoal-200 rounded-xl text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition-all"
                  placeholder="admin@sandali.edu.lk"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 border border-charcoal-200 rounded-xl text-sm text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition-all"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-charcoal-400 hover:text-charcoal-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Hint Box */}
            <div className="p-3 bg-ivory-100 rounded-xl border border-ivory-300 text-xs text-charcoal-600 flex items-start gap-2">
              <span className="font-semibold text-forest-800">Demo Key:</span>
              <span><code className="bg-white px-1.5 py-0.5 rounded border border-ivory-300 font-mono text-[11px] text-forest-900">sandali2026</code></span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-forest-800 hover:bg-forest-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-800 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Verifying Session...' : 'Sign In to Admin Portal'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-ivory-200 text-center">
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-forest-800/30 text-xs font-bold text-forest-900 hover:bg-forest-50 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
              One-Click Instant Demo Login
            </button>
            <p className="mt-2 text-[11px] text-charcoal-500">
              Instant access for assessment reviewers, examiners, and candidates.
            </p>
          </div>
        </motion.div>

        {/* Footer info */}
        <p className="mt-8 text-center text-xs text-charcoal-500">
          Sandali Edirisinghe Teaching Practicum Portfolio • University of Kelaniya
        </p>
      </div>
    </div>
  );
};
