import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import MapaCapacidades from "../components/MapaCapacidades"; // <-- Importa el nuevo componente

// ...resto del código...

return (
  <div>
    {!user ? (
      <div className={styles.loginBackground}>
        <h1 className={styles.centeredTitle}>
          Mapa de capacidades para la gestión de incidentes de Banco Pichincha
        </h1>
        <div ref={loginDiv}></div>
      </div>
    ) : (
      <MapaCapacidades />
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