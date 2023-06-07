import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from "./components/Accueil";
import Header from './components/Header';
import Footer from './components/Footer';
import ListeProduits from './components/ListeProduits';
import Creer from './components/Creer';
import { produits } from "./Data";

function App() {

  const [listes, setListes] = useState(produits);
  console.log(produits);
  console.log(listes);

  const deleteProduit = (id) => {
    const nouvelleListes = listes.filter((produit) => produit.id !== id);
    setListes(nouvelleListes);
  };

  const creerProduit = (produit) => {
    setListes([produit, ...listes]);
  };

  const modifierProduit = (produit) => {
    const nouvelleListe = listes.map(item => {
      if (produit.id == item.id) return produit
      return item
    })
    setListes(nouvelleListe);
  };


  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route
            path="/ajouter-produit"
            element={
              <Creer onAdd={creerProduit} />
            }
          />
          <Route
            path="/modifier-produit/:id"
            element={
              <Creer onAdd={creerProduit} onModifier={modifierProduit} listes={listes} />
            }
          />
          <Route
            path="/produits"
            element={
              <ListeProduits listes={listes} deleteProduit={deleteProduit} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
