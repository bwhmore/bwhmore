import React from 'react';

const Vision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5A1D69] mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To create a world where Black women thrive physically, mentally, and emotionally, 
            living their best lives free from chronic conditions and societal health disparities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#5A1D69]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5A1D69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#5A1D69] mb-4 text-center">
              Health Equity
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Eliminating health disparities</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to quality healthcare</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Culturally responsive care</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#5A1D69]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5A1D69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#5A1D69] mb-4 text-center">
              Holistic Well-being
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Physical health optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mental and emotional support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Social and community engagement</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#5A1D69]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5A1D69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[#5A1D69] mb-4 text-center">
              Sustainable Impact
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Long-term health outcomes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Community leadership development</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-[#5A1D69] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Intergenerational wellness</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
