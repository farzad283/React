import Produit from "./Produit";
import { Link } from "react-router-dom";

const ListeProduits = ({listes, deleteProduit}) => {

    return (
        <div className="container my-5">
          <Link to="/ajouter-produit"
            type="button"
            className="btn btn-success text-white action-icon mb-5"
          >Ajouter Produit</Link>

          <section className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {listes.map((liste) => (
              <Produit key={liste.id} {...liste} deleteProduit={deleteProduit}  />
            ))}
          </section>
        </div>
      );
    };
    
    export default ListeProduits;