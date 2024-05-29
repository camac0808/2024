import React from "react";
import Logo from "/investment-calculator-logo.png";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <h1 className="title">Investment Calculator</h1>

      <style jsx="true">{style}</style>
    </header>
  );
}

export const style = `
header {
  text-align: center;
  margin: 3rem auto;

  img {
    width: 5rem;
    height: 5rem
    object-fit: contain;
    background-color: transparent;
  }

  h1 {
    color: white;
    font-size: 1.5rem;
  }
}

`;
