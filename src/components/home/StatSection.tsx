

const StatBox = ({ 
  title,
  value, 
  description 
}) => {
  return (
    <div className="stat-box card-hover">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-3xl font-bold text-more-purple mt-2">{value}</p>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const StatSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Addressing critical health disparities affecting Black women's health
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatBox
            title="Obesity"
            value="56%"
            description="of Black women are obese (BMI ≥ 30), driven by socioeconomic and environmental factors"
          />
          <StatBox
            title="Hypertension"
            value="58%"
            description="of Black women have high blood pressure, increasing risks of stroke and kidney disease"
          />
          <StatBox
            title="Diabetes"
            value="2-3x"
            description="higher rates of diabetes-related complications"
          />
          <StatBox
            title="CVD Risk"
            value="20x"
            description="higher heart failure incidence before age 50"
          />
        </div>
      </div>
    </section>
  );
};

export default StatSection;
