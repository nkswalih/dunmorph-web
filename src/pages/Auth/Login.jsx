import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">
            Welcome Back
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-wide">
            Sign In
          </h1>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 bg-cream text-gray-900 text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 bg-cream text-gray-900 text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder=""
                required
              />
            </div>

            <button type="submit" className="w-full py-4 bg-gold text-cream text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300 cursor-pointer">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-xs text-gray-500 hover:text-gold transition-colors duration-300">
              Forgot your password?
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          New to DUNMORPH?{' '}
          <Link to="/register" className="text-gold hover:text-gold-dark transition-colors duration-300">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
