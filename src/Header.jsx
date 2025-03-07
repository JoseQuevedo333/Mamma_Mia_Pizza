import React from "react";
import "./assets/css/Header.css";
import headerBackground from "./assets/img/Header.jpg";

function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${headerBackground})`,
      }}
      className="header_background bg-dark text-black text-center py-5"
    >
      <h1>Bienvenido a Pizzería Mamma Mia!</h1>
      <p>Las mejores pizzas hechas con amor y tradición italiana.</p>
    </header>
  );
}

export default Header;
