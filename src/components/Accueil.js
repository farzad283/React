import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
    const [activeLink, setActiveLink] = useState(false)
    
  return (
    <div className="row mt-5">
      <div className="col-12">
        <div class="card">
            <div class="card-header text-center">
                <h2>TP2 - React</h2>
                <h4>Mohammadreza Habibzadeh - 2296191</h4>
            </div>
            <div class="card-body">
                <div class="row mb-3">  
                        <img src="https://plus.unsplash.com/premium_photo-1684262432399-88ffab280f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80"></img>                  
                </div>
            </div>           
            <div class="card-header text-center">
                <p>Félicitations, vous avez reçu un mandat pour créer un site monopage (SPA) pour un site e-commerce. La première partie de ce projet consiste à insérer, mettre à jour, supprimer et répertorier les produits. Le client n'a pas de base de données, donc pour tester ce projet, vous utiliserez un objet JSON dans 2 scénarios différents.</p>
                <p>Le premier scénario vous permettra de gérer tous les produits comme une variable côté client. Le deuxième scénario consiste à utiliser un serveur JSON pour tester le REST avec un serveur externe (simulé).
                Les informations sur le produit qui doivent être enregistrées sont :
                • Le nom, la description, le prix et la catégorie.</p>
                <p>Une fois enregistré, le produit doit apparaître en bas de page avec un bouton pour le mettre à jour et un bouton pour le supprimer. Toutes les opérations doivent être exécutés sans recharger la page (Requête HTTP).</p>
                <p>Le client vous a demandé de créer une page de présentation de l'entreprise. Cette page doit être accessible depuis un menu de navigation et/ou directement depuis le navigateur web avec le nom de la page (route).
                Votre projet doit répondre aux critères suivants.
                • Créer un projet React.js CLI
                • Un menu de navigation entre les pages (Accueil / produits)
                • Pour la conception (CSS), vous pouvez utiliser le framework bootstrap (vanilla, aucun modèle autorisé) ou développer votre propre css.</p>
                <p>Deux Livraisons :
                • Premier scénario - Créez une version de production avec le premier scénario et la publiez sur WebDev.</p>
                <p>Deuxième scénario - Maintenez le même projet et les mêmes fonctionnalités mais maintenant vous allez le tester avec un serveur JSON (simulé), cette dernière version doit être publiée sur GitHub. Enregistrez une courte vidéo de votre écran (max 3 min) avec le projet en cours d'exécution sur votre environnement local. Présentez toutes les pages et fonctions au fur et à mesure que le côté serveur change. Envoyez la vidéo avec le projet</p>
                <p>Déposez votre projet (documentation au format PDF avec lien github et webdev.) sur Lea - Onmivox.
                La documentation doit comprendre une brève description de votre projet, une page de garde, toutes les lignes de commande permettant d'installer les bibliothèques nécessaires, instruction d’installation et d’utilisation du projet et les liens WebDev, GitHub et la vidéo.
                L'absence de ces informations dans la documentation sera considérée comme un projet non conclu avec une note finale diminuée de 5 points sur 25</p>
                <div class="ccard-header text-center">
                    <button type="button" className="btn btn-primary">
                        <Link
                            to="/produits"
                            className={`nav-link`}
                        >
                            Allez-y
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Accueil;