
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
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
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/d1fe8f30-b471-4625-ae69-5ced38b2356e.png" 
                alt="Black Women's Health Logo" 
                className="h-20"
              />
            </div>
            <p className="mb-4 text-gray-300">
              Metabolically Optimized<br />
              Rejuvenated & Energized
            </p>
            <p className="text-sm text-gray-400">
              A health transformation program led by Board-Certified Internal Medicine physicians.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateTo('/')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('#program')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Program
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('#about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('#contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Email: info@blackwomenshealth.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} BlackWomensHealth.com. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button 
                onClick={() => navigateTo('/privacy')}
                className="text-xs text-gray-400 hover:text-white"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigateTo('/terms')}
                className="text-xs text-gray-400 hover:text-white"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
