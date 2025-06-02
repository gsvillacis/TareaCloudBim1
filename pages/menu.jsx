import Link from "next/link";
import styles from "../styles/Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menuContainer}>
      <h1>Banco Pichincha</h1>
      <h2>Gestión de incidentes Proactiva</h2>
      <div className={styles.temasBox}>
        <h3>Temas:</h3>
        <ul>
          <li>
            <Link href="/mapa-capacidades" className={styles.link}>
              Mapa de capacidades
            </Link>
          </li>
          <li>
            <Link href="/tickets" className={styles.link}>
              Registro de tickets
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
