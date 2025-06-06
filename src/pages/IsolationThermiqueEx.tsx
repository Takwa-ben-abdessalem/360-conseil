// src/pages/ExteriorInsulationPage.tsx
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
} from "lucide-react";
import { useState } from "react"; // Import useState for form handling

// Composant de la page Isolation des Murs par l'Extérieur
const IsolationThermiqueEx: React.FC = () => {
  // État du formulaire de contact
  const [formData, setFormData] = useState({
    nomPrenom: "",
    telephone: "",
    email: "",
    ville: "",
    codePostal: "",
    typeProjet: "isolation-exterieure", // Pré-sélectionné
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
      typeProjet: "isolation-exterieure",
      receiveUpdates: false,
    });
  };

  return (
    <div className="font-sans antialiased bg-gray-50 text-gray-800">
      {/* Bandeau supérieur d'annonce */}
      <div className="w-full bg-blue-700 text-white text-center py-2 text-sm font-semibold">
        Obtenez jusqu'à 30% d'économies d'énergie avec 360 conseil !
      </div>

      {/* Section Héro */}
      <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texte Héro (Gauche) */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 leading-tight mb-4 animate-fade-in-up">
              Révolutionnez votre confort : Isolation jusqu'à{" "}
              <span className="text-green-600">70%</span> d'économies !
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in-up animation-delay-200">
              Découvrez comment nos solutions d'Isolation Thermique par
              l'Extérieur (ITE) transforment votre quotidien, allégeant vos
              factures et magnifiant votre patrimoine.
            </p>
            <button className="bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
              Estimez vos économies{" "}
              <ArrowRight size={20} className="inline-block ml-2" />
            </button>
          </div>

          {/* Image Héro (Droite) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative animate-fade-in-right">
            <img
              src="https://particulier.hellio.com/hubfs/Blog%20Particuliers%20-%20Images/isolation-murs-exterieur-ite-mains-metre.jpeg" // Placeholder for expert image
              alt="Expert 360 conseil"
              className="rounded-xl shadow-2xl w-full max-w-md h-auto object-cover"
            />
            {/* Logo sur l'image */}
            {/* <img
              src="/360-logo.png" // Using the provided logo
              alt="360 conseil Logo"
              className="absolute bottom-4 right-4 h-20 w-auto bg-white p-2 rounded-lg shadow-md"
            /> */}
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
          <button className="flex items-center space-x-2 px-6 py-3 rounded-full text-blue-800 bg-white shadow-inner font-bold">
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

      {/* Section ITE Principale */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-12">
            L'Isolation Thermique par l'Extérieur (ITE) : Votre Solution
            Complète
          </h2>

          {/* Sous-section: Pourquoi choisir 360 conseil pour votre ITE ? */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <img
                  src="https://www.papierpeintpanoramique.fr/media/catalog/product/w/0/w04166-square.jpg"
                  alt="Mur Ancien"
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
                <img
                  src="https://m.media-amazon.com/images/I/51Rw6DqLpjS._AC_UF350,350_QL80_.jpg"
                  alt="Pose Isolant"
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
                <img
                  src="https://media.adeo.com/media/3417543/media.jpg?width=650&height=650&format=jpg&quality=80&fit=bounds"
                  alt="Façade Neuve"
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Pourquoi 360 conseil est votre partenaire ITE idéal ?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  L'Isolation Thermique par l'Extérieur (ITE) est bien plus
                  qu'une simple rénovation. C'est une métamorphose énergétique
                  pour votre habitation ! En créant une enveloppe isolante
                  autour de vos murs, nous éliminons les ponts thermiques,
                  boostant ainsi drastiquement la performance énergétique de
                  votre foyer. Résultat : des factures allégées, un confort
                  thermique optimal en toute saison, adieu l'humidité, et une
                  plus-value durable pour votre propriété.
                  <br />
                  <br />
                  Chez 360 conseil, nous sommes à vos côtés à chaque étape : de
                  l'étude personnalisée à la réalisation impeccable, sans
                  oublier l'accompagnement pour maximiser vos aides et
                  subventions.
                </p>
              </div>
            </div>
          </div>

          {/* Sous-section: Pourquoi choisir l'ITE sous enduit ? */}
          <div className="bg-blue-100 rounded-xl shadow-lg p-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="https://placehold.co/500x350/C0C0C0/333333?text=Interieur+Confortable" // Image of family
                  alt="Famille profitant du confort à la maison"
                  className="rounded-xl shadow-md w-full max-w-md h-auto object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ITE sous enduit : L'alliance parfaite de l'efficacité et de
                  l'esthétique
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  L'ITE sous enduit est notre technique phare, reconnue pour sa
                  polyvalence et son efficacité. Elle consiste à fixer l'isolant
                  directement sur votre façade existante, puis à le recouvrir
                  d'un enduit de finition. Cette approche géniale préserve
                  l'intégralité de votre espace intérieur, vous évite les tracas
                  des travaux "chez vous", et offre une liberté esthétique
                  incroyable pour rajeunir l'apparence de votre maison.
                  <br />
                  <br />
                  Idéale pour les maisons individuelles comme pour les
                  copropriétés, elle garantit une étanchéité irréprochable et
                  une résistance à toute épreuve face aux intempéries. C'est un
                  investissement intelligent qui combine performance énergétique
                  et revalorisation esthétique, avec un retour sur
                  investissement rapide grâce aux économies générées.
                </p>
              </div>
            </div>
          </div>

          {/* Sous-section: ITE sous enduit (grand image et texte) */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              ITE sous enduit : La solution qui sublime votre façade et vos
              performances
            </h3>
            <img
              src="https://placehold.co/900x450/A9A9A9/FFFFFF?text=Facade+Transformee" // Large image of house with ITE
              alt="Maison avec ITE sous enduit"
              className="rounded-xl shadow-md mb-8 w-full h-auto object-cover"
            />
            <p className="text-gray-600 leading-relaxed mb-6">
              L'application d'un système d'isolation thermique par l'extérieur
              sous enduit est un art que nous maîtrisons. Ce processus minutieux
              assure une performance énergétique optimale et une finition d'une
              perfection rare. Nos experts installent les panneaux isolants avec
              une précision chirurgicale, puis appliquent les couches d'enduit
              successives pour créer une enveloppe à la fois protectrice et
              d'une esthétique irréprochable. Non seulement cela élimine les
              ponts thermiques, mais cela offre également une cure de jouvence à
              votre façade.
              <br />
              <br />
              Avec l'ITE sous enduit, votre maison bénéficie d'une isolation
              thermique de pointe, d'un confort acoustique amélioré, et d'une
              résistance accrue aux caprices de la météo. C'est une rénovation
              complète qui démultiplie la valeur et la longévité de votre bien.
            </p>
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Demandez votre étude gratuite{" "}
              <ArrowRight size={20} className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Section "L'ADN unique de 360 conseil" */}
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

export default IsolationThermiqueEx;
