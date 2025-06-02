import { useState } from "react";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);

  const handleAddTicket = (ticket) => {
    setTickets([ticket, ...tickets]);
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <TicketForm onAddTicket={handleAddTicket} />
      <TicketList tickets={tickets} />
    </div>
  );
}