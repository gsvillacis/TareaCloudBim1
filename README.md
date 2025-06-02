# Gestión de Incidentes Proactiva  
**Autor:** Gissela Stefania Villacis Villacis  
**Empresa:** Banco Pichincha  
**Tema:** Gestión de Incidentes Proactiva

---

## Descripción de Banco Pichincha

Banco Pichincha, fundado en 1906 en Quito, es una de las principales instituciones financieras de Ecuador, conocido por su amplia gama de servicios que incluyen cuentas bancarias, créditos, tarjetas de crédito e inversiones. Con una sólida presencia nacional e internacional, el banco se destaca por su compromiso con la innovación tecnológica y la responsabilidad social, ofreciendo plataformas de banca digital que facilitan transacciones seguras y rápidas, mientras apoya iniciativas de desarrollo comunitario y sostenibilidad.

---

## Descripción de la Aplicación

Esta aplicación web permite la **gestión proactiva de incidentes** para Banco Pichincha. Los usuarios pueden registrar, revisar y dar seguimiento a tickets de incidentes, facilitando la atención y resolución eficiente de problemas tecnológicos y operativos dentro de la organización.

### Funcionalidades principales

- **Inicio de sesión con Google** para mayor seguridad.
- **Registro de tickets** de incidentes con información detallada.
- **Revisión y filtrado de tickets** por estado (Abierto, En progreso, Cerrado).
- **Dashboard** con conteo de tickets por estado.
- **Edición y cierre de tickets**.
- **Persistencia local** de los datos usando `localStorage`.
- **Interfaz amigable y responsiva**.

---

## Estructura de Archivos

```
/components
  ├── DashboardTickets.jsx      # Dashboard de conteo de tickets por estado
  ├── TicketForm.jsx           # Formulario para registrar nuevos tickets
  ├── TicketList.jsx           # Listado y revisión de tickets

/pages
  ├── index.js                 # Página de inicio y login con Google
  ├── menu.jsx                 # Menú principal de navegación
  ├── tickets.jsx              # Página principal de gestión de tickets (registro, revisión, dashboard)
  └── tickets/
        ├── [id].jsx           # Detalle y edición de un ticket específico

/styles
  └── Home.module.css          # Estilos principales de la aplicación

/README.md                     # Este archivo
/package.json                  # Dependencias y scripts del proyecto
```

---

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <URL-del-repositorio>
   cd TareaCloudBim1
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura el entorno (si es necesario):**
   - El login de Google ya está configurado con un CLIENT_ID de ejemplo.
   - Si necesitas cambiar el CLIENT_ID, edítalo en `/pages/index.js`.

4. **Inicia la aplicación:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Uso de la Aplicación

1. **Inicio de sesión:**  
   Ingresa usando tu cuenta de Google.

2. **Menú principal:**  
   Accede a las opciones de registro y revisión de tickets.

3. **Registro de tickets:**  
   Completa el formulario con los detalles del incidente. Todos los tickets nuevos se crean con estado "Abierto".

4. **Revisión de tickets:**  
   Visualiza todos los tickets registrados. Puedes filtrar por estado usando el dashboard o los botones de navegación.

5. **Detalle y edición:**  
   Haz clic en el ID de un ticket para ver su detalle, editarlo o cambiar su estado.

6. **Dashboard:**  
   Visualiza el número de tickets abiertos, en proceso y cerrados en la barra lateral izquierda.

---

## Tecnologías utilizadas

- **Next.js** (React)
- **JavaScript (ES6+)**
- **CSS Modules**
- **Google Identity Services** (para login)
- **localStorage** (persistencia local)

---

## Notas adicionales

- Los datos se almacenan en el navegador usando `localStorage`. No hay backend.
- El login requiere conexión a Internet para validar con Google.
- El diseño es responsivo y amigable para escritorio.

---

## Contacto

**Gissela Stefania Villacis Villacis**  
Proyecto académico para Banco Pichincha  
Tema: Gestión de Incidentes Proactiva
