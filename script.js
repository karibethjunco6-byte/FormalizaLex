// ==========================================
// 1. REQUISITOS POR RUBRO Y SEMAFORO MYPE
// La información normativa se carga desde base_normativa.json.
// Mantener ambos archivos en la misma carpeta.
// ==========================================

let REQUISITOS_POR_RUBRO = {};
let baseNormativaCargada = false;

// Se conserva el rubro genérico que ya existía en el script original.
// No forma parte de los cuatro rubros de la base normativa.
const REQUISITOS_RUBRO_ADICIONAL = {
  "Otro rubro productivo": [
    {
      "id": "OT-1",
      "nombre": "Identificación formal del negocio y permisos base",
      "critico": true,
      "glosario": "La base para operar con respaldo y acceder a mejores clientes."
    },
    {
      "id": "OT-2",
      "nombre": "Calendario de fechas y pagos clave",
      "critico": false,
      "glosario": "Evita recargos o multas por olvidar una fecha."
    },
    {
      "id": "OT-3",
      "nombre": "Respaldo de cargos y comprobantes",
      "critico": false,
      "glosario": "Guardar constancias te sirve como prueba si hay una revisión."
    }
  ]
};

function obtenerListaRequisitos(rubro) {
  return REQUISITOS_POR_RUBRO[rubro] ||
    REQUISITOS_RUBRO_ADICIONAL[rubro] ||
    [];
}

async function cargarBaseNormativa() {
  const contenedor = document.getElementById("contenedor-requisitos");

  try {
    // base_normativa.json debe estar en la misma carpeta que index.html.
    const respuesta = await fetch("./base_normativa.json", {
      cache: "no-store"
    });

    if (!respuesta.ok) {
      throw new Error("No se pudo leer base_normativa.json (HTTP " + respuesta.status + ").");
    }

    const datos = await respuesta.json();
    const rubrosEsperados = [
      "Pesca artesanal",
      "Agroindustria",
      "Manufactura",
      "Minería en formalización"
    ];

    const rubrosFaltantes = rubrosEsperados.filter(function (rubro) {
      return !Array.isArray(datos[rubro]);
    });

    if (rubrosFaltantes.length > 0) {
      throw new Error(
        "Faltan rubros o listas en base_normativa.json: " +
        rubrosFaltantes.join(", ")
      );
    }

    REQUISITOS_POR_RUBRO = datos;
    baseNormativaCargada = true;
    console.info("Base normativa cargada correctamente.", REQUISITOS_POR_RUBRO);

    // Renderizar recién después de cargar la información externa.
    renderizarRequisitosRubro();
  } catch (error) {
    console.error("Error al cargar la base normativa:", error);

    contenedor.innerHTML = "";
    const aviso = document.createElement("p");
    aviso.className = "glosario-requisito";
    aviso.textContent =
      "No se pudo cargar la base normativa. Verifica que el archivo se llame " +
      "base_normativa.json y esté junto a index.html. Abre el proyecto con " +
      "Live Server o desde un servidor web; no uses la apertura directa file://.";
    contenedor.appendChild(aviso);

    const caja = document.getElementById("semaforo-productor");
    caja.className = "aviso-estado estado-amarillo";
    caja.textContent = "Base normativa no disponible";
    document.getElementById("explicacion-productor").textContent =
      "El diagnóstico no puede calcularse hasta que se cargue base_normativa.json. " +
      "Comprueba la ubicación y el nombre del archivo y vuelve a actualizar la página.";
  }
}

let estadosActualesRequisitos = [];

function obtenerMetricasRequisitos() {
  const rubro = document.getElementById("prod-rubro").value;
  const listaBase = obtenerListaRequisitos(rubro);
  let totalAplicables = 0;
  let alDia = 0;
  let criticosPendientes = 0;

  for (let i = 0; i < estadosActualesRequisitos.length; i = i + 1) {
    const estado = estadosActualesRequisitos[i];

    // "No aplica" se excluye del porcentaje y del conteo de pendientes.
    if (estado === "no_aplica") {
      continue;
    }

    totalAplicables = totalAplicables + 1;
    const esCritico = listaBase[i] ? listaBase[i].critico : false;

    if (estado === "al_dia") {
      alDia = alDia + 1;
    } else if (esCritico) {
      criticosPendientes = criticosPendientes + 1;
    }
  }

  if (totalAplicables === 0) {
    return { porcentaje: 0, criticosPendientes: 0, totalAplicables: 0 };
  }

  return {
    porcentaje: Math.round((alDia / totalAplicables) * 100),
    criticosPendientes: criticosPendientes,
    totalAplicables: totalAplicables
  };
}

