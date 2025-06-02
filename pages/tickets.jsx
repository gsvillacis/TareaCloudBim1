import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import DashboardTickets from "../components/DashboardTickets";

export default function TicketsPage() {
  const router = useRouter();
  const [tickets, setTickets] = useState([]);
  const [view, setView] = useState("registro");
  const [successMsg, setSuccessMsg] = useState("");
  const [filtroEstado, setFiltroEstado] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const queryView = router.query.view;
      if (queryView === "revision" || queryView === "registro") {
        setView(queryView);
      }
      // Permite filtrar por estado desde la URL si lo deseas
      if (router.query.estado) {
        setFiltroEstado(router.query.estado);
        setView("revision");
      }
    }
  }, [router.isReady, router.query.view, router.query.estado]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("tickets");
      if (stored) setTickets(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tickets", JSON.stringify(tickets));
    }
  }, [tickets]);

  const handleAddTicket = (ticket) => {
    setTickets([ticket, ...tickets]);
    setSuccessMsg(`Su ticket ha sido registrado exitosamente con el ID: ${ticket.id}`);
    window.scrollTo(0, 0);
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  const handleSetView = (newView) => {
    setView(newView);
    setFiltroEstado(null);
    router.replace(`/tickets?view=${newView}`);
  };

  // Nuevo: manejar clic en dashboard
  const handleSelectEstado = (estado) => {
    setView("revision");
    setFiltroEstado(estado);
    router.replace(`/tickets?view=revision&estado=${encodeURIComponent(estado)}`);
  };

  // Filtra los tickets si hay filtro de estado
  const ticketsFiltrados = filtroEstado
    ? tickets.filter(t => t.estado === filtroEstado)
    : tickets;

  return (
    <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <nav style={{
        width: 220,
        background: "#f5f7fa",
        borderRadius: 12,
        boxShadow: "0 2px 12px #0001",
        padding: "2rem 1rem",
        marginRight: 32,
        height: "fit-content"
      }}>
        <DashboardTickets onSelectEstado={handleSelectEstado} />
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: 24 }}>
            <button
              onClick={() => handleSetView("registro")}
              style={{
                background: view === "registro" ? "#1a237e" : "#fff",
                color: view === "registro" ? "#fff" : "#1a237e",
                border: "none",
                borderRadius: 6,
                padding: "12px 20px",
                width: "100%",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: view === "registro" ? "0 2px 8px #1a237e33" : "none"
              }}
            >
              Registro de tickets
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSetView("revision")}
              style={{
                background: view === "revision" && !filtroEstado ? "#1a237e" : "#fff",
                color: view === "revision" && !filtroEstado ? "#fff" : "#1a237e",
                border: "none",
                borderRadius: 6,
                padding: "12px 20px",
                width: "100%",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: view === "revision" && !filtroEstado ? "0 2px 8px #1a237e33" : "none"
              }}
            >
              Revisión de tickets
            </button>
          </li>
        </ul>
      </nav>

      <div style={{ flex: 1, position: "relative" }}>
        {successMsg && (
          <div style={{
            position: "absolute",
            left: "50%",
            top: 30,
            transform: "translateX(-50%)",
            background: "#ffd600",
            color: "#1a237e",
            padding: "0.7rem 1.5rem",
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px #ffd60088",
            zIndex: 2000,
            textAlign: "center",
            minWidth: 240,
            maxWidth: 380,
            letterSpacing: "1px"
          }}>
            {successMsg}
          </div>
        )}
        {view === "registro" && (
          <TicketForm onAddTicket={handleAddTicket} ticketCount={tickets.length} />
        )}
        {view === "revision" && (
          <TicketList tickets={ticketsFiltrados} />
        )}
      </div>
    </div>
  );
}