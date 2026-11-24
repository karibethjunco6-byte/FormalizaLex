// ==========================================
// 1. REQUISITOS POR RUBRO Y SEMAFORO MYPE
// ==========================================
const REQUISITOS_POR_RUBRO = {
  "Pesca artesanal": [
    {
      nombre: "Permiso o matrícula vigente",
      critico: true,
      glosario: "En palabras simples: acredita que puedes trabajar legalmente sin que detengan tu faena."
    },
    {
      nombre: "Control de desembarque o jornada",
      critico: false,
      glosario: "En palabras simples: anotar tus salidas y cantidades te ayuda a llevar orden y evitar observaciones."
    },
    {
      nombre: "Higiene y frío básico del producto",
      critico: true,
      glosario: "En palabras simples: cuidar la limpieza protege la calidad de tu pesca y evita decomisos."
    }
  ],
  "Agroindustria": [
    {
      nombre: "Condiciones sanitarias y del local",
      critico: true,
      glosario: "En palabras simples: muestra que tu espacio de proceso o envasado es seguro para alimentos o insumos."
    },
    {
      nombre: "Origen y control de tus lotes",
      critico: false,
      glosario: "En palabras simples: saber de dónde vino cada insumo evita pérdidas si hay un reclamo o revisión."
    },
    {
      nombre: "Manejo de agua y residuos",
      critico: true,
      glosario: "En palabras simples: evitar verter desechos sin control previene multas o paralizaciones."
    }
  ],
  "Manufactura": [
    {
      nombre: "Permisos y seguridad básica del taller",
      critico: true,
      glosario: "En palabras simples: tener extintor, rutas libres y permisos al día evita cierres inesperados."
    },
    {
      nombre: "Protección en máquinas y herramientas",
      critico: true,
      glosario: "En palabras simples: un accidente en el taller cuesta caro y frena el trabajo de todos."
    },
    {
      nombre: "Orden de retazos y residuos",
      critico: false,
      glosario: "En palabras simples: separar sobrantes mantiene el taller seguro y dentro de norma."
    }
  ],
  "Minería en formalización": [
    {
      nombre: "Instrumento ambiental en seguimiento",
      critico: true,
      glosario: "En palabras simples: es el documento donde explicas cómo cuidas el entorno al trabajar."
    },
    {
      nombre: "Acreditación de terreno o acuerdo vigente",
      critico: true,
      glosario: "En palabras simples: respalda que tienes permiso para operar en ese espacio sin conflictos."
    },
    {
      nombre: "Seguridad y control de insumos",
      critico: true,
      glosario: "En palabras simples: reduce riesgos físicos y evita observaciones en tu expediente."
    }
  ],
  "Otro rubro productivo": [
    {
      nombre: "Formalidad básica del negocio y permisos",
      critico: true,
      glosario: "En palabras simples: te da respaldo para vender con tranquilidad y crecer sin tropiezos."
    },
    {
      nombre: "Calendario de fechas y pagos",
      critico: false,
      glosario: "En palabras simples: anotar vencimientos evita pagar recargos solo por olvido."
    },
    {
      nombre: "Archivo de cargos y comprobantes",
      critico: false,
      glosario: "En palabras simples: guardar constancias te sirve como prueba si alguien pregunta."
    }
  ]
};

let estadosActualesRequisitos = [];

function obtenerMetricasRequisitos() {
  const total = estadosActualesRequisitos.length;
  if (total === 0) {
    return { porcentaje: 0, criticosPendientes: 0 };
  }

  const rubro = document.getElementById("prod-rubro").value;
  const listaBase = REQUISITOS_POR_RUBRO[rubro] || [];
  let alDia = 0;
  let criticosPendientes = 0;

  for (let i = 0; i < total; i = i + 1) {
    const estado = estadosActualesRequisitos[i];
    const esCritico = listaBase[i] ? listaBase[i].critico : false;
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
  const rubro = document.getElementById("prod-rubro").value;
  const listaBase = REQUISITOS_POR_RUBRO[rubro] || [];
  estadosActualesRequisitos = listaBase.map(function () {
    return "pendiente";
  });

  const contenedor = document.getElementById("contenedor-requisitos");
  contenedor.innerHTML = "";

  for (let i = 0; i < listaBase.length; i = i + 1) {
    const req = listaBase[i];
    const tarjetaReq = document.createElement("div");
    tarjetaReq.className = "item-requisito";

    const badge = req.critico ? '<span class="badge-critico">Clave</span>' : "";

    tarjetaReq.innerHTML =
      '<div class="cabecera-requisito">' +
      "<div><strong>" +
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
      "</p>";

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
renderizarRequisitosRubro();
actualizarEscenariosRetraso();
calcularPlanYVigencia();