import React, { useEffect, useRef, useState } from "react";
import Header from "./components/elementos"; // Importa el componente Header

// ID de cliente de Google para autenticación
const CLIENT_ID =
  "940558538466-o825padcb3kqimqv2f1r0cslkn822dh4.apps.googleusercontent.com";

function App() {
  // Estado para guardar la información del usuario autenticado
  const [user, setUser] = useState(null);
  // Referencia al div donde se renderiza el botón de Google
  const loginDiv = useRef(null);

  // Estado para el contador de visitas
  const [visitas, setVisitas] = useState(0);

  // Efecto para cargar el script de Google Identity Services y renderizar el botón
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google && loginDiv.current) {
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: handleCredentialResponse,
        });
        window.google.accounts.id.renderButton(loginDiv.current, {
          theme: "filled_blue",
          size: "large",
          text: "sign_in_with",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
    // eslint-disable-next-line
  }, []);

  // Efecto para contar visitas usando localStorage (corregido para sumar de 1 en 1)
  useEffect(() => {
    // Solo suma 1 por visita real usando sessionStorage para evitar doble conteo en modo desarrollo
    if (!sessionStorage.getItem("visitado")) {
      let contador = localStorage.getItem("contadorVisitas");
      if (!contador) contador = 0;
      contador = parseInt(contador, 10) + 1;
      localStorage.setItem("contadorVisitas", contador);
      setVisitas(contador);
      sessionStorage.setItem("visitado", "true");
    } else {
      let contador = localStorage.getItem("contadorVisitas");
      setVisitas(contador);
    }
  }, []);

  // Función que se ejecuta cuando Google responde con las credenciales del usuario
  function handleCredentialResponse(response) {
    const data = parseJwt(response.credential);
    setUser(data);
  }

  // Función para decodificar el JWT y obtener los datos del usuario
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  return (
    <>
      {/* Estilos CSS en línea para toda la aplicación */}
      <style>{`
        body {
            background: #0d2536;
            color: #fff;
            font-family: 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .login-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .login-title-yellow {
            color: #ffe066;
            margin-bottom: 24px;
        }
        .mapa-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .mapa {
            max-width: 1100px;
            margin: 30px auto;
            padding: 20px;
            background: #112e42;
            border-radius: 18px;
            box-shadow: 0 4px 24px #0005;
        }
        .section-title {
            font-size: 1.3em;
            margin: 30px 0 10px 0;
            color: #fff;
            font-weight: bold;
            letter-spacing: 1px;
        }
        .capacidad-row {
            display: flex;
            flex-wrap: wrap;
            gap: 18px;
            margin-bottom: 18px;
            justify-content: center;
        }
        .capacidad {
            background: #18344a;
            border-radius: 12px;
            padding: 18px 20px;
            min-width: 220px;
            max-width: 270px;
            flex: 1 1 220px;
            box-shadow: 0 2px 8px #0002;
            margin-bottom: 8px;
        }
        .estrategica { background: #1b3c4b; border: 2px solid #4ecdc4; }
        .operativa { background: #1e4d4e; border: 2px solid #ffe066; }
        .soporte { background: #2d3e50; border: 2px solid #b2bec3; }
        .capacidad-title {
            font-weight: bold;
            margin-bottom: 8px;
            font-size: 1.1em;
        }
        .subcapacidad-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .subcapacidad-list li {
            background: #fff2;
            margin-bottom: 5px;
            padding: 4px 10px;
            border-radius: 6px;
            color: #fff;
            font-size: 0.97em;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0;
            margin-bottom: 12px;
        }
        .header-logo {
            height: 100px;
            margin-right: 24px;
        }
        .header-info {
            text-align: right;
        }
        hr {
            border: none;
            border-top: 2px solid #fff;
            margin: 18px 0;
        }
      `}</style>
      {/* Si el usuario NO está autenticado, muestra el login */}
      {!user ? (
        <div className="login-container">
          {/* Texto solicitado arriba del login en amarillo */}
          <h1 className="login-title-yellow">Mapa de capacidades de Banco Pichincha</h1>
          <h2>Iniciar sesión con Google</h2>
          {/* Aquí se renderiza el botón de Google */}
          <div ref={loginDiv}></div>
        </div>
      ) : (
        // Si el usuario está autenticado, muestra el mapa de capacidades
        <div className="mapa-container">
          <div
            style={{
              maxWidth: "1200px",
              margin: "32px auto",
              borderRadius: "14px",
              boxSizing: "border-box",
              padding: "24px",
              background: "#0d2536",
            }}
          >
            {/* Usa el componente Header */}
            <Header user={user} />
            <hr />
            {/* Título principal */}
            <h1>
              Mapa de capacidades Gestión de Incidentes Tecnológicos de Banco
              Pichincha
            </h1>
            {/* Contenido del mapa de capacidades */}
            <div className="mapa">
              {/* Sección de capacidades estratégicas */}
              <div className="section-title">Capacidades estratégicas</div>
              <div className="capacidad-row">
                <div className="capacidad estrategica">
                  <div className="capacidad-title">Gestión de Innovación</div>
                  <ul className="subcapacidad-list">
                    <li>Implementación de IA</li>
                    <li>Cultura de Innovación</li>
                  </ul>
                </div>
                <div className="capacidad estrategica">
                  <div className="capacidad-title">Desarrollo de servicios</div>
                  <ul className="subcapacidad-list">
                    <li>Nuevos servicios digitales</li>
                    <li>Alineación estratégica</li>
                  </ul>
                </div>
                <div className="capacidad estrategica">
                  <div className="capacidad-title">
                    Estrategia de mejora continua
                  </div>
                  <ul className="subcapacidad-list">
                    <li>Procesos de revisión</li>
                    <li>Análisis de Datos</li>
                  </ul>
                </div>
              </div>

              {/* Sección de capacidades operativas */}
              <div className="section-title">Capacidades operativas</div>
              <div className="capacidad-row">
                <div className="capacidad operativa">
                  <div className="capacidad-title">
                    1. Identificación del incidente
                  </div>
                  <ul className="subcapacidad-list">
                    <li>Canales de reporte</li>
                    <li>Clasificación inicial</li>
                  </ul>
                </div>
                <div className="capacidad operativa">
                  <div className="capacidad-title">
                    2. Registro del incidente
                  </div>
                  <ul className="subcapacidad-list">
                    <li>Documentación detallada</li>
                    <li>Número de seguimiento</li>
                  </ul>
                </div>
                <div className="capacidad operativa">
                  <div className="capacidad-title">
                    3. Clasificación y priorización
                  </div>
                  <ul className="subcapacidad-list">
                    <li>Evaluación de impacto</li>
                    <li>Asignación de Prioridad</li>
                  </ul>
                </div>
                <div className="capacidad operativa">
                  <div className="capacidad-title">4. Diagnóstico inicial</div>
                  <ul className="subcapacidad-list">
                    <li>Análisis preliminar</li>
                    <li>Determinación de escalamiento</li>
                  </ul>
                </div>
                <div className="capacidad operativa">
                  <div className="capacidad-title">5. Escalamiento</div>
                  <ul className="subcapacidad-list">
                    <li>Escalamiento a soporte superior</li>
                    <li>Involucrar a especialistas</li>
                  </ul>
                </div>
                <div className="capacidad operativa">
                  <div className="capacidad-title">
                    6. Resolución de incidentes
                  </div>
                  <ul className="subcapacidad-list">
                    <li>Implementación de soluciones</li>
                    <li>Pruebas de resolución</li>
                  </ul>
                </div>
                <div className="capacidad operativa">
                  <div className="capacidad-title">7. Cierre del incidente</div>
                  <ul className="subcapacidad-list">
                    <li>Confirmación del usuario</li>
                    <li>Documentación de la resolución</li>
                  </ul>
                </div>
                <div className="capacidad operativa">
                  <div className="capacidad-title">8. Mejora continua</div>
                  <ul className="subcapacidad-list">
                    <li>Análisis de incidentes resueltos</li>
                    <li>Implementación de cambios</li>
                  </ul>
                </div>
              </div>

              {/* Sección de capacidades de soporte */}
              <div className="section-title">Capacidades de soporte</div>
              <div className="capacidad-row">
                <div className="capacidad soporte">
                  <div className="capacidad-title">Gestión del conocimiento</div>
                  <ul className="subcapacidad-list">
                    <li>Base de conocimientos</li>
                    <li>Acceso a la información</li>
                  </ul>
                </div>
                <div className="capacidad soporte">
                  <div className="capacidad-title">
                    Gestión de Configuración
                  </div>
                  <ul className="subcapacidad-list">
                    <li>Registro de activos de TI</li>
                    <li>Disponibilidad de la información</li>
                  </ul>
                </div>
                <div className="capacidad soporte">
                  <div className="capacidad-title">Gestión de capacidad</div>
                  <ul className="subcapacidad-list">
                    <li>Planificación de recursos</li>
                  </ul>
                </div>
                <div className="capacidad soporte">
                  <div className="capacidad-title">
                    Gestión de Disponibilidad
                  </div>
                  <ul className="subcapacidad-list">
                    <li>Disponibilidad de servicios</li>
                    <li>Reducir tiempos de inactividad</li>
                  </ul>
                </div>
                <div className="capacidad soporte">
                  <div className="capacidad-title">Gestión de seguridad</div>
                  <ul className="subcapacidad-list">
                    <li>Protección de servicios</li>
                    <li>Políticas de seguridad</li>
                  </ul>
                </div>
                <div className="capacidad soporte">
                  <div className="capacidad-title">Gestión de proveedores</div>
                  <ul className="subcapacidad-list">
                    <li>Coordinación con proveedores</li>
                    <li>Cumplimiento de SLAs</li>
                  </ul>
                </div>
                <div className="capacidad soporte">
                  <div className="capacidad-title">Gestión de calidad</div>
                  <ul className="subcapacidad-list">
                    <li>Control de calidad</li>
                    <li>Auditorías y revisiones</li>
                  </ul>
                </div>
                <div className="capacidad soporte">
                  <div className="capacidad-title">
                    Gestión de la continuidad del negocio
                  </div>
                  <ul className="subcapacidad-list">
                    <li>Planes de continuidad</li>
                    <li>Pruebas de continuidad</li>
                  </ul>
                </div>
                <div className="capacidad soporte">
                  <div className="capacidad-title">Gestión de formación</div>
                  <ul className="subcapacidad-list">
                    <li>Capacitación del personal</li>
                    <li>Evaluación de competencias</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Cuadro de número de visitas */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#18344a",
          color: "#fff",
          padding: "16px 24px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px #0005",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        Número de visitas: {visitas}
      </div>
    </>
  );
}

export default App;

