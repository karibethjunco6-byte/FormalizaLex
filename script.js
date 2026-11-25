// ==========================================
// 1. REQUISITOS POR RUBRO Y SEMAFORO MYPE
// ==========================================
const REQUISITOS_RESPALDO = {
  "Pesca artesanal": [
    {
      id: "PA-1",
      nombre: "Permiso de pesca de la embarcación",
      critico: true,
      glosario: "Comprueba que tienes el permiso correspondiente antes de salir a pescar. La matrícula no sustituye al permiso.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "Es la autorización oficial que te permite extraer pescado o mariscos con tu bote o lancha. Tener la matrícula de la embarcación (DICAPI) solo identifica tu bote, pero NO te da permiso para pescar.",
      pasoPractico: "Verifica que tu Resolución Directoral de permiso de pesca esté vigente y lleva una copia plastificada o digital a bordo antes de zarpar."
    },
    {
      id: "PA-2",
      nombre: "Respeto de vedas, tallas y zonas autorizadas",
      critico: true,
      glosario: "Revisa las restricciones de la especie y zona antes de cada faena.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "Hay épocas en las que está prohibido pescar ciertas especies para que se reproduzcan (vedas), tamaños mínimos que debes respetar para no llevarte crías, y zonas exclusivas donde solo pueden operar botes artesanales.",
      pasoPractico: "Antes de salir a la mar, revisa los comunicados vigentes de PRODUCE o DIREPRO sobre vedas y lleva una regla o cinta métrica a bordo para medir las tallas mínimas de tu captura."
    },
    {
      id: "PA-3",
      nombre: "Manipulación sanitaria de la captura a bordo",
      critico: true,
      glosario: "Evita contaminar o dañar el pescado durante su manipulación.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "Desde que subes el pescado al bote hasta que llegas al desembarcadero, debes mantenerlo limpio y frío para que no se malogre ni se contamine con combustible, agua sucia o el sol.",
      pasoPractico: "Usa cajas plásticas limpias (nunca madera astillada ni directo en el piso), utiliza hielo apto para alimentos y lava las superficies de trabajo con agua limpia."
    }
  ],
  "Agroindustria": [
    {
      id: "AG-1",
      nombre: "Registro sanitario del producto industrializado",
      critico: true,
      glosario: "Comprueba que el alimento industrializado sujeto a registro cuenta con el trámite correspondiente antes de venderlo.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "Si transformas o envasas un alimento (por ejemplo: mermeladas, harinas, néctares, conservas o snacks empacados), necesitas un código oficial de DIGESA que garantice que el producto es seguro para el consumidor.",
      pasoPractico: "Tramita tu Registro Sanitario en la plataforma VUCE antes de imprimir etiquetas o vender en tiendas, y coloca el código asignado en cada envase."
    },
    {
      id: "AG-2",
      nombre: "Programa de limpieza y desinfección",
      critico: true,
      glosario: "Organiza y ejecuta la limpieza del local para evitar contaminar los alimentos.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "No basta con limpiar 'al ojo'; debes tener un plan escrito que indique qué mesas, máquinas y pisos se limpian, con qué productos, cada cuánto tiempo y quién es el responsable.",
      pasoPractico: "Pega un cronograma de limpieza en tu área de producción y llena una hoja de registro diario cada vez que termines de lavar y desinfectar el local."
    },
    {
      id: "AG-3",
      nombre: "Agua apta para elaborar alimentos",
      critico: true,
      glosario: "Usa agua que cumpla los requisitos sanitarios aplicables al consumo humano.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "Toda el agua que entra en contacto con el alimento, sirve para preparar el producto o se usa para lavar envases y utensilios debe ser potable y segura, sin bacterias ni exceso de cloro o metales.",
      pasoPractico: "Si usas agua de tanque, pozo o cisterna, programa análisis periódicos de calidad de agua y mantén limpios y bien tapados tus depósitos."
    }
  ],
  "Manufactura": [
    {
      id: "MF-1",
      nombre: "Licencia municipal de funcionamiento e ITSE",
      critico: true,
      glosario: "Antes de abrir el taller o planta, verifica la licencia municipal y las condiciones de seguridad del establecimiento.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "Es el permiso de la municipalidad para que tu taller o fábrica funcione en esa dirección (zonificación) junto con el certificado de Defensa Civil (ITSE) que confirma que el local es seguro contra incendios o accidentes.",
      pasoPractico: "Verifica en tu municipalidad si la calle permite uso industrial o taller, y ten listos extintores vigentes, botiquín y señalización de salida antes de solicitar la licencia."
    },
    {
      id: "MF-2",
      nombre: "Instrumento de Gestión Ambiental correspondiente",
      critico: true,
      glosario: "Identifica qué instrumento ambiental corresponde a tu actividad y cumple sus compromisos.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "Es un estudio o ficha donde explicas cómo vas a controlar el humo, ruido, agua sucia o desechos de tu fábrica para no afectar a los vecinos ni al ambiente.",
      pasoPractico: "Consulta en PRODUCE si tu tipo de taller necesita una ficha técnica ambiental o estudio preventivo antes de instalar maquinaria pesada."
    },
    {
      id: "MF-3",
      nombre: "Evaluación de riesgos laborales y equipos de protección",
      critico: true,
      glosario: "Identifica los peligros de máquinas, herramientas, sustancias y procesos y entrega los EPP correspondientes.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "Si tienes trabajadores en el taller, debes revisar qué máquinas o químicos pueden lastimarlos (matriz IPERC) y entregarles gratis sus implementos de seguridad (cascos, guantes, lentes o botas).",
      pasoPractico: "Haz una lista de los riesgos por cada máquina de tu taller y guarda una hoja firmada por cada trabajador cada vez que le entregues sus equipos de protección (EPP)."
    },
    {
      id: "MF-4",
      nombre: "Manejo de residuos sólidos no municipales y reportes SIGERSOL",
      critico: true,
      glosario: "Separa, almacena y entrega los residuos industriales de forma adecuada.",
      // AGREGADO POR BADA, Traducción legal en lenguaje sencillo y paso práctico
      explicacionSimple: "Los desechos de tu producción (aceites usados, retazos químicos, envases industriales) no se botan al camión de basura común; debes separarlos y entregarlos a una empresa operadora autorizada (EO-RS).",
      pasoPractico: "Coloca tachos diferenciados en tu taller, guarda los certificados o manifiestos de entrega de residuos peligrosos y verifica si te toca declararlos en el portal SIGERSOL."
    }
  ],
  "Minería en formalización": [
    {
      id: "MN-1",
      nombre: "Inscripción vigente en REINFO y RUC activo",
      critico: true,
      glosario: "Verifica que tu inscripción en el REINFO figure vigente y que tu RUC esté activo."
    },
    {
      id: "MN-2",
      nombre: "IGAFOM correctivo y preventivo",
      critico: true,
      glosario: "Describe las medidas para corregir y prevenir impactos de la actividad minera."
    },
    {
      id: "MN-3",
      nombre: "Acreditación de concesión minera y uso del terreno superficial",
      critico: true,
      glosario: "Acredita tanto el derecho sobre la concesión como el uso del terreno superficial."
    }
  ],
  "Otro rubro productivo": [
    {
      id: "OT-1",
      nombre: "Identificacion formal del negocio y permisos base",
      critico: true,
      glosario: "La base para operar con respaldo y acceder a mejores clientes."
    },
    {
      id: "OT-2",
      nombre: "Calendario de fechas y pagos clave",
      critico: false,
      glosario: "Evita recargos o multas por olvidar una fecha."
    },
    {
      id: "OT-3",
      nombre: "Respaldo de cargos y comprobantes",
      critico: false,
      glosario: "Guardar constancias te sirve como prueba si hay una revisión."
    }
  ]
};

