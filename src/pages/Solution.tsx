import Layout from "@/components/layout/Layout";
import { Heart, Music, Dumbbell, Book, Brain, Speaker, ShieldCheck, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Solution() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A1D69] mb-4">Our Comprehensive Solution</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A holistic approach to health transformation, tailored specifically for Black women's unique needs and cultural context.
            </p>
          </div>

          {/* Core Components Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <ShieldCheck className="w-12 h-12 text-[#5A1D69]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Clinical Excellence</h3>
              <p className="text-gray-600 text-sm">
                Board-certified Internal Medicine physician-led care with AA Provider Telehealth Network
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <Book className="w-12 h-12 text-[#5A1D69]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Culturally Relevant</h3>
              <p className="text-gray-600 text-sm">
                Personalized Conscious Eating Plans and Movement Programs designed with cultural relevance
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-12 h-12 text-[#5A1D69]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mind & Spirit</h3>
              <p className="text-gray-600 text-sm">
                BH Coaching, Spiritual Guidance, and Mental Health Support
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-12 h-12 text-[#5A1D69]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Medication Management</h3>
              <p className="text-gray-600 text-sm">
                GLP-1 and Lipid Management prescriptions as needed
              </p>
            </motion.div>
          </div>

          {/* Program Leadership Section */}
          <div className="bg-gradient-to-r from-[#5A1D69]/10 to-[#FFE000]/10 rounded-xl p-8 mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-[#5A1D69]">Program Leadership</h3>
              <ShieldCheck className="w-8 h-8 text-[#5A1D69]" />
            </div>
            <p className="text-gray-700">
              Under the leadership of a Board-Certified Internal Medicine physician, More! is a health
              transformation program that focuses on Metabolic Optimization, Rejuvenation and Energy. More!
              focuses on helping our participants prevent/treat/reverse diabetes, hypertension, and
              hyperlipidemia and optimize weight so that they can experience health, wellness and fulfillment.
            </p>
          </div>

          {/* Activities Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#5A1D69] mb-8">Movement & Rejuvenation Activities</h3>
            
            {/* Movement Activities */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Movement Activities</h4>
                <Dumbbell className="w-6 h-6 text-[#5A1D69]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">Line Dance & Cardio</h5>
                  <p className="text-sm text-gray-500">Fun and engaging group activities</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">Yoga/Stretch</h5>
                  <p className="text-sm text-gray-500">Mind-body connection and flexibility</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">Walk</h5>
                  <p className="text-sm text-gray-500">Community walking groups and support</p>
                </div>
              </div>
            </div>

            {/* Music Section */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Music for Classes</h4>
                <Music className="w-6 h-6 text-[#5A1D69]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">R&B</h5>
                  <p className="text-sm text-gray-500">Motivating classics</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">Hip Hop</h5>
                  <p className="text-sm text-gray-500">Energetic beats</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">Gospel</h5>
                  <p className="text-sm text-gray-500">Inspiring spiritual music</p>
                </div>
              </div>
            </div>

            {/* Rejuvenation Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Rejuvenation (Mind & Spirit)</h4>
                <Brain className="w-6 h-6 text-[#5A1D69]" />
              </div>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">Spiritual Renewal</h5>
                  <p className="text-sm text-gray-500">Guided spiritual practices</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">Behavioral Health</h5>
                  <p className="text-sm text-gray-500">Professional therapy for anxiety and stress</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">Purpose & Outlook</h5>
                  <p className="text-sm text-gray-500">Finding purpose and optimizing outlook</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h5 className="font-medium text-gray-700">Clarity of Thought</h5>
                  <p className="text-sm text-gray-500">Mental clarity and focus</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
