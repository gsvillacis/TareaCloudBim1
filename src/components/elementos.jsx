import React from "react";

// Componente Header que recibe el usuario como prop
function Header({ user }) {
  return (
    <div className="header">
      <img
        src="https://utpl.edu.ec/static/media/logoutpl.b544c876d322a97e2446.png"
        alt="utpl"
        className="header-logo"
      />
      <div className="header-info">
        <h3>Desarrollo de aplicaciones NAT en Cloud</h3>
        <h3>{user.name}</h3>
        <h3>29 de mayo de 2025</h3>
        <h3>Bim 1</h3>
      </div>
    </div>
  );
}

export default Header;