let requisitosPorRubro = { ...REQUISITOS_RESPALDO };
let estadosActualesRequisitos = [];

async function cargarBaseNormativa() {
  try {
    const respuesta = await fetch("base-normativa.json");
    if (!respuesta.ok) {
      throw new Error("No se pudo leer base-normativa.json");
    }
    const datosJson = await respuesta.json();
    requisitosPorRubro = {
      ...REQUISITOS_RESPALDO,
      ...datosJson
    };
  } catch (err) {
    console.warn("Usando datos de respaldo locales:", err.message);
    requisitosPorRubro = { ...REQUISITOS_RESPALDO };
  }
  renderizarRequisitosRubro();
}

function obtenerListaRubroActual() {
  const rubro = document.getElementById("prod-rubro").value;
  return requisitosPorRubro[rubro] || REQUISITOS_RESPALDO[rubro] || [];
}

function obtenerMetricasRequisitos() {
  const total = estadosActualesRequisitos.length;
  if (total === 0) {
    return { porcentaje: 0, criticosPendientes: 0 };
  }

  const listaBase = obtenerListaRubroActual();
  let alDia = 0;
  let criticosPendientes = 0;

  for (let i = 0; i < total; i = i + 1) {
    const estado = estadosActualesRequisitos[i];
    const esCritico = listaBase[i] ? Boolean(listaBase[i].critico) : false;
    if (estado === "al_dia") {
      alDia = alDia + 1;
    } else if (esCritico) {
      criticosPendientes = criticosPendientes + 1;
    }
  }

  return {
    porcentaje: Math.round((alDia / total) * 100),
    criticosPendientes: criticosPendientes
  };
}

