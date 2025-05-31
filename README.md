# Mapa de Capacidades - Banco Pichincha

**Nombre:** Gissela Stefania Villacis  
**Materia:** Desarrollo de aplicaciones Nat en Cloud  
**Bimestre:** 1  
**Fecha:** 30 de mayo 2025  
**Empresa seleccionada:** Banco Pichincha  

---

## Descripción de la empresa

Banco Pichincha, fundado en 1906 en Quito, es una de las principales instituciones financieras de Ecuador, ofreciendo una amplia gama de servicios que incluyen cuentas bancarias, créditos personales e hipotecarios, tarjetas de crédito y opciones de inversión. Con una extensa red de sucursales y cajeros automáticos a nivel nacional e internacional, el banco también se destaca por su compromiso con la responsabilidad social y el desarrollo sostenible, participando en iniciativas comunitarias y enfocándose en la innovación tecnológica para mejorar la experiencia del cliente a través de soluciones digitales avanzadas.

---

## Mapa de capacidades

### Capacidades estratégicas
- **Gestión de Innovación**
  - Implementación de IA
  - Cultura de Innovación
- **Desarrollo de servicios**
  - Nuevos servicios digitales
  - Alineación estratégica
- **Estrategia de mejora continua**
  - Procesos de revisión
  - Análisis de Datos

### Capacidades operativas
- **Identificación del incidente**
  - Canales de reporte
  - Clasificación inicial
- **Registro del incidente**
  - Documentación detallada
  - Número de seguimiento
- **Clasificación y priorización**
  - Evaluación de impacto
  - Asignación de Prioridad
- **Diagnóstico inicial**
  - Análisis preliminar
  - Determinación de escalamiento
- **Escalamiento**
  - Escalamiento a soporte superior
  - Involucrar a especialistas
- **Resolución de incidentes**
  - Implementación de soluciones
  - Pruebas de resolución
- **Cierre del incidente**
  - Confirmación del usuario
  - Documentación de la resolución
- **Mejora continua**
  - Análisis de incidentes resueltos
  - Implementación de cambios

### Capacidades de soporte
- **Gestión del conocimiento**
  - Base de conocimientos
  - Acceso a la información
- **Gestión de Configuración**
  - Registro de activos de TI
  - Disponibilidad de la información
- **Gestión de capacidad**
  - Planificación de recursos
- **Gestión de Disponibilidad**
  - Disponibilidad de servicios
  - Reducir tiempos de inactividad
- **Gestión de seguridad**
  - Protección de servicios
  - Políticas de seguridad
- **Gestión de proveedores**
  - Coordinación con proveedores
  - Cumplimiento de SLAs
- **Gestión de calidad**
  - Control de calidad
  - Auditorias y revisiones
- **Gestión de la continuidad del negocio**
  - Planes de continuidad
  - Pruebas de continuidad
- **Gestión de formación**
  - Capacitación del personal
  - Evaluación de competencias

---

## Información de la aplicación objetivo

Esta aplicación web muestra el mapa de capacidades del Banco Pichincha, permitiendo visualizar de manera estructurada las capacidades estratégicas, operativas y de soporte de la organización. El acceso está protegido mediante autenticación con Google.

---

## Uso e instalación de la aplicación

### Visualización en línea

Puedes acceder a la aplicación publicada en GitHub Pages en la siguiente URL:  
[https://gsvillacis.github.io/TareaCloudBim1/](https://gsvillacis.github.io/TareaCloudBim1/)

Solo necesitas un navegador web moderno y una cuenta de Google para iniciar sesión y visualizar el mapa de capacidades.

---

### Instalación y ejecución local

Si deseas ejecutar la aplicación en tu propio equipo para desarrollo o pruebas, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/gsvillacis/TareaCloudBim1.git
   cd TareaCloudBim1
   ```

2. **Instala las dependencias del proyecto:**  
   Asegúrate de tener [Node.js](https://nodejs.org/) y npm instalados.
   ```bash
   npm install
   ```

3. **Ejecuta la aplicación en modo desarrollo:**  
   Esto iniciará un servidor local y abrirá la aplicación en tu navegador.
   ```bash
   npm start
   ```
   Por defecto, la aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

4. **Autenticación:**  
   Al abrir la aplicación, deberás iniciar sesión con tu cuenta de Google.  
   Si tienes problemas con el inicio de sesión:
   - Verifica que la URL de redirección (`http://localhost:3000`) esté registrada en Google Cloud Console.
   - Asegúrate de que el Client ID de Google en el código sea el correcto.
   - Prueba limpiar la caché del navegador o usar modo incógnito.

---

### Personalización y despliegue

- Para modificar el contenido del mapa de capacidades o la autenticación, edita el archivo `src/App.jsx`.
- Si deseas desplegar tu propia versión en GitHub Pages:
  1. Realiza tus cambios y haz commit.
  2. Ejecuta:
     ```bash
     npm run build
     ```
  3. Publica la carpeta `build` usando la configuración de GitHub Pages (puedes usar el paquete `gh-pages` para automatizar el despliegue).

---

**Requisitos:**
- Node.js 16+ y npm
- Navegador web moderno
- Cuenta de Google para autenticación

---

**Soporte:**  
Si tienes dudas o problemas, revisa la configuración de autenticación en Google Cloud Console o consulta el archivo `src/App.jsx` para ajustar el Client ID.