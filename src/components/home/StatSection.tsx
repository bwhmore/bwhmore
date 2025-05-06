
import { 
  Activity, 
  Heart, 
  Weight, 
  Droplets
} from 'lucide-react';

const StatBox = ({ 
  title,
  value, 
  description, 
  icon: Icon 
}) => {
  return (
    <div className="stat-box card-hover">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-3xl font-bold text-more-purple mt-2">{value}</p>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <div className="bg-more-purple/10 p-3 rounded-lg">
          <Icon className="text-more-purple" size={24} />
        </div>
      </div>
    </div>
  );
};

const StatSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-heading">Why This Matters</h2>
          <p className="mt-4 text-lg text-gray-600">
            Addressing critical health disparities affecting Black women's health
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatBox
            title="Obesity"
            value="58%"
            description="of African American women are affected by obesity"
            icon={Weight}
          />
          <StatBox
            title="Hypertension"
            value="58%"
            description="of Black women have high blood pressure"
            icon={Activity}
          />
          <StatBox
            title="Diabetes"
            value="Higher"
            description="rates of diabetes-related complications"
            icon={Droplets}
          />
          <StatBox
            title="CVD Risk"
            value="Elevated"
            description="cardiovascular disease risk factors at younger ages"
            icon={Heart}
          />
        </div>
      </div>
    </section>
  );
};

export default StatSection;
