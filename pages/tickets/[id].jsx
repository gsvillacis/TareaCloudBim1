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

    if (form.estado === "Cerrado") {
      window.alert("El ticket se encuentra cerrado");
      router.replace("/tickets?view=revision");
      return;
    }
    if (form.estado === "En progreso") {
      window.alert("El ticket se encuentra en proceso");
      router.replace("/tickets?view=revision");
      return;
    }
  };

  if (!ticket) {
    return <div style={{ padding: 24 }}>Cargando ticket...</div>;
  }

  const sectionStyle = {
    background: "#f5f7fa",
    border: "2px solid #1a237e",
    borderRadius: 14,
    marginBottom: 32,
    padding: 28,
    position: "relative",
  };

  const legendStyle = {
    position: "absolute",
    top: -24,
    left: 24,
    background: "#1a237e",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.5rem",
    padding: "4px 28px",
    borderRadius: 10,
    letterSpacing: 1,
    boxShadow: "0 2px 8px #1a237e33",
  };

  const labelStyle = { fontWeight: "bold", color: "#1a237e", marginBottom: 4, fontSize: "1.1rem" };
  const inputStyle = {
    width: "100%",
    marginTop: 4,
    marginBottom: 18,
    padding: 12,
    borderRadius: 8,
    border: "1px solid #bdbdbd",
    fontSize: "1rem",
    background: "#fff",
    color: "#1a237e"
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: "2rem auto",
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 16px #0002",
      padding: 32,
      position: "relative",
      minHeight: 600
    }}>
      <h2 style={{ color: "#1a237e", fontWeight: "bold", marginBottom: 32 }}>
        Atención del ticket {ticket.id}
      </h2>
      {isEdit ? (
        <>
          <form style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Información del registrante */}
            <div style={sectionStyle}>
              <div style={legendStyle}>Información del registrante</div>
              <label style={labelStyle}>Registrado por:
                <input
                  name="registradoPor"
                  value={form.registradoPor || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>Fecha y hora de registro:
                <input
                  name="fechaRegistro"
                  value={form.fechaRegistro || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>Número de contacto:
                <input
                  name="numeroContacto"
                  value={form.numeroContacto || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
            </div>

            {/* Detalles del Ticket */}
            <div style={sectionStyle}>
              <div style={legendStyle}>Detalles del Ticket</div>
              <label style={labelStyle}>Componente afectado:
                <input
                  name="componente"
                  value={form.componente || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>Tipo de componente:
                <input
                  name="tipo"
                  value={form.tipo || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>Prioridad:
                <input
                  name="prioridad"
                  value={form.prioridad || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>Grupo resolutor:
                <input
                  name="grupoResolutor"
                  value={form.grupoResolutor || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>Técnico asignado:
                <input
                  name="tecnicoAsignado"
                  value={form.tecnicoAsignado || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>Descripción del error:
                <input
                  name="descripcion"
                  value={form.descripcion || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
            </div>

            {/* Información de solución */}
            <div style={sectionStyle}>
              <div style={legendStyle}>Información de solución</div>
              <label style={labelStyle}>Acciones de recuperación:
                <input
                  name="accionesRecuperacion"
                  value={form.accionesRecuperacion || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>Fecha y hora de solución:
                <input
                  name="fechaSolucion"
                  value={form.fechaSolucion || ""}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>Estado:
                <select
                  name="estado"
                  value={form.estado || ""}
                  onChange={handleChange}
                  style={{ ...inputStyle, background: "#fff" }}
                >
                  <option value="">Seleccione estado</option>
                  <option value="Abierto">Abierto</option>
                  <option value="En progreso">En progreso</option>
                  <option value="Cerrado">Cerrado</option>
                </select>
              </label>
            </div>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 48
            }}
          >
            <button
              onClick={() => router.replace("/tickets?view=revision")}
              style={{
                padding: "10px 28px",
                borderRadius: 8,
                background: "#bdbdbd",
                color: "#1a237e",
                border: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                boxShadow: "0 2px 8px #bdbdbd33"
              }}
            >
              Volver
            </button>
            <button
              type="button"
              onClick={handleSave}
              style={{
                padding: "10px 28px",
                borderRadius: 8,
                background: "#1a237e",
                color: "#fff",
                border: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                boxShadow: "0 2px 8px #1a237e33"
              }}
            >
              Guardar
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Información del registrante */}
          <div style={sectionStyle}>
            <div style={legendStyle}>Información del registrante</div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Registrado por:</span> {ticket.registradoPor}
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Fecha y hora de registro:</span> {ticket.fechaRegistro}
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Número de contacto:</span> {ticket.numeroContacto}
            </div>
          </div>
          {/* Detalles del Ticket */}
          <div style={sectionStyle}>
            <div style={legendStyle}>Detalles del Ticket</div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Componente afectado:</span> {ticket.componente}
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Tipo de componente:</span> {ticket.tipo}
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Prioridad:</span> {ticket.prioridad}
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Grupo resolutor:</span> {ticket.grupoResolutor}
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Técnico asignado:</span> {ticket.tecnicoAsignado}
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Descripción del error:</span> {ticket.descripcion}
            </div>
          </div>
          {/* Información de solución */}
          <div style={sectionStyle}>
            <div style={legendStyle}>Información de solución</div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Acciones de recuperación:</span> {ticket.accionesRecuperacion}
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Fecha y hora de solución:</span> {ticket.fechaSolucion}
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={labelStyle}>Estado:</span> {ticket.estado}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 48
            }}
          >
            <button
              onClick={() => router.replace("/tickets?view=revision")}
              style={{
                padding: "10px 28px",
                borderRadius: 8,
                background: "#bdbdbd",
                color: "#1a237e",
                border: "none",
                fontWeight: "bold",
                fontSize: "1rem",
                boxShadow: "0 2px 8px #bdbdbd33"
              }}
            >
              Volver
            </button>
            {!isEdit && (
              <button
                onClick={() => setIsEdit(true)}
                style={{
                  padding: "10px 28px",
                  borderRadius: 8,
                  background: "#ffd600",
                  color: "#1a237e",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  boxShadow: "0 2px 8px #ffd60088"
                }}
              >
                Atender ticket
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}