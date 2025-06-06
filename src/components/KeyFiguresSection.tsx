// src/components/KeyFiguresSection.tsx
import React from "react";
import { Briefcase, Users, Award } from "lucide-react";

const KeyFiguresSection: React.FC = () => {
  return (
    <section id="keys" className="py-16 bg-white text-gray-800">
      {" "}
      {/* Changement de bg-blue-800 à bg-white et text-white à text-gray-800 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          Nos Chiffres Clés : La Preuve de Notre Engagement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chiffre 1: Dossiers Réalisés */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {" "}
            {/* Changement de bg-blue-700 à bg-gray-100 */}
            <Briefcase size={48} className="text-blue-600 mb-4" />{" "}
            {/* Changement de text-white à text-blue-600 */}
            <p className="text-5xl font-extrabold text-green-600 mb-2">
              {" "}
              {/* Changement de text-green-400 à text-green-600 pour un meilleur contraste */}
              + 1000
            </p>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Dossiers Réalisés
            </h3>{" "}
            {/* Ajout de text-gray-800 */}
            <p className="text-gray-600 leading-relaxed">
              {" "}
              {/* Changement de text-gray-200 à text-gray-600 */}
              Des projets menés à bien, de l'étude à la concrétisation, pour une
              satisfaction client optimale.
            </p>
          </div>
          {/* Chiffre 2: Clients Accompagnés */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {" "}
            {/* Changement de bg-blue-700 à bg-gray-100 */}
            <Users size={48} className="text-blue-600 mb-4" />{" "}
            {/* Changement de text-white à text-blue-600 */}
            <p className="text-5xl font-extrabold text-green-600 mb-2">
              {" "}
              {/* Changement de text-green-400 à text-green-600 */}+ 1700
            </p>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Clients Accompagnés
            </h3>{" "}
            {/* Ajout de text-gray-800 */}
            <p className="text-gray-600 leading-relaxed">
              {" "}
              {/* Changement de text-gray-200 à text-gray-600 */}
              Une relation de confiance bâtie avec chaque client, pour des
              solutions énergétiques sur mesure.
            </p>
          </div>
          {/* Chiffre 3: Années d'Expérience */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            {" "}
            {/* Changement de bg-blue-700 à bg-gray-100 */}
            <Award size={48} className="text-blue-600 mb-4" />{" "}
            {/* Changement de text-white à text-blue-600 */}
            <p className="text-5xl font-extrabold text-green-600 mb-2">
              {" "}
              {/* Changement de text-green-400 à text-green-600 */}+ 7 ans
            </p>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              d'Expérience
            </h3>{" "}
            {/* Ajout de text-gray-800 */}
            <p className="text-gray-600 leading-relaxed">
              {" "}
              {/* Changement de text-gray-200 à text-gray-600 */}
              Un savoir-faire éprouvé et une expertise solide au service de vos
              projets de rénovation énergétique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;
