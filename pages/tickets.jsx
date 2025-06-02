import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import DashboardTickets from "../components/DashboardTickets"; // <-- Importa el dashboard

export default function TicketsPage() {
  // ...todo tu código actual...

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
        <DashboardTickets tickets={tickets} /> {/* <-- Agrega el dashboard aquí */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {/* ...botones... */}
        </ul>
      </nav>
      {/* ...resto del código... */}
    </div>
  );
}