function renderizarRequisitosRubro() {
  const listaBase = obtenerListaRubroActual();
  estadosActualesRequisitos = listaBase.map(function () {
    return "pendiente";
  });

  const contenedor = document.getElementById("contenedor-requisitos");
  contenedor.innerHTML = "";

  for (let i = 0; i < listaBase.length; i = i + 1) {
    const req = listaBase[i];
    const tarjetaReq = document.createElement("div");
    tarjetaReq.className = "item-requisito";

    const codigo = req.id ? req.id + " — " : "";
    const badge = req.critico ? '<span class="badge-critico">Clave</span>' : "";

    // =========================================================================
    // AGREGADO POR BADA, Bloque del Traductor Legal en lenguaje simple
    // Lee 'explicacionSimple' y 'pasoPractico' desde base-normativa.json
    // =========================================================================
    let bloqueTraductor = "";
    if (req.explicacionSimple || req.pasoPractico) {
      bloqueTraductor += '<div class="caja-traductor-legal">';
      bloqueTraductor += '<div class="etiqueta-traductor">Traductor Legal (Lenguaje Simple)</div>';
      if (req.explicacionSimple) {
        bloqueTraductor += "<p><strong>¿Qué significa para ti?</strong> " + req.explicacionSimple + "</p>";
      }
      if (req.pasoPractico) {
        bloqueTraductor += "<p><strong>¿Qué debes tener listo?</strong> " + req.pasoPractico + "</p>";
      }
      bloqueTraductor += "</div>";
    }
    // =========================================================================

    let detalleNormativo = "";
    if (req.baseLegal || req.entidad || req.aplicabilidad || req.plazo || req.fuente) {
      detalleNormativo += '<div class="detalle-normativo">';
      if (req.baseLegal) {
        detalleNormativo += "<div><strong>Base legal:</strong> " + req.baseLegal + "</div>";
      }
      if (req.entidad) {
        detalleNormativo += "<div><strong>Entidad:</strong> " + req.entidad + "</div>";
      }
      if (req.aplicabilidad) {
        detalleNormativo += "<div><strong>A quién aplica:</strong> " + req.aplicabilidad + "</div>";
      }
      if (req.plazo) {
        detalleNormativo += "<div><strong>Plazo:</strong> " + req.plazo + "</div>";
      }
      if (req.fuente) {
        detalleNormativo +=
          '<div><strong>Fuente:</strong> <a href="' +
          req.fuente +
          '" target="_blank" rel="noopener noreferrer">Consultar norma oficial</a></div>';
      }
      detalleNormativo += "</div>";
    }

    tarjetaReq.innerHTML =
      '<div class="cabecera-requisito">' +
      "<div><strong>" +
      codigo +
      req.nombre +
      "</strong>" +
      badge +
      "</div>" +
      '<select data-indice="' +
      i +
      '" class="selector-estado-req">' +
      '<option value="pendiente">Pendiente</option>' +
      '<option value="en_tramite">En trámite</option>' +
      '<option value="al_dia">Al día</option>' +
      "</select>" +
      "</div>" +
      '<p class="glosario-requisito">' +
      req.glosario +
      "</p>" +
      bloqueTraductor + // AGREGADO POR BADA, Renderiza la caja de lenguaje simple junto a la base legal
      detalleNormativo;

    contenedor.appendChild(tarjetaReq);
  }

  const selectores = document.querySelectorAll(".selector-estado-req");
  for (let j = 0; j < selectores.length; j = j + 1) {
    selectores[j].addEventListener("change", function (evento) {
      const idx = Number(evento.target.getAttribute("data-indice"));
      estadosActualesRequisitos[idx] = evento.target.value;
      evaluarSemaforoMype();
    });
  }

  evaluarSemaforoMype();
}

