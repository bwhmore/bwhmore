import Layout from "@/components/layout/Layout";

export default function CardiovascularHealth() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#5A1D69] mb-6">Black Women and Cardiovascular Health</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cardiovascular Health</h3>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Compared with White women, Black women have higher rates of CVD mortality, which have been attributed to poorer cardiovascular (CV) health and a higher burden of modifiable risk factors and clinical comorbidities.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-gray-700">
                Nearly 58% of Black women have high blood pressure (versus ~41% of white women) and diabetes-related complications (like amputations or kidney failure) are far more common in Black Americans
              </li>
              <li className="text-gray-700">
                Furthermore, the accumulation of both clinical and behavioral CV risk factors and the manifestation of CVD at younger ages for Black women compared with other racial and ethnic groups—that is, during young adulthood and middle adulthood—have significant implications for maternal and infant health
              </li>
              <li className="text-gray-700">
                Compared with non-Hispanic White women, non-Hispanic Black women aged 20 years and older have a higher prevalence of several clinical risk factors for CVD, including obesity, high blood pressure, and diabetes.
              </li>
              <li className="text-gray-700">
                Optimizing such behavioral factors as diet, physical activity, sleep, smoking, alcohol use, emotional health, and stress management is important to maintaining CV health (primordial prevention) and reducing CVD risk (primary and secondary prevention).
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Pool LR, Ning H, Lloyd-Jones DM, Allen NB. Trends in racial/ethnic disparities in cardiovascular health among U.S. adults from 1999–2012. J Am Heart Assoc 2017;6:e006027.
              </li>
              <li>
                Yu E, Malik VS, Hu FB. Cardiovascular disease prevention by diet modification. J Am Coll Cardiol 2018;72:914–926
              </li>
              <li>
                Fletcher GF, Landolfo C, Niebauer J, Ozemek C, Arena R, Lavie CJ. Promoting physical activity and exercise. J Am Coll Cardiol 2018;72:1622–1639
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
