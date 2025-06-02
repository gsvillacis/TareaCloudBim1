import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TicketDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [ticket, setTicket] = useState(null);
  const [form, setForm] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && id) {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      const found = tickets.find((t) => t.id === id);
      setTicket(found);
      setForm(found);
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    const idx = tickets.findIndex((t) => t.id === id);
    tickets[idx] = form;
    localStorage.setItem("tickets", JSON.stringify(tickets));
    setTicket(form);
    setIsEdit(false);
  };

  if (!ticket) {
    return <div style={{ padding: 24 }}>Cargando ticket...</div>;
  }

  return (
    <div style={{
      maxWidth: 600,
      margin: "2rem auto",
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 16px #0002",
      padding: 32,
      position: "relative",
      minHeight: 600
    }}>
      <h2>Monitoreo de tickets {ticket.id}</h2>
      {isEdit ? (
        <>
          <label>
            Fecha y hora:
            <input name="fechaRegistro" value={form.fechaRegistro} onChange={handleChange} />
          </label>
          <label>
            Componente afectado:
            <input name="componente" value={form.componente} onChange={handleChange} />
          </label>
          <label>
            Tipo de componente:
            <input name="tipo" value={form.tipo} onChange={handleChange} />
          </label>
          <label>
            Prioridad:
            <input name="prioridad" value={form.prioridad} onChange={handleChange} />
          </label>
          <label>
            Registrado por:
            <input name="registradoPor" value={form.registradoPor} onChange={handleChange} />
          </label>
          <label>
            Grupo resolutor:
            <input name="grupoResolutor" value={form.grupoResolutor} onChange={handleChange} />
          </label>
          <label>
            Técnico asignado:
            <input name="tecnicoAsignado" value={form.tecnicoAsignado} onChange={handleChange} />
          </label>
          <label>
            Acciones de recuperación:
            <input name="accionesRecuperacion" value={form.accionesRecuperacion} onChange={handleChange} />
          </label>
          <label>
            Fecha y hora de solución:
            <input name="fechaSolucion" value={form.fechaSolucion} onChange={handleChange} />
          </label>
          <label>
            Estado:
            <input name="estado" value={form.estado} onChange={handleChange} />
          </label>
          <label>
            Descripción del error:
            <input name="descripcion" value={form.descripcion} onChange={handleChange} />
          </label>
          <button
            onClick={handleSave}
            style={{
              marginTop: 20,
              padding: "8px 20px",
              borderRadius: 6,
              background: "#1a237e",
              color: "#fff",
              border: "none",
              position: "absolute",
              right: 32,
              bottom: 32
            }}
          >
            Guardar
          </button>
        </>
      ) : (
        <>
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
        </>
      )}

      {/* Botones inferiores */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        left: 32,
        right: 32,
        bottom: 32
      }}>
        <button
          onClick={() => router.replace("/tickets?view=revision")}
          style={{
            padding: "8px 20px",
            borderRadius: 6,
            background: "#bdbdbd",
            color: "#1a237e",
            border: "none",
            fontWeight: "bold"
          }}
        >
          Volver
        </button>
        {!isEdit && (
          <button
            onClick={() => setIsEdit(true)}
            style={{
              padding: "8px 20px",
              borderRadius: 6,
              background: "#ffd600",
              color: "#1a237e",
              border: "none",
              fontWeight: "bold"
            }}
          >
            Atender ticket
          </button>
        )}
      </div>
    </div>
  );
}