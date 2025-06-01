import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import jwt_decode from "jwt-decode";

const CLIENT_ID = "940558538466-o825padcb3kqimqv2f1r0cslkn822dh4.apps.googleusercontent.com"; // Reemplaza con tu Client ID de Google

export default function Home() {
  const [user, setUser] = useState(null);
  const loginDiv = useRef(null);
  const [visitas, setVisitas] = useState(0);

  useEffect(() => {
    // Cargar el script de Google Identity Services
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google && loginDiv.current) {
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: (response) => {
            // Asegúrate de que jwt_decode es una función
            const userObject = jwt_decode(response.credential);
            setUser(userObject);
          },
        });
        window.google.accounts.id.renderButton(loginDiv.current, {
          theme: "outline",
          size: "large",
        });
      }
    };

    setVisitas((v) => v + 1);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {!user ? (
        <div className="login-container">
          <h1>Mapa de capacidades de Banco Pichincha</h1>
          <h2>Iniciar sesión con Google</h2>
          <div ref={loginDiv}></div>
        </div>
      ) : (
        <div>
          <Header user={user} />
          <hr />
          <h1>
            Mapa de capacidades Gestión de Incidentes Tecnológicos de Banco Pichincha
          </h1>
          {/* Aquí va el resto de tu contenido */}
        </div>
      )}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#18344a",
          color: "#fff",
          padding: "16px 24px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px #0005",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        Número de visitas: {visitas}
      </div>
    </div>
  );
}