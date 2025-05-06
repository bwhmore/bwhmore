
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-heading">MORE!</span><br />
              <span className="text-2xl md:text-3xl font-medium text-gray-700">
                Metabolically Optimized<br />
                Rejuvenated & Energized
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              A clinical and behavioral program designed specifically for Black women's health. 
              Optimize your blood pressure, glucose, cholesterol and weight with a culturally relevant approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="more-button">Join Our Program</Button>
              <Button className="tertiary-button">Learn More</Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/public/lovable-uploads/89ae3e64-b07d-4b7d-b026-dbdf118a0ca5.png"
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
