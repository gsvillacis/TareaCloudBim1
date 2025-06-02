import { useState, useEffect } from "react";
import styles from "../styles/TicketForm.module.css";

const tipoOpciones = [
  { value: "aplicacion", label: "Aplicación" },
  { value: "infraestructura", label: "Infraestructura" },
  { value: "networking", label: "Networking" },
];

const estadoOpciones = [
  { value: "Abierto", label: "Abierto" },
  { value: "En proceso", label: "En proceso" },
  { value: "Resuelto", label: "Resuelto" },
];

const prioridadOpciones = [
  { value: "P1", label: "P1" },
  { value: "P2", label: "P2" },
  { value: "P3", label: "P3" },
  { value: "P4", label: "P4" },
];

export default function TicketForm({ onAddTicket, ticketCount }) {
  const [form, setForm] = useState({
    registradoPor: "",
    fechaRegistro: "",
    numeroContacto: "",
    componente: "",
    tipo: "",
    prioridad: "",
    descripcion: "",
    grupoResolutor: "",
    tecnicoAsignado: "",
    accionesRecuperacion: "",
    fechaSolucion: "",
    estado: "Abierto",
  });

  // Actualiza la fecha de registro automáticamente al cargar el formulario
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      fechaRegistro: new Date().toLocaleString(),
    }));
  }, [ticketCount]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `INC${String(ticketCount + 1).padStart(4, "0")}`;
    const fechaRegistro = form.fechaRegistro || new Date().toLocaleString();
    onAddTicket({ ...form, id, fechaRegistro });
    setForm({
      registradoPor: "",
      fechaRegistro: new Date().toLocaleString(),
      numeroContacto: "",
      componente: "",
      tipo: "",
      prioridad: "",
      descripcion: "",
      grupoResolutor: "",
      tecnicoAsignado: "",
      accionesRecuperacion: "",
      fechaSolucion: "",
      estado: "Abierto",
    });
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <h2>Registrar Ticket de Incidente</h2>

      {/* 1. Información del registrante */}
      <fieldset className={styles.seccion}>
        <legend>Información del registrante</legend>
        <label>
          Registrado por:
          <input name="registradoPor" value={form.registradoPor} onChange={handleChange} required />
        </label>
        <label>
          Fecha y hora de registro:
          <input name="fechaRegistro" value={form.fechaRegistro} readOnly />
        </label>
        <label>
          Número de contacto:
          <input name="numeroContacto" value={form.numeroContacto} onChange={handleChange} required />
        </label>
      </fieldset>

      {/* 2. Detalles del Ticket */}
      <fieldset className={styles.seccion}>
        <legend>Detalles del Ticket</legend>
        <label>
          ID:
          <input name="id" value={`INC${String(ticketCount + 1).padStart(4, "0")}`} readOnly />
        </label>
        <label>
          Componente afectado:
          <input name="componente" value={form.componente} onChange={handleChange} required />
        </label>
        <label>
          Tipo de componente afectado:
          <select name="tipo" value={form.tipo} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            {tipoOpciones.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </label>
        <label>
          Prioridad de Atención:
          <select name="prioridad" value={form.prioridad} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            {prioridadOpciones.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </label>
        <label>
          Descripción del error:
          <textarea name="descripcion" value={form.descripcion} onChange={handleChange} required />
        </label>
      </fieldset>

      {/* 3. Información de Solución */}
      <fieldset className={styles.seccion}>
        <legend>Información de Solución</legend>
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
          <textarea name="accionesRecuperacion" value={form.accionesRecuperacion} onChange={handleChange} />
        </label>
        <label>
          Fecha y hora de solución:
          <input name="fechaSolucion" value={form.fechaSolucion} onChange={handleChange} type="datetime-local" />
        </label>
        <label>
          Estado:
          <select name="estado" value={form.estado} onChange={handleChange} required>
            {estadoOpciones.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </label>
      </fieldset>

      <button type="submit">Registrar Ticket</button>
    </form>
  );
}