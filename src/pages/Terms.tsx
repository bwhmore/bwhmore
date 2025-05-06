
import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Last updated: May 6, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to MORE! These Terms of Service govern your use of our website and services. By accessing or using the MORE! program, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Program Description</h2>
          <p className="mb-4">
            MORE! is a health transformation program focused on metabolic optimization, weight management, and mental rejuvenation. The program is designed to help prevent and reverse diabetes, hypertension, and hyperlipidemia.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Medical Disclaimer</h2>
          <p className="mb-4">
            While our program is led by Board-Certified Internal Medicine physicians, the information provided through our website and services is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Privacy</h2>
          <p className="mb-4">
            Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and disclose information about you.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at info@blackwomenshealth.com or call (555) 123-4567.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
