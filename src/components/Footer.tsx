// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom"; // Importez Link si vous voulez des liens internes au router
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"; // Importez les icônes nécessaires

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6 md:px-12">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Colonne 1: Logo et Description */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center mb-4">
            <img
              src="https://placehold.co/40x40/4F46E5/FFFFFF?text=360 conseil"
              alt="Logo 360 conseil"
              className="h-10 w-10 rounded-full mr-2"
            />
            <span className="text-2xl font-bold text-white">360 conseil</span>
          </div>
          <p className="text-sm">
            Votre partenaire pour la transformation digitale. Nous créons des
            solutions innovantes pour un avenir connecté.
          </p>
        </div>

        {/* Colonne 2: Liens Rapides */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Liens Rapides
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Accueil
              </Link>
            </li>
            {/* Si vous voulez des liens de section ici, vous devrez les adapter comme dans la Navbar */}
            <li>
              <Link
                to="/a-propos"
                className="hover:text-blue-400 transition duration-300"
              >
                À Propos
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Notre Expertise
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Nos Réalisations
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonnes 3 & 4: Contact et Réseaux Sociaux */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-blue-400" />
                <span>60 RUE FRANCOIS IER 75008 PARIS</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-400" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-400" />
                <span>contact@groupeverlaine.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} 360 conseil. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
