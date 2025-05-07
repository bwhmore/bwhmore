
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function for navigation
  const navigateTo = (path: string) => {
    if (path.startsWith('#')) {
      // Handle anchor links
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle regular page navigation
      navigate(path);
    }
    
    // Close menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center flex-1">
            <button onClick={() => navigateTo('/')} className="flex items-center">
              <img 
                src="/lovable-uploads/e00805b8-3d7e-48a4-8c02-6f7927eea08e.png" 
                alt="Black Women's Health Logo" 
                className="h-12 sm:h-16"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => navigateTo('/')} className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Home</button>
            <button onClick={() => navigateTo('#program')} className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Program</button>
            <button onClick={() => navigateTo('/research')} className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Research</button>
            <button onClick={() => navigateTo('/solution')} className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Solution</button>
            <button onClick={() => navigateTo('#about')} className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">About</button>
            <Button onClick={() => navigateTo('#get-started-form')} className="bg-gradient-to-r from-[#5A1D69] to-[#FFE000] text-white hover:from-[#451552] hover:to-[#FFD700] px-4 py-2 rounded-md ml-4">Join Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-more-purple focus:outline-none focus:ring-2 focus:ring-more-purple focus:ring-opacity-50 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100`}>
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/e00805b8-3d7e-48a4-8c02-6f7927eea08e.png" 
                alt="Black Women's Health Logo" 
                className="h-8"
              />
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-more-purple focus:outline-none focus:ring-2 focus:ring-more-purple focus:ring-opacity-50 rounded-lg transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="px-2 pt-4 pb-6 space-y-1 bg-white shadow-lg">
          <button 
            onClick={() => navigateTo('/')}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-more-purple focus:ring-opacity-50"
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('#program')}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-more-purple focus:ring-opacity-50"
          >
            Program
          </button>
          <button 
            onClick={() => navigateTo('/research')}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-more-purple focus:ring-opacity-50"
          >
            Research
          </button>
          <button 
            onClick={() => navigateTo('/solution')}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-more-purple focus:ring-opacity-50"
          >
            Solution
          </button>
          <button 
            onClick={() => navigateTo('#about')}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-more-purple focus:ring-opacity-50"
          >
            About
          </button>
          <div className="pt-2">
            <Button onClick={() => navigateTo('#get-started-form')} className="w-full bg-gradient-to-r from-[#5A1D69] to-[#FFE000] text-white hover:from-[#451552] hover:to-[#FFD700] px-4 py-3 rounded-md mt-4 font-medium text-lg transition-all duration-200">Join Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
