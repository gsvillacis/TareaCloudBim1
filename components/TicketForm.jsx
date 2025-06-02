import { useState } from "react";
import styles from "../styles/TicketForm.module.css";

const tipoOpciones = [
  { value: "aplicacion", label: "Aplicación" },
  { value: "infraestructura", label: "Infraestructura" },
  { value: "networking", label: "Networking" },
];

export default function TicketForm({ onAddTicket }) {
  const [form, setForm] = useState({
    componente: "",
    source: "",
    registradoPor: "",
    tipo: "",
    grupoResolutor: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fechaHora = new Date().toLocaleString();
    const id = "TCK-" + Date.now();
    onAddTicket({ ...form, id, fechaHora });
    setForm({
      componente: "",
      source: "",
      registradoPor: "",
      tipo: "",
      grupoResolutor: "",
      descripcion: "",
    });
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <h2>Registrar Ticket de Incidente</h2>
      <label>
        Componente afectado:
        <input name="componente" value={form.componente} onChange={handleChange} required />
      </label>
      <label>
        Source:
        <input name="source" value={form.source} onChange={handleChange} required />
      </label>
      <label>
        Registrado por:
        <input name="registradoPor" value={form.registradoPor} onChange={handleChange} required />
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
        Grupo resolutor:
        <input name="grupoResolutor" value={form.grupoResolutor} onChange={handleChange} required />
      </label>
      <label>
        Descripción del error:
        <textarea name="descripcion" value={form.descripcion} onChange={handleChange} required />
      </label>
      <button type="submit">Registrar Ticket</button>
    </form>
  );
}