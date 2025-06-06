// src/pages/HomePage.tsx
import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Sun,
  Home as HomeIcon,
  Thermometer,
  Fan,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Award,
  Briefcase,
  Users,
} from "lucide-react";

// Importez les composants des cartes
import ExpertiseCard from "../components/ExpertiseCard";
import BlogPostCard from "../components/BlogPostCard";
import KeyFiguresSection from "../components/KeyFiguresSection";

// Composant Section Héro
const HeroSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    nom: "",
    prenom: "",
    telephone: "",
    mail: "",
    ville: "",
    codePostal: "",
    typeProjet: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    // Logique pour envoyer les données
    try {
      const response = await fetch("http://localhost:5000/api/devis", {
        // L'URL de votre backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Afficher le message de succès du backend
        setFormData({
          // Réinitialiser le formulaire
          nom: "",
          prenom: "",
          telephone: "",
          mail: "",
          ville: "",
          codePostal: "",
          typeProjet: "",
        });
      } else {
        alert(`Erreur: ${data.message || "Quelque chose s'est mal passé."}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du devis :", error);
      alert(
        "Impossible de soumettre la demande. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <section
      id="accueil"
      className="relative h-screen w-full flex items-center justify-center text-center pt-20 md:pt-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom-subtle"
        style={{
          backgroundImage: `url('https://www.lepavillonfrancais.fr/media/galerie/104/4-fullhd_max.jpg')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-white w-full h-full flex flex-col lg:flex-row-reverse items-center justify-around p-6 md:p-12">
        <div className="bg-white/90 p-8 rounded-xl shadow-2xl backdrop-blur-sm text-gray-800 w-full max-w-md lg:w-1/3 mb-8 lg:mb-0 lg:ml-8 animate-fade-in-right">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Demandez votre Devis
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="prenom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Votre prénom"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div>
                <label
                  htmlFor="mail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Votre adresse email"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="ville"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ville
                </label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Ville"
                />
              </div>
              <div>
                <label
                  htmlFor="codePostal"
                  className="block text-sm font-medium text-gray-700"
                >
                  Code Postal
                </label>
                <input
                  type="text"
                  id="codePostal"
                  name="codePostal"
                  value={formData.codePostal}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Code postal"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="typeProjet"
                className="block text-sm font-medium text-gray-700"
              >
                Type de Projet
              </label>
              <select
                id="typeProjet"
                name="typeProjet"
                value={formData.typeProjet}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="">Sélectionnez un type de projet *</option>
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
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-300 transform hover:scale-105"
            >
              Envoyer ma Demande
            </button>
          </form>
        </div>

        <div className="max-w-xl text-white text-center lg:text-left lg:w-2/3 animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Construire l'Avenir, Ensemble.
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Des solutions innovantes et durables pour transformer vos ambitions
            en réalité.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Découvrir Nos Services{" "}
            <ArrowRight size={20} className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Composant Section Expertise
const ExpertiseSection: React.FC = () => {
  const expertises = [
    {
      id: "panneaux-solaires",
      icon: Sun,
      shortTitle: "Panneaux solaires",
      title: "Panneaux solaires photovoltaïques",
      image:
        "https://www.id-solaire.fr/wp-content/uploads/2024/11/combien-rapporte-100-m%C2%B2-panneaux-solaires.jpg",
      description:
        "Optez pour l'énergie solaire et réduisez significativement vos factures ! Nos solutions de panneaux photovoltaïques transforment la lumière du soleil en électricité propre, vous offrant une indépendance énergétique accrue et une contribution concrète à la transition écologique. Nous vous accompagnons de l'étude de faisabilité à l'installation et la maintenance de votre système, en optimisant votre consommation et votre revente d'énergie.",
      advantages: [
        "Jusqu'à 70% d'économies sur votre facture d'électricité",
        "Augmentation de la valeur de votre bien immobilier",
        "Réduction significative de votre empreinte carbone",
      ],
      ctaText: "Je passe au solaire",
      link: "/panneaux-solaires",
    },
    {
      id: "isolation-exterieure",
      icon: HomeIcon,
      shortTitle: "Isolation extérieure",
      title: "Isolation Thermique par l'Extérieur (ITE)",
      image:
        "https://res.cloudinary.com/mychauffage/image/upload/f_auto/v1/MyChauffage/isolation-murs-exterieurs-ite_wghk3e",
      description:
        "Améliorez considérablement la performance énergétique de votre habitation et son confort grâce à l'isolation par l'extérieur. C'est une solution efficace pour supprimer les ponts thermiques et moderniser votre façade.",
      advantages: [
        "Réduction des besoins en chauffage de 30% à 50%",
        "Rajeunissement esthétique de votre façade",
        "Valorisation durable de votre patrimoine",
      ],
      ctaText: "Découvrir l'ITE",
      link: "/ite",
    },
    {
      id: "pompe-a-chaleur",
      icon: Thermometer,
      shortTitle: "Pompe à chaleur",
      title: "Installation de Pompes à Chaleur (PAC)",
      image:
        "https://sonergia.fr/wp-content/uploads/2024/02/N4-Pompe-a-chaleur-air-air-scaled-1.jpeg",
      description:
        "Adoptez une solution de chauffage et de production d'eau chaude sanitaire performante et respectueuse de l'environnement. Les PAC sont économiques et peuvent offrir un confort toute l'année.",
      advantages: [
        "Diminution de la consommation d'énergie de 60% à 75%",
        "Confort thermique optimal toute l'année (chauffage/rafraîchissement)",
        "Éligibilité à de nombreuses aides de l'État",
      ],
      ctaText: "Choisir ma PAC",
      link: "/pac",
    },
    {
      id: "isolation-interieure",
      icon: Fan,
      shortTitle: "Isolation intérieure",
      title: "Isolation Thermique par l'Intérieur (ITI)",
      image:
        "https://energieplus-lesite.be/wp-content/uploads/2007/09/isolation-interieur-bon.jpg",
      description:
        "Optimisez le confort thermique et acoustique de votre intérieur avec nos solutions d'isolation performantes et adaptées. Idéale pour la rénovation, elle améliore significativement votre cadre de vie.",
      advantages: [
        "Réduction des déperditions de chaleur jusqu'à 25%",
        "Amélioration notable de l'isolation phonique",
        "Solution adaptée aux rénovations en appartement",
      ],
      ctaText: "Isoler mon intérieur",
      link: "/iti",
    },
  ];

  return (
    <section id="expertise" className="py-16 bg-blue-50">
      <div className="w-full mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 text-center mb-4">
          Notre Expertise
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          Découvrez nos domaines d'expertise clés pour améliorer la performance
          et le confort de votre habitat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((exp) => (
            <ExpertiseCard
              key={exp.id}
              id={exp.id}
              image={exp.image}
              title={exp.title}
              description={exp.description}
              advantages={exp.advantages} // Passage de la nouvelle prop
              ctaText={exp.ctaText}
              link={exp.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant Section Valeurs
const ValuesSection: React.FC = () => {
  return (
    <section
      id="valeurs"
      className="py-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="w-full mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Image pour la section Valeurs avec animation */}
        <div className="lg:w-1/2 animate-fade-in-left">
          <img
            src="https://www.radiofrance.fr/s3/cruiser-production/2022/12/351969ef-5ed1-4d9b-9e7f-53bdf77696a4/1200x680_gettyimages-1405880267-612x612.jpg"
            alt="Nos Valeurs"
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
        {/* Contenu texte pour les Valeurs avec animation */}
        <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-right">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Nos Valeurs, Votre Succès
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Au cœur de notre démarche, des principes solides guident chacune de
            nos actions pour garantir l'excellence et la confiance.
          </p>
          <ul className="space-y-4 text-gray-700 text-left mx-auto lg:mx-0 max-w-md">
            <li className="flex items-start text-base">
              <CheckCircle
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                <strong>Durabilité :</strong> Nous nous engageons à proposer des
                solutions respectueuses de l'environnement, conçues pour durer
                et minimiser votre empreinte carbone.
              </span>
            </li>
            <li className="flex items-start text-base">
              <CheckCircle
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                <strong>Qualité :</strong> L'excellence est notre maître-mot.
                Nous utilisons des matériaux de premier choix et des techniques
                d'installation irréprochables pour des résultats optimaux.
              </span>
            </li>
            <li className="flex items-start text-base">
              <CheckCircle
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                <strong>Client au Cœur :</strong> Votre satisfaction est notre
                priorité absolue. Nous vous écoutons attentivement pour
                comprendre vos besoins et vous offrir un accompagnement
                personnalisé.
              </span>
            </li>
            <li className="flex items-start text-base">
              <CheckCircle
                size={24}
                className="text-blue-600 mr-2 mt-1 flex-shrink-0"
              />
              <span>
                <strong>Innovation :</strong> Nous restons à la pointe des
                avancées technologiques pour vous apporter des solutions
                toujours plus performantes et adaptées aux défis énergétiques de
                demain.
              </span>
            </li>
          </ul>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Découvrir notre Histoire
          </button>
        </div>
      </div>
    </section>
  );
};

// Composant Section Contact (partie de la page d'accueil)
const ContactSection: React.FC = () => {
  // État du formulaire pour correspondre aux champs de la nouvelle image
  const [formData, setFormData] = React.useState({
    nomPrenom: "",
    telephone: "",
    email: "",
    ville: "",
    codePostal: "",
    typeProjet: "",
    receiveUpdates: false, // Pour la checkbox
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | boolean;

    // Type guard pour gérer les checkboxes et autres inputs/selects
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire de contact soumis:", formData);
    // Ici, vous pouvez ajouter la logique pour envoyer les données (ex: à une API)
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        // L'URL de votre backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Afficher le message de succès du backend
        setFormData({
          // Réinitialiser le formulaire
          nomPrenom: "",
          telephone: "",
          email: "",
          ville: "",
          codePostal: "",
          typeProjet: "",
          receiveUpdates: false,
        });
      } else {
        alert(`Erreur: ${data.message || "Quelque chose s'est mal passé."}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du contact :", error);
      alert(
        "Impossible de soumettre le message. Veuillez réessayer plus tard."
      );
    }

    // Réinitialiser le formulaire après soumission (optionnel)
    setFormData({
      nomPrenom: "",
      telephone: "",
      email: "",
      ville: "",
      codePostal: "",
      typeProjet: "",
      receiveUpdates: false,
    });
    // Afficher un message de succès à l'utilisateur (remplacer alert par une modale personnalisée en production)
    alert("Votre demande a été envoyée avec succès !");
  };

  return (
    <section id="contact" className="relative py-16 bg-white overflow-hidden">
      {/* Conteneur principal qui prend toute la largeur */}
      <div className="w-full max-w-7xl mx-auto rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Partie gauche avec le texte et les coordonnées */}
        <div
          className="relative w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white"
          style={{
            backgroundImage: `url('https://images.ctfassets.net/a3qyhfznts9y/4m83XhqwUf5oZSSSGzguil/98450a30210c0291a0ecc5553d45b09b/Contact_us_hero.jpg?w=1080&h=1022&fl=progressive&q=80&fm=jpg')`, // Nouvelle image de fond
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
              Entrez en contact aujourd'hui
            </p>
            <p className="text-base opacity-90 mb-8">
              Nous aimons les questions et les commentaires - et nous sommes
              toujours heureux d'aider ! Voici quelques façons de nous
              contacter.
            </p>

            {/* Coordonnées avec icônes */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <Mail size={24} className="text-white mr-4 flex-shrink-0" />{" "}
                {/* Icônes blanches pour contraste */}
                <div>
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-base">contact@360conseil.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={24} className="text-white mr-4 flex-shrink-0" />{" "}
                {/* Icônes blanches pour contraste */}
                <div>
                  <p className="font-semibold text-lg">Téléphone</p>
                  <p className="text-base">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={24} className="text-white mr-4 flex-shrink-0" />{" "}
                {/* Icônes blanches pour contraste */}
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
            Demandez votre Devis
          </h3>{" "}
          {/* Titre du formulaire */}
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
                  <option value="">Sélectionnez un type de projet *</option>
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
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <ValuesSection />
      <KeyFiguresSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
