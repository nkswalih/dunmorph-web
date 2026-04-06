import { useState } from 'react';
import { Link } from 'react-router-dom';

const SocialLogin = () => (
  <>
    <div className="relative mt-8 mb-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-white text-gray-400 text-xs italic">or</span>
      </div>
    </div>

    <div className="flex justify-between items-center gap-4">
      {/* Facebook */}
      <button type="button" className="flex flex-col items-center justify-center gap-2 group w-1/3">
        <div className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 shadow-sm border border-gray-100 flex items-center justify-center transition-colors">
          <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
          </svg>
        </div>
        <span className="text-[10px] tracking-widest uppercase text-gray-500 group-hover:text-gray-900 transition-colors">Facebook</span>
      </button>
      
      {/* Google */}
      <button type="button" className="flex flex-col items-center justify-center gap-2 group w-1/3">
        <div className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 shadow-sm border border-gray-100 flex items-center justify-center transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        <span className="text-[10px] tracking-widest uppercase text-gray-500 group-hover:text-gray-900 transition-colors">Google</span>
      </button>

      {/* Apple */}
      <button type="button" className="flex flex-col items-center justify-center gap-2 group w-1/3">
        <div className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 shadow-sm border border-gray-100 flex items-center justify-center transition-colors">
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.36 12.46c-.01-3.1 2.5-4.63 2.62-4.7-1.46-2.15-3.69-2.44-4.5-2.49-1.91-.2-3.73 1.15-4.7 1.15-.98 0-2.47-1.12-4.04-1.09-2.04.03-3.92 1.2-4.96 3.04-2.12 3.69-.54 9.15 1.52 12.18 1.01 1.48 2.21 3.14 3.79 3.08 1.52-.06 2.11-.99 3.94-.99 1.83 0 2.37 1 3.96 .97 1.62-.03 2.67-1.52 3.67-3.01 1.15-1.7 1.63-3.34 1.65-3.42-.04-.02-3.16-1.22-3.15-4.72z" />
            <path d="M15.11 3.41c.84-1.02 1.41-2.44 1.25-3.86-1.21.05-2.72.82-3.58 1.84-.77.89-1.42 2.34-1.24 3.74 1.35.1 2.73-.72 3.57-1.72z" />
          </svg>
        </div>
        <span className="text-[10px] tracking-widest uppercase text-gray-500 group-hover:text-gray-900 transition-colors">Apple</span>
      </button>
    </div>
  </>
);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20 bg-cream">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wide mb-2">
            Sign In
          </h1>
          <p className="text-sm text-gray-500">Welcome back to DUNMORPH.</p>
        </div>

        <div className="bg-white p-8 md:p-10 shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS *"
                className="w-full bg-white border border-gray-300 p-4 text-xs tracking-wider outline-none text-gray-900 focus:border-gray-900 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            <div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD *"
                className="w-full bg-white border border-gray-300 p-4 text-xs tracking-wider outline-none text-gray-900 focus:border-gray-900 placeholder-gray-400 transition-colors"
                required
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <label className="flex items-start gap-2 cursor-pointer group">
                <div className="relative flex items-center mt-0.5">
                   <input type="checkbox" className="peer sr-only" />
                   <div className="w-4 h-4 border border-gray-300 bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-colors flex items-center justify-center">
                      <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                   </div>
                </div>
                <span className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-900">
                  Remember me
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 mt-2 pb-2">
              <Link to="/forgot-password" className="hover:text-gold transition-colors underline">Forgot Password?</Link>
              <span>* Required</span>
            </div>

            <button type="submit" className="w-full bg-[#0a1429] text-white py-4 text-xs tracking-widest uppercase hover:bg-gold transition-colors mt-6 font-semibold cursor-pointer">
              Sign In
            </button>
          </form>

          <SocialLogin />
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          New to DUNMORPH?{' '}
          <Link to="/register" className="font-medium text-gray-900 hover:text-gold transition-colors duration-300 border-b border-gray-900 hover:border-gold">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
