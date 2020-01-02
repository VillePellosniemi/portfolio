import React, { useState, useEffect } from "react";
import '../styles/Header.scss';

function Header() {
  const [offset, setOffset] = useState(0);

  const listener = e => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return (
      <div className="App">
        <header
            className="header-background"
            style={{ backgroundPositionY: offset }}
        >
          <section className="info-container" style={{ bottom: offset / 2 }}>
            <h1 id="name">Ville Pellosniemi</h1>
            <h3 id="title">FRONT END DEVELOPER</h3>
          </section>
        </header>
      </div>
  );
}

export default Header;
