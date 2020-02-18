import React, { useState, useEffect } from "react";
import '../styles/Header.scss';
import HeaderName from './HeaderName';

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
            <HeaderName/>
          </section>
        </header>
      </div>
  );
}

export default Header;
