
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-more-purple">MORE!</span>
              <span className="ml-2 text-sm text-gray-600 hidden sm:inline-block">
                Metabolically Optimized<br />
                Rejuvenated & Energized
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Home</Link>
            <Link to="#program" className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Program</Link>
            <Link to="#about" className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">About</Link>
            <Link to="#contact" className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Contact</Link>
            <Button className="more-button ml-4">Join Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-more-purple focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
          <Link 
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="#program"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Program
          </Link>
          <Link 
            to="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            to="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <div className="pt-2">
            <Button className="more-button w-full">Join Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