function evaluarSemaforoMype() {
  const nombre = document.getElementById("prod-nombre").value.trim();
  const rubro = document.getElementById("prod-rubro").value;
  const diasPlazo = Number(document.getElementById("prod-dias-plazo").value);
  const claridad = document.getElementById("prod-tiene-instrumento").value;
  const metricas = obtenerMetricasRequisitos();

  document.getElementById("porcentaje-avance").textContent = metricas.porcentaje + "%";
  document.getElementById("criticos-pendientes").textContent = String(metricas.criticosPendientes);

  let clase = "estado-verde";
  let etiqueta = "VERDE: Vas en buen camino";
  let explicacion =
    "Tienes claridad y avance. Sigue revisando tus fechas con anticipación para evitar apuros.";

  if (claridad === "no" || diasPlazo < 0 || metricas.criticosPendientes >= 2) {
    clase = "estado-rojo";
    etiqueta = "ROJO: Atención urgente";
    explicacion =
      "Hay un plazo vencido, falta claridad o tienes varios puntos clave pendientes. Prioriza esos requisitos hoy para evitar multas o paradas.";
  } else if (claridad === "parcial" || diasPlazo <= 10 || metricas.criticosPendientes === 1) {
    clase = "estado-amarillo";
    etiqueta = "AMARILLO: Revisa a tiempo";
    explicacion =
      "Tienes una fecha cercana o algún punto clave por cerrar. Ordena ese pendiente ahora que aún estás a tiempo.";
  }

  const caja = document.getElementById("semaforo-productor");
  caja.className = "aviso-estado " + clase;
  const tituloNegocio = nombre !== "" ? nombre + " (" + rubro + ")" : rubro;
  caja.textContent = tituloNegocio + " -> " + etiqueta;
  document.getElementById("explicacion-productor").textContent = explicacion;
}

document.getElementById("prod-rubro").addEventListener("change", renderizarRequisitosRubro);
document.getElementById("btn-evaluar-productor").addEventListener("click", evaluarSemaforoMype);

// ==========================================
// 2. ESCENARIOS DE RETRASO (7, 15, 30 DIAS)
// ==========================================
function actualizarEscenariosRetraso() {
  const montoDia = Number(document.getElementById("calc-monto-dia").value);
  const presupuesto = Number(document.getElementById("calc-presupuesto").value);
  const cuerpo = document.getElementById("cuerpo-escenarios");
  cuerpo.innerHTML = "";

  const tramos = [7, 15, 30];
  for (let i = 0; i < tramos.length; i = i + 1) {
    const dias = tramos[i];
    const costo = montoDia * dias;
    const diferencia = costo - presupuesto;
    const signoDiff = diferencia >= 0 ? "+S/ " + diferencia : "-S/ " + Math.abs(diferencia);

    const fila = document.createElement("tr");
    fila.innerHTML =
      "<td>Esperar " +
      dias +
      " días</td>" +
      "<td>S/ " +
      costo +
      "</td>" +
      "<td>" +
      signoDiff +
      "</td>";
    cuerpo.appendChild(fila);
  }
}

