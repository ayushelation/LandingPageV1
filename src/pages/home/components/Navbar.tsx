
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 font-poppins">
              GULLYHIVE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer">
              How It Works
            </a>
            <a href="#providers" className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer">
              Find Providers
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 font-medium transition-colors cursor-pointer">
              Reviews
            </a>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
              Join as Provider
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-teal-600 font-medium cursor-pointer">
                Services
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium cursor-pointer">
                How It Works
              </a>
              <a href="#providers" className="text-gray-700 hover:text-teal-600 font-medium cursor-pointer">
                Find Providers
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-teal-600 font-medium cursor-pointer">
                Reviews
              </a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer w-fit">
                Join as Provider
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
