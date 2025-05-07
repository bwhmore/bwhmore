import Layout from "@/components/layout/Layout";

export default function Obesity() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#5A1D69] mb-6">Black Women and Overweight/Obesity</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Obesity</h3>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              The relatively high levels of morbidity and mortality among Black populations in the United States are, in large part, caused by obesity, which increases the risk of stroke and various CVDs.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-gray-700">
                In 2023, Black adults had the highest obesity rates of any race or ethnicity in the United States, followed by American Indians/Alaska Natives and Hispanics. As of that time, around 42 percent of all Black adults were obese.
              </li>
              <li className="text-gray-700">
                The prevalence of obesity (BMI&gt;30) in African American women is 58%. About 4 out of 5 African American women are overweight or obese.
              </li>
              <li className="text-gray-700">
                Unlike other demographic groups, higher levels of income are not protective against obesity among non-Hispanic Black women.
              </li>
              <li className="text-gray-700">
                Furthermore, Black women lose less weight than other subpopulations do in behavioral weight loss intervention research, and they have a positive body self-image at higher weight levels, which may be psychologically healthy, but also diminishes their motivation to lose weight.
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Chithambo TP, Huey SJ. Black/White differences in perceived weight and attractiveness among overweight women. J Obes 2013;2013:320326
              </li>
              <li>
                Fitzgibbon ML, Tussing-Humphreys LM, Porter JS, Martin IK, Odoms-Young A, Sharp LK. Weight loss and African-American women: A systematic review of the behavioral weight loss intervention literature. Obes Rev 2012;13:193–213
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
