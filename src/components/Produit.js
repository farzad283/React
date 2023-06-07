import React from 'react';
import { Link } from "react-router-dom";

const Produit = ({ id, thumbnail, nom, description, prix, catégorie, deleteProduit, editProduit }) => {
  return (
    <div className="col mb-4">
      <div className="card h-100 shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          src={thumbnail}
          alt="Thumbnail"
          style={{ width: '100%', height: '225px' }}
        />

        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${prix}
          </h1>
          <h4 className="my-0 fw-normal">
            {nom ?? ''}
          </h4>
          <p>{description ?? ''}</p>
          <h4>{catégorie}</h4>
        </div>

        <div className="card-footer">
            <div className="d-flex justify-content-center gap-4">
                <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteProduit(id)}>
                Supprimer
                </button>
                <button type="button" className="btn btn-primary">
                <Link
                    to={`/modifier-produit/${id}`}
                    type="button"
                    className="text-white text-decoration-none"
                >Modifier</Link>
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produit;
