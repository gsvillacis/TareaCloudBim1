import { useState } from "react";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [view, setView] = useState("registro"); // "registro" o "revision"

  const handleAddTicket = (ticket) => {
    setTickets([ticket, ...tickets]);
  };

  return (
    <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      {/* Menú lateral */}
      <nav style={{
        width: 220,
        background: "#f5f7fa",
        borderRadius: 12,
        boxShadow: "0 2px 12px #0001",
        padding: "2rem 1rem",
        marginRight: 32,
        height: "fit-content"
      }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: 24 }}>
            <button
              onClick={() => setView("registro")}
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
              onClick={() => setView("revision")}
              style={{
                background: view === "revision" ? "#1a237e" : "#fff",
                color: view === "revision" ? "#fff" : "#1a237e",
                border: "none",
                borderRadius: 6,
                padding: "12px 20px",
                width: "100%",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: view === "revision" ? "0 2px 8px #1a237e33" : "none"
              }}
            >
              Revisión de tickets
            </button>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div style={{ flex: 1 }}>
        {view === "registro" && (
          <TicketForm onAddTicket={handleAddTicket} ticketCount={tickets.length} />
        )}
        {view === "revision" && (
          <TicketList tickets={tickets} />
        )}
      </div>
    </div>
  );
}