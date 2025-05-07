
import { 
  Stethoscope, 
  Salad, 
  PersonStanding, 
  Sparkles 
} from 'lucide-react';

const PillarCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color 
}) => {
  return (
    <div className="pillar-card card-hover bg-white p-6 rounded-2xl shadow-lg">
      <div className="inline-flex p-3 rounded-xl bg-purple-50/10 mb-4">
        <Icon className="text-[#FFE000]" size={24} />
      </div>
      <h3 className="text-xl font-bold text-purple-logo mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ProgramPillars = () => {
  return (
    <section id="program" className="py-16 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-more-purple font-medium">OUR APPROACH</span>
          <h2 className="text-3xl font-bold mt-2 text-purple-logo">Program Pillars</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our comprehensive approach addresses all aspects of metabolic health
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PillarCard
            title="Physician Metabolic Assessment"
            description="Comprehensive evaluation including lab reviews, medication management, and personalized health plans."
            icon={Stethoscope}
            color="more-purple"
          />
          
          <PillarCard
            title="Conscious Eating Plan"
            description="Culturally relevant nutrition guidance tailored to your metabolic needs and food preferences."
            icon={Salad}
            color="more-green"
          />
          
          <PillarCard
            title="Movement You Enjoy"
            description="Fun, culturally resonant physical activities including line dancing, yoga, and walking programs."
            icon={PersonStanding}
            color="more-orange"
          />
          
          <PillarCard
            title="Mind & Spirit Rejuvenation"
            description="Holistic support for mental wellbeing, stress management, and spiritual renewal."
            icon={Sparkles}
            color="more-yellow"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramPillars;