function renderizarRequisitosRubro() {
  const rubro = document.getElementById("prod-rubro").value;
  const contenedor = document.getElementById("contenedor-requisitos");

  if (!baseNormativaCargada && rubro !== "Otro rubro productivo") {
    contenedor.textContent = "Cargando base normativa...";
    return;
  }

  const listaBase = obtenerListaRequisitos(rubro);
  estadosActualesRequisitos = listaBase.map(function () {
    return "pendiente";
  });

  contenedor.innerHTML = "";

  const alcance = document.createElement("p");
  alcance.className = "glosario-requisito";
  alcance.textContent = rubro === "Pesca artesanal"
    ? "Perfil piloto: titular de embarcación artesanal de extracción. Verifica que cada requisito corresponda a la modalidad y características de tu embarcación."
    : rubro === "Agroindustria"
    ? "Perfil piloto: fábrica de alimentos vegetales industrializados sujetos a registro sanitario DIGESA. No aplica automáticamente al procesamiento primario."
    : rubro === "Manufactura"
    ? "Perfil piloto: taller o establecimiento manufacturero. La licencia depende del municipio y riesgo; el IGA depende de la actividad y clasificación ambiental."
    : rubro === "Minería en formalización"
    ? "Perfil piloto: pequeño minero o minero artesanal inscrito en REINFO. El REINFO no sustituye la autorización de inicio o reinicio de actividades."
    : "Rubro ilustrativo: requisitos generales sin validación normativa; fuera del alcance del piloto.";
  contenedor.appendChild(alcance);

  const nota = document.createElement("p");
  nota.textContent =
    "Diagnóstico parcial y orientativo, basado en declaraciones. No acredita cumplimiento legal integral. " +
    "Marca No aplica solo cuando la condición descrita no corresponde a tu actividad. " +
    "Los días ingresados son referenciales; no son plazos legales calculados.";
  contenedor.appendChild(nota);

  for (let i = 0; i < listaBase.length; i = i + 1) {
    const req = listaBase[i];
    const tarjetaReq = document.createElement("div");
    tarjetaReq.className = "item-requisito";

    const cabecera = document.createElement("div");
    cabecera.className = "cabecera-requisito";

    const bloqueTitulo = document.createElement("div");
    const titulo = document.createElement("strong");
    titulo.textContent = req.nombre || "Requisito sin nombre";
    bloqueTitulo.appendChild(titulo);

    if (req.critico) {
      const badge = document.createElement("span");
      badge.className = "badge-critico";
      badge.textContent = "Clave";
      bloqueTitulo.appendChild(badge);
    }

    const selector = document.createElement("select");
    selector.setAttribute("data-indice", String(i));
    selector.className = "selector-estado-req";

    const opciones = [
      ["pendiente", "Pendiente"],
      ["en_tramite", "En trámite"],
      ["al_dia", "Al día"],
      ["no_aplica", "No aplica"]
    ];

    opciones.forEach(function (opcion) {
      const elemento = document.createElement("option");
      elemento.value = opcion[0];
      elemento.textContent = opcion[1];
      selector.appendChild(elemento);
    });

    cabecera.appendChild(bloqueTitulo);
    cabecera.appendChild(selector);
    tarjetaReq.appendChild(cabecera);

    const glosario = document.createElement("p");
    glosario.className = "glosario-requisito";
    glosario.textContent = req.glosario || "";
    tarjetaReq.appendChild(glosario);

    if (req.baseLegal) {
      const datos = [
        ["Código", req.id],
        ["Base legal", req.baseLegal],
        ["Autoridad competente", req.entidad],
        ["Aplicabilidad", req.aplicabilidad],
        ["Plazo", req.plazo]
      ];

      datos.forEach(function (dato) {
        if (dato[1]) {
          const parrafo = document.createElement("p");
          parrafo.className = "glosario-requisito";
          parrafo.textContent = dato[0] + ": " + dato[1];
          tarjetaReq.appendChild(parrafo);
        }
      });

      if (req.fuente) {
        const enlace = document.createElement("a");
        enlace.href = req.fuente;
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";
        enlace.textContent = "Consultar fuente oficial";
        tarjetaReq.appendChild(enlace);
      }
    }

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

  if (!baseNormativaCargada && rubro !== "Otro rubro productivo") {
    const cajaCarga = document.getElementById("semaforo-productor");
    cajaCarga.className = "aviso-estado estado-amarillo";
    cajaCarga.textContent = "Cargando base normativa...";
    document.getElementById("explicacion-productor").textContent =
      "Espera a que se cargue base_normativa.json para evaluar el cumplimiento.";
    return;
  }
  const diasPlazo = Number(document.getElementById("prod-dias-plazo").value);
  const claridad = document.getElementById("prod-tiene-instrumento").value;
  const metricas = obtenerMetricasRequisitos();

  document.getElementById("porcentaje-avance").textContent = metricas.porcentaje + "%";
  document.getElementById("criticos-pendientes").textContent = String(metricas.criticosPendientes);

  let clase = "estado-verde";
  let etiqueta = "VERDE: Vas en buen camino";
  let explicacion =
    "Tienes claridad y avance. Sigue revisando tus fechas con anticipación para evitar apuros.";

  if (metricas.totalAplicables === 0) {
    clase = "estado-amarillo";
    etiqueta = "AMARILLO: Revisa la aplicabilidad";
    explicacion = "Has marcado todos los requisitos como no aplicables. Verifica el perfil del negocio y confirma que realmente no te corresponde ninguno antes de considerar el diagnóstico.";
  } else if (claridad === "no" || diasPlazo < 0 || metricas.criticosPendientes >= 2) {
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
