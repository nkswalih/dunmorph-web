import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">
            Join DUNMORPH
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-wide">
            Create Account
          </h1>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 bg-cream text-gray-900 text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
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
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 bg-cream text-gray-900 text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder=""
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 bg-cream text-gray-900 text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder=""
                required
              />
            </div>

            <button type="submit" className="w-full py-4 bg-gold text-cream text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300 cursor-pointer">
              Create Account
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-gold hover:text-gold-dark transition-colors duration-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
