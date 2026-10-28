import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { validateAuthForm } from '../utils/recipeUtils';
import { X, Lock, Mail, User, Eye, EyeOff, Sparkles, ChefHat } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authModalMode,
    login,
    signup,
    quickDemoLogin
  } = useAuth();

  const [mode, setMode] = useState<'signin' | 'signup'>(authModalMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync mode when modal opens with specific target
  React.useEffect(() => {
    setMode(authModalMode);
    setError(null);
  }, [authModalMode, isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const isSignUp = mode === 'signup';
    const validation = validateAuthForm(email, password, name, isSignUp);

    if (!validation.valid) {
      setError(validation.error || 'Please fill out all required fields.');
      return;
    }

    if (isSignUp) {
      signup(email, name);
    } else {
      login(email);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 bg-[#140A06]/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={closeAuthModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-[#DDD5C2] p-7 my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          aria-label="Close authentication modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#EFE8D8] text-[#281E19] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#E25C38] text-white flex items-center justify-center font-serif text-2xl font-bold mx-auto mb-3 shadow-sm">
            B
          </div>
          <h2 id="auth-modal-title" className="font-serif text-2xl font-bold text-[#281E19]">
            {mode === 'signin' ? 'Welcome Back to the Guild' : 'Join The Baker’s Guild'}
          </h2>
          <p className="text-xs text-[#786457] mt-1">
            {mode === 'signin'
              ? 'Access your saved bakes, mastered achievements, and oven notes.'
              : 'Unlock personal recipe notebooks, bake timers, and mastery tracking.'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex p-1 bg-[#F5EFE4] rounded-xl border border-[#E0D8C3] mb-6">
          <button
            type="button"
            onClick={() => {
              setMode('signin');
              setError(null);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              mode === 'signin'
                ? 'bg-white text-[#281E19] shadow-xs'
                : 'text-[#655347] hover:text-[#281E19]'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('signup');
              setError(null);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              mode === 'signup'
                ? 'bg-white text-[#281E19] shadow-xs'
                : 'text-[#655347] hover:text-[#281E19]'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-medium">
            {error}
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-[#281E19] mb-1.5">
                Full Name / Baker Moniker
              </label>
              <div className="relative flex items-center">
                <User className="absolute left-3.5 w-4 h-4 text-[#8D7868] pointer-events-none" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Julia Child"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#DDD5C2] rounded-xl text-xs text-[#281E19] placeholder-[#8D7868] focus:outline-none focus:ring-2 focus:ring-[#E25C38]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#281E19] mb-1.5">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 w-4 h-4 text-[#8D7868] pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="baker@artisan.com"
                className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#DDD5C2] rounded-xl text-xs text-[#281E19] placeholder-[#8D7868] focus:outline-none focus:ring-2 focus:ring-[#E25C38]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#281E19] mb-1.5">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 w-4 h-4 text-[#8D7868] pointer-events-none" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#DDD5C2] rounded-xl text-xs text-[#281E19] placeholder-[#8D7868] focus:outline-none focus:ring-2 focus:ring-[#E25C38]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-[#8D7868] hover:text-[#281E19] cursor-pointer"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#E25C38] hover:bg-[#C94723] text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer mt-2"
          >
            {mode === 'signin' ? 'Sign In to My Notebook' : 'Create Baker Profile'}
          </button>
        </form>

        {/* Quick Demo Login Option */}
        <div className="mt-6 pt-5 border-t border-[#F0EAE1]">
          <p className="text-[11px] text-center text-[#786457] font-medium mb-3">
            Or test with a 1-click pre-loaded profile:
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => quickDemoLogin('master')}
              className="p-2.5 border border-[#DDD5C2] rounded-xl hover:bg-[#FAF8F5] text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#281E19]">
                <ChefHat className="w-3.5 h-3.5 text-[#E25C38]" />
                <span>Chef Elena</span>
              </div>
              <p className="text-[10px] text-[#786457] mt-0.5">25 Mastered Bakes</p>
            </button>

            <button
              type="button"
              onClick={() => quickDemoLogin('apprentice')}
              className="p-2.5 border border-[#DDD5C2] rounded-xl hover:bg-[#FAF8F5] text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#281E19]">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Lucas (Novice)</span>
              </div>
              <p className="text-[10px] text-[#786457] mt-0.5">3 Mastered Bakes</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
