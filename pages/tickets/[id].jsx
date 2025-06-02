import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TicketDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && id) {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      const found = tickets.find((t) => t.id === id);
      setTicket(found);
    }
  }, [id]);

  if (!ticket) {
    return <div style={{ padding: 24 }}>Cargando ticket...</div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #0002", padding: 32 }}>
      <h2>Monitoreo de tickets {ticket.id}</h2>
      <p><b>Fecha y hora:</b> {ticket.fechaHora || ticket.fechaRegistro}</p>
      <p><b>Componente afectado:</b> {ticket.componente}</p>
      <p><b>Tipo de componente:</b> {ticket.tipo}</p>
      <p><b>Prioridad:</b> {ticket.prioridad}</p>
      <p><b>Registrado por:</b> {ticket.registradoPor}</p>
      <p><b>Grupo resolutor:</b> {ticket.grupoResolutor}</p>
      <p><b>Técnico asignado:</b> {ticket.tecnicoAsignado}</p>
      <p><b>Acciones de recuperación:</b> {ticket.accionesRecuperacion}</p>
      <p><b>Fecha y hora de solución:</b> {ticket.fechaSolucion}</p>
      <p><b>Estado:</b> {ticket.estado}</p>
      <p><b>Descripción del error:</b> {ticket.descripcion}</p>
      <button onClick={() => router.back()} style={{ marginTop: 20, padding: "8px 20px", borderRadius: 6, background: "#1a237e", color: "#fff", border: "none" }}>Volver</button>
    </div>
  );
}
