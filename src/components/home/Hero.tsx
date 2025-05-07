
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-purple-50 overflow-hidden">
      {/* Background Circle Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-more-purple/5 rounded-full -mr-32 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-more-orange/5 rounded-full -ml-48 -mb-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight whitespace-nowrap">
              <span className="bg-gradient-to-r from-[#5A1D69] to-[#FFE000] bg-clip-text text-transparent">Ready to be MORE?</span>
            </h1>
            <h2 className="text-[#5A1D69] text-2xl md:text-3xl font-medium mb-8">
              Be Metabolically Optimized,<br />
              Rejuvenated & Energized.
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Join our clinical and behavioral program designed specifically for Black women's health. 
              Optimize your blood pressure, glucose, cholesterol and weight with a culturally relevant approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-started-form" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#5A1D69] to-[#FFE000] text-white hover:from-[#451552] hover:to-[#FFD700] px-4 py-2">
                Join Our Program
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/lovable-uploads/89ae3e64-b07d-4b7d-b026-dbdf118a0ca5.png"
              alt="Group of smiling Black women"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