document.getElementById("btn-calcular-riesgo").addEventListener("click", actualizarEscenariosRetraso);

// ==========================================
// 3. TAREAS PENDIENTES Y BITACORA
// ==========================================
function configurarListaSimple(idInput, idBoton, idLista, idAviso, itemsIniciales, prefijoItem) {
  const input = document.getElementById(idInput);
  const boton = document.getElementById(idBoton);
  const lista = document.getElementById(idLista);
  const aviso = document.getElementById(idAviso);

  function agregar(texto) {
    const li = document.createElement("li");
    li.textContent = prefijoItem ? prefijoItem + texto : texto;
    lista.appendChild(li);
  }

  for (let i = 0; i < itemsIniciales.length; i = i + 1) {
    agregar(itemsIniciales[i]);
  }

  boton.addEventListener("click", function () {
    const limpio = input.value.trim();
    if (limpio === "") {
      aviso.textContent = "Escribe algo antes de agregar.";
      return;
    }
    aviso.textContent = "";
    agregar(limpio);
    input.value = "";
  });
}

configurarListaSimple(
  "input-obligacion",
  "btn-agregar-obligacion",
  "lista-obligaciones",
  "aviso-obligacion",
  [
    "Revisar cuándo vence mi próximo trámite o pago",
    "Juntar mis papeles o constancias en una sola carpeta"
  ],
  ""
);

configurarListaSimple(
  "input-bitacora",
  "btn-agregar-bitacora",
  "lista-bitacora",
  "aviso-bitacora",
  ["Inicio de control preventivo en FormalizaLex"],
  "Avance: "
);

// ==========================================
// 4. PLAN MYPE Y VIGENCIA
// ==========================================
function calcularPlanYVigencia() {
  const tipoPlan = document.getElementById("sub-perfil").value;
  const meses = Number(document.getElementById("sub-meses").value);
  const diasRestantes = Number(document.getElementById("sub-dias-restantes").value);

  const mesesSeguros = meses > 0 ? meses : 1;
  let monto = 80 * mesesSeguros;
  let detalle = mesesSeguros + " mes(es) a S/ 80 cada uno.";

  if (tipoPlan === "pyme_anual") {
    monto = 800;
    detalle = "Pago anual (10 meses cobrados, 2 de ahorro): ahorras S/ 160 frente a S/ 960.";
  }

  let estadoVigencia = "Activa — te quedan " + diasRestantes + " día(s).";
  if (diasRestantes <= 0) {
    estadoVigencia = "Vencida — renueva tu plan para seguir con tus recordatorios.";
  } else if (diasRestantes <= 5) {
    estadoVigencia = "Por vencer — te quedan " + diasRestantes + " día(s).";
  }

  document.getElementById("sub-monto-total").innerHTML = "<strong>Monto del plan:</strong> S/ " + monto;
  document.getElementById("sub-ahorro").innerHTML = "<strong>Detalle:</strong> " + detalle;
  document.getElementById("sub-vigencia").innerHTML = "<strong>Vigencia:</strong> " + estadoVigencia;
}

document.getElementById("btn-calcular-sub").addEventListener("click", calcularPlanYVigencia);

document.getElementById("btn-validar-sub").addEventListener("click", function () {
  const correo = document.getElementById("sub-correo").value.trim().toLowerCase();
  const confirmacion = document.getElementById("sub-confirmacion");

  if (correo === "") {
    confirmacion.textContent = "Escribe un correo para guardar tu aviso de demostración.";
    return;
  }

  confirmacion.textContent = "Listo: correo registrado en modo demostración (" + correo + ").";
});

// Inicializar al cargar
cargarBaseNormativa();
actualizarEscenariosRetraso();
calcularPlanYVigencia();