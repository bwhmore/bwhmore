import React from 'react';

const ProgramOverview = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-purple-50/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5A1D69] mb-4">
            Optimizing Health for Black Women<br />
            <span className="text-3xl md:text-4xl">A Transformative Wellness Program</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#5A1D69] mb-4">
              Physical Health Optimization
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Prevents or reverses chronic conditions like diabetes and hypertension.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Promotes sustainable weight loss and metabolic balance.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Offers tailored, evidence-based lifestyle interventions.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#5A1D69] mb-4">
              Mental and Emotional Well-Being
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Reduces stress and anxiety for improved mental clarity.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Builds emotional resilience through professional therapy and support.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Encourages a positive outlook to support long-term health goals.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
