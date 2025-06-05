// src/components/BlogPostCard.tsx
import React from "react";
import { Calendar, ArrowRight } from "lucide-react"; // Importez les icônes nécessaires

// Interface pour les props de BlogPostCard
interface BlogPostCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

// Composant Carte d'Article de Blog
const BlogPostCard: React.FC<BlogPostCardProps> = ({
  image,
  title,
  date,
  excerpt,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4 flex items-center">
          <Calendar size={16} className="mr-2" /> {date}
        </p>
        <p className="text-gray-600 text-base mb-4">{excerpt}</p>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
        >
          Lire la suite <ArrowRight size={18} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
