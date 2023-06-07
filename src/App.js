import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from "./components/Accueil";
import Header from './components/Header';
import Footer from './components/Footer';
import ListeProduits from './components/ListeProduits';
import Creer from './components/Creer';
import { produits } from "./Data";

function App() {

  // const [listes, setListes] = useState(produits);
  const [listes, setListes] = useState([]);

  useEffect (()=>{
    const getProduits = async () =>{
      const produitFromServer = await fetchProduits()
      setListes(produitFromServer)
    }
    getProduits()
  },[])

  const fetchProduits = async () => {
    const res = await fetch('http://localhost:5000/produits')
    const data = await res.json()
    return data
  }

  const fetchProduit = async (id) => {
    const res = await fetch(`http://localhost:5000/produits/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }
  

  // const deleteProduit = (id) => {
  //   const nouvelleListes = listes.filter((produit) => produit.id !== id);
  //   setListes(nouvelleListes);
  // };

  const deleteProduit = async (id) => {
    await fetch(`http://localhost:5000/produits/${id}`, {
       method: "DELETE"
    });
    setListes(listes.filter((liste) => liste.id !== id));
  };


  // const creerProduit = (produit) => {
  //   setListes([produit, ...listes]);
  // };

  const creerProduit = async (data) => {
    const res = await fetch(`http://localhost:5000/produits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const nouvelleProduit = await res.json();

    setListes([nouvelleProduit, ...listes]);
  };

  // const modifierProduit = (produit) => {
  //   const nouvelleListe = listes.map(item => {
  //     if (produit.id == item.id) return produit
  //     return item
  //   })
  //   setListes(nouvelleListe);
  // };

  const modifierProduit = async (item) => {
    const id = item.id;
    const res = await fetch(`http://localhost:5000/produits/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const updatedItem= await res.json();
    console.log(updatedItem);
    setListes( listes.map(produit => produit.id == item.id? item: produit))
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
          
          {/* <Route
            path="/modifier-produit/:id"
            element={
              <Creer onAdd={creerProduit} onModifier={modifierProduit} listes={listes} />
            }
          /> */}

          <Route
            path="/modifier-produit/:id"
            element={
              <Creer
                fetchProduit={fetchProduit}
                modifierProduit={modifierProduit}
                listes={listes}
              />
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
