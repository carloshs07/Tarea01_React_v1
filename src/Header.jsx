import React from "react";
import "./Header.css"; // Ensure you create this CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Super Hero Portal</h1>
        <p>Todos los super heroes en un mismo lugar</p>
      </div>
    </header>
  );
};

export default Header;