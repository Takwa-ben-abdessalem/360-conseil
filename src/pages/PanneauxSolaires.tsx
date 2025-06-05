// src/pages/SolarPage.tsx
import React from "react";
import {
  CheckCircle,
  Sun,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Building,
  Home as HomeIcon, // Renommé pour éviter le conflit avec HomeIcon de lucide-react
  Thermometer,
  Paintbrush, // Ajout pour la section ADN
  ShieldCheck, // Ajout pour la section ADN
  Zap, // Ajout pour les offres
} from "lucide-react";
import { useState } from "react"; // Import useState for form handling

// Composant de la page Panneaux Solaires Photovoltaïques
const PanneauxSolaires: React.FC = () => {
  // État du formulaire de contact spécifique à cette page
  const [formData, setFormData] = useState({
    nomPrenom: "",
    telephone: "",
    email: "",
    ville: "",
    codePostal: "",
    typeProjet: "panneaux-solaires", // Pré-sélectionné pour cette page
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
    console.log("Formulaire de devis solaire soumis:", formData);
    // Logic to send data
    alert("Votre demande de devis solaire a été envoyée avec succès !");
    setFormData({
      // Reset form
      nomPrenom: "",
      telephone: "",
      email: "",
      ville: "",
      codePostal: "",
      typeProjet: "panneaux-solaires",
      receiveUpdates: false,
    });
  };

  return (
    <div className="font-sans antialiased bg-gray-50 text-gray-800">
      {/* Bandeau supérieur d'annonce */}
      <div className="w-full bg-blue-700 text-white text-center py-2 text-sm font-semibold">
        Transformez votre consommation : Jusqu'à 70% d'économies avec 360
        conseil !
      </div>

      {/* Section Héro - Panneaux Solaires (avec image et description côte à côte) */}
      <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Colonne de l'image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-left">
            <img
              src="https://placehold.co/500x350/F0F4F8/2A3F6D?text=Panneaux+Solaires+Haut" // Nouvelle image suggérée
              alt="Installation de panneaux solaires"
              className="rounded-xl shadow-2xl w-full max-w-md h-auto object-cover"
            />
            {/* Logo sur l'image */}
            <img
              src="/360-logo.png" // Utilisation du logo fourni
              alt="360 conseil Logo"
              className="absolute bottom-4 right-4 h-20 w-auto bg-white p-2 rounded-lg shadow-md"
            />
          </div>

          {/* Colonne du texte et du bouton */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 leading-tight mb-4 animate-fade-in-up">
              Panneaux Solaires Photovoltaïques : Votre Indépendance Énergétique
              !
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 opacity-90 animate-fade-in-up animation-delay-200">
              Transformez votre maison en une source d'énergie propre, illimitée
              et rentable. Produisez votre électricité et réduisez vos factures
              !
            </p>
            <button className="bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
              Demandez votre étude gratuite{" "}
              <ArrowRight size={20} className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Barre de navigation des services */}
      <section className="bg-blue-800 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          <button className="flex items-center space-x-2 px-6 py-3 rounded-full text-blue-800 bg-white shadow-inner font-bold">
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
          <button className="flex items-center space-x-2 px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-500 transition duration-300">
            <HomeIcon size={20} />
            <span>Isolation intérieure</span>
          </button>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12">
            Les Avantages Incontestables de l'Énergie Solaire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Sun size={48} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Économies Massives
              </h3>
              <p className="text-gray-600">
                Réduisez drastiquement vos factures d'électricité et gagnez une
                autonomie financière durable face à la hausse des prix.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Un Geste pour la Planète
              </h3>
              <p className="text-gray-600">
                Produisez une énergie 100% propre, diminuez votre empreinte
                carbone et participez activement à la transition énergétique.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <ArrowRight size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Valorisation Immobilière Intelligente
              </h3>
              <p className="text-gray-600">
                Augmentez significativement la valeur de votre propriété grâce à
                une installation moderne, performante et éco-responsable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus d'Installation */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12">
            Notre Processus d'Installation Solaire : Simplicité et Expertise
          </h2>
          <div className="relative flex flex-col items-center">
            {/* Ligne de progression pour desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
              {/* Étape 1 */}
              <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 z-10">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Audit Personnalisé
                </h3>
                <p className="text-gray-600">
                  Analyse approfondie de vos besoins énergétiques, de votre
                  consommation et des spécificités de votre toiture.
                </p>
              </div>
              {/* Étape 2 */}
              <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 z-10">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Installation Maîtrisée
                </h3>
                <p className="text-gray-600">
                  Nos équipes certifiées installent vos panneaux avec une
                  précision et une sécurité inégalées, dans les meilleurs
                  délais.
                </p>
              </div>
              {/* Étape 3 */}
              <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 z-10">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Mise en Service & Suivi Personnalisé
                </h3>
                <p className="text-gray-600">
                  Vérification complète du système et accompagnement continu
                  pour optimiser votre production et vos économies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nouvelle Section: Nos Offres Solaires (créatives et sans prix) */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-green-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fade-in-up">
            Découvrez nos Offres Solaires sur Mesure
          </h2>
          <p className="text-lg opacity-90 mb-12 animate-fade-in-up animation-delay-100">
            Des solutions conçues pour maximiser votre production et vos
            économies, avec pose et démarches administratives incluses !
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Offre Essentiel */}
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-200">
              <div className="flex items-center mb-4 border-b-4 border-white pb-2">
                <h3 className="text-2xl font-bold mr-2">OFFRE ESSENTIEL</h3>
                <CheckCircle size={24} className="text-white" />
              </div>
              <p className="text-center text-white mb-6 flex-grow text-lg font-medium">
                Le solaire accessible : performance et fiabilité pour une
                autonomie optimisée.
              </p>
              <ul className="text-left space-y-3 w-full">
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>Panneaux solaires de haute qualité</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>Micro-onduleurs performants</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>Installation rapide et conforme</span>
                </li>
              </ul>
              <button className="mt-6 bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Découvrir l'Essentiel
              </button>
            </div>

            {/* Offre Confort */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-300">
              <div className="flex items-center mb-4 border-b-4 border-white pb-2">
                <h3 className="text-2xl font-bold mr-2">OFFRE CONFORT</h3>
                <CheckCircle size={24} className="text-white" />
              </div>
              <p className="text-center text-white mb-6 flex-grow text-lg font-medium">
                Une solution clé en main : panneaux et onduleur de pointe pour
                un confort énergétique au quotidien.
              </p>
              <ul className="text-left space-y-3 w-full">
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>
                    Panneaux solaires Dualsun de fabrication française
                  </span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>Micro-onduleurs DUO</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>Technologie avancée pour une production maximale</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>Garantie étendue sur l'ensemble de l'équipement</span>
                </li>
              </ul>
              <button className="mt-6 bg-white text-blue-700 hover:bg-blue-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Opter pour le Confort
              </button>
            </div>

            {/* Offre Prestige */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-between transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4 border-b-4 border-white pb-2">
                <h3 className="text-2xl font-bold mr-2">OFFRE PRESTIGE</h3>
                <CheckCircle size={24} className="text-white" />
              </div>
              <p className="text-center text-white mb-6 flex-grow text-lg font-medium">
                L'installation solaire haut de gamme : équipement premium et
                suivi en temps réel pour une maîtrise optimale.
              </p>
              <ul className="text-left space-y-3 w-full">
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>Dualsun : l'excellence solaire française</span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>
                    Micro-onduleur solo Enphase pour une production maximale
                  </span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>
                    Application mobile de suivi de production en temps réel
                  </span>
                </li>
                <li className="flex items-start text-white">
                  <CheckCircle
                    size={20}
                    className="text-white mr-2 flex-shrink-0"
                  />
                  <span>Maintenance préventive annuelle incluse</span>
                </li>
              </ul>
              <button className="mt-6 bg-white text-purple-700 hover:bg-purple-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Choisir le Prestige
              </button>
            </div>
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

      {/* Section Contact / Demande de Devis Solaire */}
      <section
        id="contact-solaire"
        className="relative py-16 bg-white overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Partie gauche avec le texte et les coordonnées */}
          <div
            className="relative w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white"
            style={{
              backgroundImage: `url('https://placehold.co/800x600/1A202C/FFFFFF?text=Solar+Consultation')`, // Image spécifique au solaire
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
                src="360-logo.png" // Utilisation du logo fourni par l'utilisateur
                alt="Logo 360 Conseil"
                className="h-20 w-auto mb-6 mx-auto lg:mx-0" // Ajustez la taille et le positionnement si nécessaire
              />
              <h2 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-80">
                Contactez-nous
              </h2>
              <p className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Obtenez votre devis solaire personnalisé
              </p>
              <p className="text-base opacity-90 mb-8">
                Nos experts sont là pour vous guider vers la meilleure solution
                solaire pour votre maison.
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
                    <p className="text-base">123 Avenue de l'Innovation</p>
                    <p className="text-base">75000 Paris, France</p>
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
              Demandez votre Devis Solaire
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
                    <option value="panneaux-solaires">Panneaux solaires</option>
                    <option value="isolation-exterieure">
                      Isolation extérieure
                    </option>
                    <option value="pompe-a-chaleur">Pompe à chaleur</option>
                    <option value="isolation-interieure">
                      Isolation intérieure
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

export default PanneauxSolaires;
