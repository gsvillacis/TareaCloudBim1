import styles from "../styles/TicketList.module.css";

export default function TicketList({ tickets }) {
  if (tickets.length === 0) return <div className={styles.vacio}>No hay tickets registrados.</div>;

  return (
    <div className={styles.lista}>
      <h2>Tickets Registrados</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha/Hora</th>
            <th>Componente</th>
            <th>Tipo</th>
            <th>Registrado por</th>
            <th>Grupo Resolutor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.fechaHora}</td>
              <td>{ticket.componente}</td>
              <td>{ticket.tipo}</td>
              <td>{ticket.registradoPor}</td>
              <td>{ticket.grupoResolutor}</td>
              <td>{ticket.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}