import styles from "../styles/MapaCapacidades.module.css";

export default function MapaCapacidades() {
  return (
    <div className={styles.mapaFondo}>
      {/* Estrategicas */}
      <div className={styles.seccion}>
        <h2 className={styles.seccionTitulo}>Capacidades estratégicas</h2>
        <div className={styles.fila}>
          <div className={styles.cajaBlanca}>
            <b className={styles.centrado}>Gestión de Innovación</b>
            <div>Implementación de IA</div>
            <div>Cultura de Innovación</div>
          </div>
          <div className={styles.cajaBlanca}>
            <b className={styles.centrado}>Desarrollo de servicios</b>
            <div>Nuevos servicios digitales</div>
            <div>Alineación estratégica</div>
          </div>
          <div className={styles.cajaBlanca}>
            <b className={styles.centrado}>Estrategia de mejora continua</b>
            <div>Procesos de revisión</div>
            <div>Análisis de Datos</div>
          </div>
        </div>
      </div>

      {/* Operativas */}
      <div className={styles.seccion}>
        <h2 className={styles.seccionTitulo}>Capacidades operativas</h2>
        <div className={styles.fila}>
          <div className={`${styles.caja} ${styles.verde}`}>
            <b>1 Identificación del incidente</b>
            <div>Canales de reporte</div>
            <div>Clasificación inicial</div>
          </div>
          <div className={`${styles.caja} ${styles.rosa}`}>
            <b>2 Registro del incidente</b>
            <div>Documentación detallada</div>
            <div>Número de seguimiento</div>
          </div>
          <div className={`${styles.caja} ${styles.celeste}`}>
            <b>3 Clasificación y priorización</b>
            <div>Evaluación de impacto</div>
            <div>Asignación de Prioridad</div>
          </div>
          <div className={`${styles.caja} ${styles.verdeClaro}`}>
            <b>4 Diagnóstico inicial</b>
            <div>Análisis preliminar</div>
            <div>Determinación de escalamiento</div>
          </div>
          <div className={`${styles.caja} ${styles.naranja}`}>
            <b>5 Escalamiento</b>
            <div>Escalamiento a soporte superior</div>
            <div>Involucrar a especialistas</div>
          </div>
          <div className={`${styles.caja} ${styles.celeste}`}>
            <b>6 Resolución de incidentes</b>
            <div>Implementación de soluciones</div>
            <div>Pruebas de resolución</div>
          </div>
          <div className={`${styles.caja} ${styles.gris}`}>
            <b>7 Cierre del incidente</b>
            <div>Confirmación del usuario</div>
            <div>Documentación de la resolución</div>
          </div>
          <div className={`${styles.caja} ${styles.verdeOscuro}`}>
            <b>8 Mejora continua</b>
            <div>Análisis de incidentes resueltos</div>
            <div>Implementación de cambios</div>
          </div>
        </div>
      </div>

      {/* Soporte */}
      <div className={styles.seccion}>
        <h2 className={styles.seccionTitulo}>Capacidades de soporte</h2>
        <div className={styles.fila}>
          <div className={styles.cajaBlanca}>
            <b>Gestión del conocimiento</b>
            <div>Base de conocimientos</div>
            <div>Acceso a la información</div>
          </div>
          <div className={styles.cajaBlanca}>
            <b>Gestión de Configuración</b>
            <div>Registro de activos de TI</div>
            <div>Disponibilidad de la información</div>
          </div>
          <div className={styles.cajaBlanca}>
            <b>Gestión de capacidad</b>
            <div>Planificación de recursos</div>
          </div>
          <div className={styles.cajaBlanca}>
            <b>Gestión de Disponibilidad</b>
            <div>Disponibilidad de servicios</div>
            <div>Reducir tiempos de inactividad</div>
          </div>
          <div className={styles.cajaBlanca}>
            <b>Gestión de seguridad</b>
            <div>Protección de servicios</div>
            <div>Políticas de seguridad</div>
          </div>
        </div>
        <div className={styles.fila}>
          <div className={styles.cajaBlanca}>
            <b>Gestión de proveedores</b>
            <div>Coordinación con proveedores</div>
            <div>Cumplimiento de SLAs</div>
          </div>
          <div className={styles.cajaBlanca}>
            <b>Gestión de calidad</b>
            <div>Control de calidad</div>
            <div>Auditorías y revisiones</div>
          </div>
          <div className={styles.cajaBlanca}>
            <b>Gestión de la continuidad del negocio</b>
            <div>Planes de continuidad</div>
            <div>Pruebas de continuidad</div>
          </div>
          <div className={styles.cajaBlanca}>
            <b>Gestión de formación</b>
            <div>Capacitación del personal</div>
            <div>Evaluación de competencias</div>
          </div>
        </div>
      </div>
    </div>
  );
}