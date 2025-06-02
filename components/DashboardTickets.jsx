import React, { useEffect, useState } from "react";

export default function DashboardTickets({ tickets }) {
  const [abiertos, setAbiertos] = useState(0);
  const [enProceso, setEnProceso] = useState(0);
  const [cerrados, setCerrados] = useState(0);

  useEffect(() => {
    setAbiertos(tickets.filter(t => t.estado === "Abierto").length);
    setEnProceso(tickets.filter(t => t.estado === "En progreso").length);
    setCerrados(tickets.filter(t => t.estado === "Cerrado").length);
  }, [tickets]);

  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 8px #0001",
      padding: 24,
      marginBottom: 24,
      textAlign: "center"
    }}>
      <h3 style={{ color: "#1a237e", marginBottom: 16 }}>Dashboard</h3>
      <div style={{ marginBottom: 8 }}>Abiertos: <b>{abiertos}</b></div>
      <div style={{ marginBottom: 8 }}>En proceso: <b>{enProceso}</b></div>
      <div>Cerrados: <b>{cerrados}</b></div>
    </div>
  );
}