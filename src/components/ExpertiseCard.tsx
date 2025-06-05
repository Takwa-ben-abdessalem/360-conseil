// src/components/ExpertiseCard.tsx
import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react"; // Importez l'icône nécessaire
import { Link } from "react-router-dom";

// Interface pour les props de ExpertiseCard
interface ExpertiseCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  advantages: string[];
  ctaText: string;
  link: string;
}

// Composant Carte d'Expertise
const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  id,
  image,
  title,
  description,
  advantages,
  ctaText,
  link,
}) => {
  return (
    // La carte elle-même est un conteneur flex en colonne et prend toute la hauteur disponible
    <div
      key={id}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Ce conteneur de contenu est aussi un flex en colonne et va grandir pour pousser le bouton */}
      <div className="p-6 text-center flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        {/* Cette div englobe la description et les avantages, et va grandir pour prendre l'espace restant */}
        <div className="flex-grow">
          <p className="text-gray-600 text-base mb-4 line-clamp-3">
            {description}
          </p>
          {/* Section pour les points d'avantages */}
          {advantages && advantages.length > 0 && (
            <ul className="text-left space-y-2 mb-4 px-2">
              {advantages.map((advantage, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 text-sm"
                >
                  <CheckCircle
                    size={16}
                    className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Le bouton est poussé vers le bas grâce à mt-auto */}
        <Link
          to={link}
          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center mx-auto mt-auto"
        >
          {ctaText} <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ExpertiseCard;
