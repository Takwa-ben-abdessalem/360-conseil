// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importez vos composants de layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importez vos composants de page
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"; // Exemple d'une nouvelle page
import PanneauxSolaires from "./pages/PanneauxSolaires";
import IsolationThermiqueEx from "./pages/IsolationThermiqueEx";
import IsolationThermiqueInt from "./pages/IsolationThermiqueInt";
import InstallationPompeChaleur from "./pages/InstallationPompeChaleur";
// import ContactFullPage from './pages/ContactFullPage'; // Si vous faites une page contact dédiée
// import ActualitiesPage from './pages/ActualitiesPage'; // Si vous faites une page actualités dédiée

// Composant pour une page 404
const NoMatch: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-bold text-gray-800">
        404 - Page Non Trouvée
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <a href="/" className="mt-6 text-blue-600 hover:underline">
        Retour à l'accueil
      </a>{" "}
      {/* Utilisation de <a> ici pour recharger si besoin, ou <Link> de react-router-dom */}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-inter antialiased">
        <Navbar /> {/* La Navbar sera toujours visible */}
        <main className="pt-16">
          {" "}
          {/* Ajout d'un padding-top pour éviter que le contenu ne soit sous la navbar fixe */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            {/* Ajoutez ici d'autres routes pour vos pages distinctes */}
            {/* <Route path="/actualites" element={<ActualitiesPage />} /> */}
            {/* <Route path="/contact-complet" element={<ContactFullPage />} /> */}

            {/* Route 404 pour les chemins non trouvés */}
            <Route path="/panneaux-solaires" element={<PanneauxSolaires />} />
            <Route path="/ite" element={<IsolationThermiqueEx />} />
            <Route path="/pac" element={<InstallationPompeChaleur />} />
            <Route path="/iti" element={<IsolationThermiqueInt />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
        <Footer /> {/* Le Footer sera toujours visible */}
      </div>
    </Router>
  );
};

export default App;
