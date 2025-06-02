import { useEffect, useState } from "react";

export default function TicketsRevision() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tickets") || "[]");
    setTickets(data);
  }, []);

  return (
    <div style={{ maxWidth: 1200, margin: "2rem auto" }}>
      <h2 style={{ color: "#1a237e", fontWeight: "bold", marginBottom: 32 }}>
        Tickets Registrados
      </h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ background: "#e8eaf6" }}>
          <tr>
            <th>ID</th>
            <th>Fecha/Hora</th>
            <th>Componente</th>
            <th>Tipo</th>
            <th>Registrado por</th>
            <th>Grupo Resolutor</th>
            <th>Descripción</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.fechaRegistro}</td>
              <td>{ticket.componente}</td>
              <td>{ticket.tipo}</td>
              <td>{ticket.registradoPor}</td>
              <td>{ticket.grupoResolutor}</td>
              <td>{ticket.descripcion}</td>
              <td>{ticket.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}