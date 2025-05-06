
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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => navigateTo('/')} className="flex items-center">
              <img 
                src="/public/lovable-uploads/d1fe8f30-b471-4625-ae69-5ced38b2356e.png" 
                alt="Black Women's Health Logo" 
                className="h-16"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => navigateTo('/')} className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Home</button>
            <button onClick={() => navigateTo('#program')} className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Program</button>
            <button onClick={() => navigateTo('#about')} className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">About</button>
            <button onClick={() => navigateTo('#contact')} className="text-gray-700 hover:text-more-purple px-3 py-2 font-medium">Contact</button>
            <Button onClick={() => navigateTo('/join')} className="more-button ml-4">Join Now</Button>
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
          <button 
            onClick={() => navigateTo('/')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50"
          >
            Home
          </button>
          <button 
            onClick={() => navigateTo('#program')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50"
          >
            Program
          </button>
          <button 
            onClick={() => navigateTo('#about')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50"
          >
            About
          </button>
          <button 
            onClick={() => navigateTo('#contact')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-more-purple hover:bg-gray-50"
          >
            Contact
          </button>
          <div className="pt-2">
            <Button onClick={() => navigateTo('/join')} className="more-button w-full">Join Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
