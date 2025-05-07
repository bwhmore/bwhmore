import Layout from "@/components/layout/Layout";

export default function MetabolicSyndrome() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#5A1D69] mb-6">Metabolic Syndrome</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">A Key Driver</h3>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Metabolic health defined as having ideal levels of blood sugar, triglycerides, high-density lipoprotein (HDL) cholesterol, blood pressure, waist circumference and Lipoprotein(a). These factors directly relate to a person's risk for heart disease, diabetes, and stroke.
            </p>
            <p className="text-lg text-gray-700">
              Metabolic syndrome is diagnosed when someone has three or more of these risk factors (specific numbers for women):
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-gray-700">
                High blood glucose (sugar) &gt;100mg/dL
              </li>
              <li className="text-gray-700">
                Low levels of HDL ("good") cholesterol in the blood. &lt;50mg/dL
              </li>
              <li className="text-gray-700">
                High levels of triglycerides in the blood &gt;150mg/dL
              </li>
              <li className="text-gray-700">
                Large waist circumference or "apple-shaped" body. Waist &gt;35 inches
              </li>
              <li className="text-gray-700">
                High Blood Pressure &gt;130/80
              </li>
              <li className="text-gray-700 font-bold">
                High Lipoprotein (a)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
