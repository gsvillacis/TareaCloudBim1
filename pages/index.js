import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const CLIENT_ID = "940558538466-o825padcb3kqimqv2f1r0cslkn822dh4.apps.googleusercontent.com";

// Función para decodificar el JWT sin librerías externas
function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export default function Home() {
  const [user, setUser] = useState(null);
  const loginDiv = useRef(null);
  const [visitas, setVisitas] = useState(0);
  const router = useRouter();

  useEffect(() => {
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
            const userObject = parseJwt(response.credential);
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

  useEffect(() => {
    if (user) {
      router.push("/menu");
    }
  }, [user, router]);

  return (
    <div>
      {!user ? (
        <div className={styles.loginBackground}>
          <h1 className={styles.centeredTitle}>
            Mapa de capacidades para la gestión de incidentes de Banco Pichincha
          </h1>
          <div ref={loginDiv}></div>
        </div>
      ) : null}
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