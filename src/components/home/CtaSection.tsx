
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#5A1D69] to-[#FFE000]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-20 z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Health Today
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join our community of Black women committed to improving metabolic health, 
            managing weight, and reclaiming energy and vitality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
