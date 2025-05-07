import Layout from "@/components/layout/Layout";
import ArticleCard from "@/components/ArticleCard";
import { Weight, Heart, Scale } from "lucide-react";

export default function Research() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#5A1D69] mb-6">Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard
              title="Black Women and Overweight/Obesity"
              description="Explore research on obesity rates and health impacts among Black women"
              to="/research/obesity"
              icon={<Weight className="w-6 h-6 text-[#5A1D69]" />}
            />
            <ArticleCard
              title="Black Women and Cardiovascular Health"
              description="Learn about cardiovascular health disparities and prevention strategies"
              to="/research/cardiovascular"
              icon={<Heart className="w-6 h-6 text-[#5A1D69]" />}
            />
            <ArticleCard
              title="Metabolic Syndrome"
              description="Understand the key drivers of metabolic health and risk factors"
              to="/research/metabolic"
              icon={<Scale className="w-6 h-6 text-[#5A1D69]" />}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}


