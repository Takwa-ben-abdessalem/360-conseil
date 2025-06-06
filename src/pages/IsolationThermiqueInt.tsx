// src/pages/IsolationInterieurePage.tsx
import React from "react";
import {
  Home as HomeIcon,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sun,
  Building,
  Thermometer,
  Paintbrush,
  ShieldCheck,
  Zap, // Pour l'énergie/rapidité
  Volume2,
  CheckCircle, // Pour l'acoustique
} from "lucide-react";
import { useState } from "react"; // Import useState for form handling

// Composant de la page Isolation des Murs par l'Intérieur
const IsolationThermiqueInt: React.FC = () => {
  // État du formulaire de contact
  const [formData, setFormData] = useState({
    nomPrenom: "",
    telephone: "",
    email: "",
    ville: "",
    codePostal: "",
    typeProjet: "isolation-interieure", // Pré-sélectionné
    receiveUpdates: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | boolean;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      newValue = e.target.checked;
    } else {
      newValue = value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire de devis soumis:", formData);
    // Logic to send data
    alert("Votre demande de devis a été envoyée avec succès !");
    setFormData({
      // Reset form
      nomPrenom: "",
      telephone: "",
      email: "",
      ville: "",
      codePostal: "",
      typeProjet: "isolation-interieure",
      receiveUpdates: false,
    });
  };

  return (
    <div className="font-sans antialiased bg-gray-50 text-gray-800">
      {/* Bandeau supérieur d'annonce */}
      <div className="w-full bg-blue-700 text-white text-center py-2 text-sm font-semibold">
        Optimisez votre intérieur : Jusqu'à 25% d'économies avec 360 conseil !
      </div>

      {/* Section Héro */}
      <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texte Héro (Gauche) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 leading-tight mb-4 animate-fade-in-up">
              Isolation Intérieure : Créez un cocon de confort et d'économies !
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in-up animation-delay-200">
              Transformez votre espace de vie en un havre de paix, chaud en
              hiver, frais en été, et à l'abri des nuisances sonores.
            </p>
            <button className="bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
              Découvrez nos solutions{" "}
              <ArrowRight size={20} className="inline-block ml-2" />
            </button>
          </div>

          {/* Image Héro (Droite) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative animate-fade-in-right">
            <img
              src="https://placehold.co/500x350/F0F4F8/2A3F6D?text=Interieur+Confort" // Placeholder for interior comfort image
              alt="Intérieur confortable et bien isolé"
              className="rounded-xl shadow-2xl w-full max-w-md h-auto object-cover"
            />
            {/* Logo sur l'image */}
            <img
              src="/360-logo.png" // Using the provided logo
              alt="360 conseil Logo"
              className="absolute bottom-4 right-4 h-20 w-auto bg-white p-2 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Barre de navigation des services */}
      <section className="bg-blue-800 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          <button className="flex items-center space-x-2 px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-500 transition duration-300">
            <Sun size={20} />
            <span>Panneaux solaires</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-500 transition duration-300">
            <Building size={20} />
            <span>Isolation extérieure</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-500 transition duration-300">
            <Thermometer size={20} />
            <span>Pompe à chaleur</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 rounded-full text-blue-800 bg-white shadow-inner font-bold">
            <HomeIcon size={20} />
            <span>Isolation intérieure</span>
          </button>
        </div>
      </section>

      {/* Section ITI Principale */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-12">
            L'Isolation Thermique par l'Intérieur (ITI) : Votre Solution
            Complète
          </h2>

          {/* Sous-section: Pourquoi choisir 360 conseil pour votre ITI ? */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <img
                  src="https://placehold.co/200x200/ADD8E6/000000?text=Mur+Nu"
                  alt="Mur Nu"
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
                <img
                  src="https://placehold.co/200x200/87CEEB/000000?text=Pose+ITI"
                  alt="Pose ITI"
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
                <img
                  src="https://placehold.co/200x200/4682B4/FFFFFF?text=Mur+Fini"
                  alt="Mur Fini"
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Pourquoi 360 conseil est votre partenaire ITI idéal ?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  L'Isolation Thermique par l'Intérieur (ITI) est la solution
                  privilégiée pour améliorer rapidement et efficacement la
                  performance énergétique de votre habitat. Moins intrusive que
                  l'ITE, elle est idéale pour les appartements, les maisons
                  mitoyennes ou lorsque les contraintes architecturales
                  extérieures sont fortes. Elle permet de réduire les
                  déperditions de chaleur, d'améliorer le confort acoustique et
                  de créer un environnement intérieur plus sain.
                  <br />
                  <br />
                  Chez 360 conseil, nous maîtrisons l'ITI pour vous offrir une
                  installation rapide, des matériaux de qualité et un
                  accompagnement complet pour l'obtention des aides financières.
                </p>
              </div>
            </div>
          </div>

          {/* Sous-section: Les avantages de l'ITI */}
          <div className="bg-blue-100 rounded-xl shadow-lg p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="https://placehold.co/500x350/C0C0C0/333333?text=Interieur+Chaleureux" // Image of warm interior
                  alt="Intérieur chaleureux et calme"
                  className="rounded-xl shadow-md w-full max-w-md h-auto object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Les avantages de l'ITI : Confort, Économies et Rapidité
                </h3>
                <ul className="text-gray-600 leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <Thermometer
                      size={20}
                      className="text-red-500 mr-2 flex-shrink-0"
                    />
                    <span>
                      **Confort Thermique Accru :** Fini les murs froids et les
                      courants d'air. Votre intérieur reste agréable en toute
                      saison.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Volume2
                      size={20}
                      className="text-purple-600 mr-2 flex-shrink-0"
                    />
                    <span>
                      **Isolation Acoustique :** Réduisez les bruits extérieurs
                      et profitez d'un environnement plus paisible.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap
                      size={20}
                      className="text-yellow-500 mr-2 flex-shrink-0"
                    />
                    <span>
                      **Installation Rapide :** Les travaux sont moins lourds et
                      plus rapides, minimisant les désagréments.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck
                      size={20}
                      className="text-green-600 mr-2 flex-shrink-0"
                    />
                    <span>
                      **Éligibilité aux Aides :** Profitez de subventions pour
                      alléger le coût de votre projet.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sous-section: ITI : Le processus étape par étape */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              ITI : Un processus simple pour un résultat optimal
            </h3>
            <img
              src="https://placehold.co/900x450/A9A9A9/FFFFFF?text=Installation+ITI" // Large image of interior insulation installation
              alt="Installation Isolation Thermique par l'Intérieur"
              className="rounded-xl shadow-md mb-8 w-full h-auto object-cover"
            />
            <p className="text-gray-600 leading-relaxed mb-6">
              Notre processus d'installation de l'Isolation Thermique par
              l'Intérieur est conçu pour être efficace et discret. Après un
              diagnostic précis de vos murs, nos artisans qualifiés préparent
              les surfaces et installent les matériaux isolants avec le plus
              grand soin. Nous veillons à minimiser l'impact sur votre quotidien
              et à réaliser des finitions impeccables pour un rendu esthétique
              parfait.
              <br />
              <br />
              Que ce soit par la pose de panneaux isolants ou la projection
              d'isolant, chaque étape est maîtrisée pour vous garantir une
              performance thermique durable et un confort de vie amélioré.
            </p>
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Obtenez votre devis gratuit{" "}
              <ArrowRight size={20} className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Section "L'Esprit 360 conseil" */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-12">
            L'Esprit 360 conseil : Nos Piliers Fondateurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Bloc Qualité */}
            <div className="bg-blue-700 p-8 rounded-xl shadow-lg flex flex-col items-center">
              <Paintbrush size={48} className="text-white mb-4" />
              <h3 className="text-2xl font-bold mb-3">Excellence Artisanal</h3>
              <p className="text-gray-200 leading-relaxed">
                Nous sélectionnons des matériaux d'exception et appliquons un
                savoir-faire inégalé pour des résultats qui durent.
              </p>
            </div>
            {/* Bloc Savoir-faire */}
            <div className="bg-blue-700 p-8 rounded-xl shadow-lg flex flex-col items-center">
              <ShieldCheck size={48} className="text-white mb-4" />
              <h3 className="text-2xl font-bold mb-3">Expertise Certifiée</h3>
              <p className="text-gray-200 leading-relaxed">
                Notre équipe, composée d'experts passionnés et certifiés, met
                toute son expérience au service de votre projet.
              </p>
            </div>
            {/* Bloc Proximité */}
            <div className="bg-blue-700 p-8 rounded-xl shadow-lg flex flex-col items-center">
              <HomeIcon size={48} className="text-white mb-4" />
              <h3 className="text-2xl font-bold mb-3">Partenariat Humain</h3>
              <p className="text-gray-200 leading-relaxed">
                Profitez d'un accompagnement sur mesure et d'un interlocuteur
                dédié, pour une collaboration basée sur la confiance.
              </p>
            </div>
          </div>
          <img
            src="https://placehold.co/800x400/1A202C/FFFFFF?text=Vision+360+Conseil" // Image de maison en bas de section ADN
            alt="Vision 360 conseil"
            className="rounded-xl shadow-2xl w-full max-w-4xl mx-auto object-cover"
          />
        </div>
      </section>

      {/* Section Contact / Demande de Devis Isolation Intérieure */}
      <section
        id="contact-interieure"
        className="relative py-16 bg-white overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Partie gauche avec le texte et les coordonnées */}
          <div
            className="relative w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white"
            style={{
              backgroundImage: `url('https://placehold.co/800x600/1A202C/FFFFFF?text=Interior+Consultation')`, // Image spécifique à l'isolation intérieure
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay pour assombrir l'image et améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Effet sombre */}
            <div className="relative z-10">
              {/* Logo de la société */}
              <img
                src="/360-logo.png" // Utilisation du logo fourni par l'utilisateur
                alt="Logo 360 Conseil"
                className="h-20 w-auto mb-6 mx-auto lg:mx-0" // Ajustez la taille et le positionnement si nécessaire
              />
              <h2 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-80">
                Contactez-nous
              </h2>
              <p className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Obtenez votre devis isolation intérieure personnalisé
              </p>
              <p className="text-base opacity-90 mb-8">
                Nos experts sont là pour vous guider vers la meilleure solution
                d'isolation intérieure pour votre maison.
              </p>

              {/* Coordonnées avec icônes */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <Mail size={24} className="text-white mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-base">contact@360conseil.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone size={24} className="text-white mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Téléphone</p>
                    <p className="text-base">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin size={24} className="text-white mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Adresse</p>
                    <p className="text-base">60 RUE FRANCOIS IER </p>
                    <p className="text-base">75008 Paris, France</p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <p className="text-sm font-semibold mb-4 opacity-90">
                Retrouvez-nous sur :
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Partie droite avec le formulaire */}
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-12 text-gray-800">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Demandez votre Devis Isolation Intérieure
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nomPrenom" className="sr-only">
                    Nom et prénom
                  </label>
                  <input
                    type="text"
                    id="nomPrenom"
                    name="nomPrenom"
                    value={formData.nomPrenom}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Nom et prénom *"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="sr-only">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Téléphone *"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Email *"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="ville" className="sr-only">
                    Ville
                  </label>
                  <input
                    type="text"
                    id="ville"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Ville *"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="codePostal" className="sr-only">
                    Code postal
                  </label>
                  <input
                    type="text"
                    id="codePostal"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Code postal *"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="typeProjet" className="sr-only">
                    Type de projet
                  </label>
                  <select
                    id="typeProjet"
                    name="typeProjet"
                    value={formData.typeProjet}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  >
                    <option value="isolation-interieure">
                      Isolation intérieure
                    </option>
                    <option value="panneaux-solaires">Panneaux solaires</option>
                    <option value="pompe-a-chaleur">Pompe à chaleur</option>
                    <option value="isolation-exterieure">
                      Isolation extérieure
                    </option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <input
                  id="receiveUpdates"
                  name="receiveUpdates"
                  type="checkbox"
                  checked={formData.receiveUpdates}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="receiveUpdates"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Recevoir par email/SMS les actualités 360 conseil
                </label>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                En cliquant sur Valider, vous acceptez les{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Conditions générales d'utilisation
                </a>{" "}
                et la{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Politique de confidentialité
                </a>
                .
              </p>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Valider
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IsolationThermiqueInt;
