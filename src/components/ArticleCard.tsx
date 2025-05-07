import { Link } from 'react-router-dom';

interface ArticleCardProps {
  title: string;
  description: string;
  to: string;
  icon?: React.ReactNode;
}

export default function ArticleCard({ title, description, to, icon }: ArticleCardProps) {
  return (
    <Link
      to={to}
      className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="flex items-center gap-4 mb-4">
        {icon && (
          <div className="w-12 h-12 bg-[#FFE000]/20 rounded-full flex items-center justify-center">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-[#5A1D69] group-hover:text-[#FFE000] transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 text-lg group-hover:text-[#5A1D69] transition-colors">
        {description}
      </p>
    </Link>
  );
}
