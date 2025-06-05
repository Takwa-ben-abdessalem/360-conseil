// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom"; // Importez Link
import { Menu, X } from "lucide-react"; // Importez les icônes nécessaires

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  // Fonction pour gérer le défilement vers une section spécifique sur la HomePage
  // Ceci serait appelé si un lien comme "Expertise" est cliqué et que l'utilisateur est déjà sur la HomePage
  const scrollToSection = (id: string) => {
    // Vérifier si l'utilisateur est sur la page d'accueil (ou la page où la section existe)
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Fermer le menu mobile après le clic
      }
    } else {
      // Si sur une autre page, naviguer d'abord vers la HomePage, puis défiler
      // Ceci nécessite une gestion plus avancée avec useNavigate et un useEffect sur la HomePage
      // Pour l'instant, le Link to="/" ramènera à la HomePage, le défilement sera à implémenter.
      // Ou bien, chaque section devient sa propre page. Pour cet exemple, je les mappe à la page d'accueil.
      setIsOpen(false); // Fermer le menu mobile
    }
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 flex items-center justify-between fixed w-full z-50 top-0 rounded-b-xl">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://placehold.co/40x40/4F46E5/FFFFFF?text=360c"
          alt="Logo 360conseil"
          className="h-10 w-10 rounded-full mr-2"
        />
        <span className="text-2xl font-bold text-gray-800">360 conseil</span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Utilisez Link pour la navigation entre les pages */}
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600 font-medium transition duration-300"
        >
          Accueil
        </Link>
        {/* Pour les sections de la HomePage, vous pouvez soit créer des routes distinctes
            soit utiliser une fonction de défilement si l'utilisateur est déjà sur la HomePage.
            Ici, je les fais pointer vers la HomePage pour simplifier, vous pourriez les adapter. */}
        <Link
          to="/"
          onClick={() => scrollToSection("expertise")}
          className="text-gray-600 hover:text-blue-600 font-medium transition duration-300"
        >
          Notre Expertise
        </Link>
        <Link
          to="/"
          onClick={() => scrollToSection("valeurs")}
          className="text-gray-600 hover:text-blue-600 font-medium transition duration-300"
        >
          Nos Valeurs
        </Link>
        <Link
          to="/"
          onClick={() => scrollToSection("realisations")}
          className="text-gray-600 hover:text-blue-600 font-medium transition duration-300"
        >
          Nos Réalisations
        </Link>

        <Link
          to="/"
          onClick={() => scrollToSection("contact")}
          className="text-gray-600 hover:text-blue-600 font-medium transition duration-300"
        >
          Contact
        </Link>
        {/* Exemple d'un lien vers une nouvelle page distincte */}
        <Link
          to="/a-propos"
          className="text-gray-600 hover:text-blue-600 font-medium transition duration-300"
        >
          À Propos
        </Link>
      </div>

      {/* Bouton Menu Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 md:hidden animate-fade-in-down">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <X size={32} />
          </button>
          <Link
            to="/"
            className="text-gray-800 text-2xl hover:text-blue-600 font-semibold transition duration-300"
            onClick={() => {
              scrollToSection("accueil");
              setIsOpen(false);
            }}
          >
            Accueil
          </Link>
          <Link
            to="/"
            onClick={() => {
              scrollToSection("expertise");
              setIsOpen(false);
            }}
            className="text-gray-800 text-2xl hover:text-blue-600 font-semibold transition duration-300"
          >
            Notre Expertise
          </Link>
          <Link
            to="/"
            onClick={() => {
              scrollToSection("valeurs");
              setIsOpen(false);
            }}
            className="text-gray-800 text-2xl hover:text-blue-600 font-semibold transition duration-300"
          >
            Nos Valeurs
          </Link>
          <Link
            to="/"
            onClick={() => {
              scrollToSection("realisations");
              setIsOpen(false);
            }}
            className="text-gray-800 text-2xl hover:text-blue-600 font-semibold transition duration-300"
          >
            Nos Réalisations
          </Link>

          <Link
            to="/"
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
            className="text-gray-800 text-2xl hover:text-blue-600 font-semibold transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/a-propos"
            className="text-gray-800 text-2xl hover:text-blue-600 font-semibold transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            À Propos
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
