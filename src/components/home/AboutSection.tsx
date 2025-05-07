
const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-more-purple">MORE Program!</h3>
            <p className="text-gray-600 mb-6">
              A clinical and behavior-based program that focuses on metabolic optimization, weight management, and mental rejuvenation.
            </p>
            <p className="text-gray-600">
              Under the leadership of Board-Certified Internal Medicine physicians, we deliver a comprehensive health transformation experience that addresses both the physical and spiritual aspects of wellness.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-more-purple">Metabolic Health Defined</h3>
            <p className="text-gray-600 mb-4">
              Metabolic health is defined as having ideal levels of:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-more-purple/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-more-purple font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700">Blood sugar</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-more-purple/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-more-purple font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700">Triglycerides</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-more-purple/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-more-purple font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700">HDL cholesterol</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-more-purple/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-more-purple font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700">Blood pressure</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-more-purple/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-more-purple font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700">Waist circumference</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-more-purple/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-more-purple font-bold text-sm">✓</span>
                </div>
                <span className="text-gray-700">Lipoprotein(a)</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              These factors directly relate to a person's risk for heart disease, diabetes, and stroke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
