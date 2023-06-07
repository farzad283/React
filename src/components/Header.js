import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState(false)
  return (
    <>
      <header class="d-flex justify-content-center py-3 bg-dark">
        <nav className="nav nav-pills">
          <Link
            to="/"
            className={`nav-link ${!activeLink ? "active" : ""}`}
            onClick={() => setActiveLink(!activeLink)}
          >
            Accueil
          </Link>
          <Link
            to="/produits"
            className={`nav-link ${activeLink ? "active" : ""}`}
            onClick={() => setActiveLink(!activeLink)}
          >
            Produits
          </Link>
          <a href="https://github.com/farzad283/React.git" target={'blank'} className={'nav-link ml-4'} >GitHub</a>
        </nav>
      </header>
    </>
  );
};

export default Header;