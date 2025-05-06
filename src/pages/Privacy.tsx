
import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Last updated: May 6, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us when you register for the MORE! program, express interest in obtaining information about us or our products and services, or otherwise contact us.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use personal information collected via our website for business purposes, such as providing and improving our services, communicating with you, and complying with regulatory requirements.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">3. How We Share Your Information</h2>
          <p className="mb-4">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Your Privacy Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have rights regarding your personal information, such as the right to request access to your data, the right to correction, and the right to request deletion of your data.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this privacy policy, you may email us at info@blackwomenshealth.com or call us at (555) 123-4567.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
