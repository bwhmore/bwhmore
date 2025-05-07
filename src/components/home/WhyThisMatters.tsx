import React from 'react';

const WhyThisMatters = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5A1D69] mb-6">
            Why This Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Black women face disproportionate health challenges that impact their quality of life and longevity. Our program addresses these critical disparities head-on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#5A1D69]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5A1D69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#5A1D69] mb-3 text-center">
              Health Disparities
            </h3>
            <p className="text-gray-600 text-center">
              Black women are more likely to suffer from chronic conditions like diabetes, hypertension, and obesity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#5A1D69]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5A1D69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#5A1D69] mb-3 text-center">
              Access Barriers
            </h3>
            <p className="text-gray-600 text-center">
              Limited access to quality healthcare and culturally competent providers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#5A1D69]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5A1D69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#5A1D69] mb-3 text-center">
              Social Determinants
            </h3>
            <p className="text-gray-600 text-center">
              Economic, environmental, and social factors contribute to health inequities.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#5A1D69]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5A1D69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#5A1D69] mb-3 text-center">
              Systemic Issues
            </h3>
            <p className="text-gray-600 text-center">
              Historical and systemic factors create barriers to health equity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;
