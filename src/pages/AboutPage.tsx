// src/pages/AboutPage.tsx
import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Briefcase,
  Lightbulb,
  TrendingUp,
  Users,
  Target,
  ShieldCheck,
} from "lucide-react";

// Importez les composants réutilisables
import KeyFiguresSection from "../components/KeyFiguresSection";

// Composant Section Héro pour la page À Propos
const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative h-96 w-full flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-subtle"
        style={{
          backgroundImage: `url('https://www.lepavillonfrancais.fr/media/galerie/104/4-fullhd_max.jpg')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-white p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          360 Conseil
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          Votre partenaire de confiance pour l'innovation et la performance
          énergétique.
        </p>
      </div>
    </section>
  );
};

// Composant Notre Positionnement
const OurPositioningSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Notre Positionnement Unique
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Nous nous distinguons par notre approche intégrée et notre engagement
          envers l'excellence, la durabilité et la satisfaction client. Notre
          expertise couvre un large éventail de solutions pour vous accompagner
          dans tous vos projets.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
          Découvrir Nos Services{" "}
          <ArrowRight size={20} className="inline-block ml-2" />
        </button>
      </div>
    </section>
  );
};

// Composant Nos Activités
const OurActivitiesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://placehold.co/600x400/D1E0FF/2A3F6D?text=Nos+Activités"
            alt="Nos Activités"
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Nos Activités Clés
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Nous sommes spécialisés dans la rénovation énergétique, offrant des
            solutions complètes pour les particuliers et les professionnels. Nos
            domaines d'intervention incluent :
          </p>
          <ul className="space-y-4 text-gray-700 text-left mx-auto lg:mx-0 max-w-md">
            <li className="flex items-start">
              <CheckCircle
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>Installation de panneaux solaires photovoltaïques.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                Isolation thermique par l'extérieur (ITE) et par l'intérieur
                (ITI).
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                Mise en place de pompes à chaleur (PAC) pour le chauffage et
                l'eau chaude.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                Conseil et accompagnement pour l'obtention des aides
                financières.
              </span>
            </li>
          </ul>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Voir Toutes Nos Activités{" "}
            <ArrowRight size={20} className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Composant Notre Organisation
const OurOrganizationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://placehold.co/600x400/A78BFA/FFFFFF?text=Notre+Organisation"
            alt="Notre Organisation"
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Notre Organisation
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Chez 360 conseil, nous sommes fiers de notre équipe de
            professionnels dévoués et hautement qualifiés. Notre structure
            organisationnelle favorise la collaboration, l'innovation et
            l'efficacité pour garantir des projets réussis.
          </p>
          <ul className="space-y-4 text-gray-700 text-left mx-auto lg:mx-0 max-w-md">
            <li className="flex items-start">
              <Briefcase
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                Des chefs de projet expérimentés pour un suivi personnalisé.
              </span>
            </li>
            <li className="flex items-start">
              <Lightbulb
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                Une équipe de recherche et développement à la pointe de
                l'innovation.
              </span>
            </li>
            <li className="flex items-start">
              <Users
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                Des techniciens certifiés pour une installation irréprochable.
              </span>
            </li>
          </ul>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Rencontrer Notre Équipe{" "}
            <ArrowRight size={20} className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <AboutHeroSection />
      <KeyFiguresSection />
      <OurPositioningSection />
      <OurActivitiesSection />
      <OurOrganizationSection />
    </div>
  );
};

export default AboutPage;
