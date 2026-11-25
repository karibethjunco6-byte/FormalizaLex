// ==========================================
// 1. REQUISITOS POR RUBRO Y SEMAFORO MYPE
// Base jurídica inicial para cuatro rubros; validar siempre vigencia y aplicabilidad.
// ==========================================
const REQUISITOS_POR_RUBRO = {
  "Pesca artesanal": [
    {
      "id": "PA-1",
      "nombre": "Permiso de pesca de la embarcación",
      "critico": true,
      "glosario": "Comprueba que la embarcación cuenta con el permiso de pesca correspondiente antes de realizar faenas. La matrícula no sustituye al permiso.",
      "baseLegal": "Decreto Ley 25977, arts. 43 literal c) y 76 numeral 1",
      "entidad": "Gobierno regional (DIREPRO o equivalente) o PRODUCE, según competencia y régimen de la embarcación",
      "aplicabilidad": "Titulares de embarcaciones pesqueras artesanales que realizan extracción; verificar la modalidad y el régimen específico aplicable.",
      "plazo": "Antes de operar; revisar vigencia, especie, zona y condiciones del permiso.",
      "fuente": "https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=51"
    },
    {
      "id": "PA-2",
      "nombre": "Respeto de vedas, tallas mínimas y zonas autorizadas",
      "critico": true,
      "glosario": "Antes de cada faena, revisa si la especie tiene veda, talla mínima o restricción de zona.",
      "baseLegal": "Decreto Ley 25977, art. 76 numerales 2 y 3, y normas específicas de ordenamiento pesquero",
      "entidad": "PRODUCE y gobiernos regionales, según competencia",
      "aplicabilidad": "Toda extracción de recursos hidrobiológicos; las reglas concretas varían por especie, temporada, arte de pesca y zona.",
      "plazo": "Antes y durante cada faena; consultar las disposiciones específicas vigentes.",
      "fuente": "https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=51"
    },
    {
      "id": "PA-3",
      "nombre": "Manipulación sanitaria y preservación de la captura a bordo",
      "critico": true,
      "glosario": "Manipula la captura en condiciones higiénicas y utiliza un método de preservación que evite contaminación y daño. Para productos destinados al consumo humano directo, el reglamento establece condiciones de enfriamiento.",
      "baseLegal": "D.S. 020-2022-PRODUCE, art. 25.1, modificado por D.S. 005-2025-PRODUCE",
      "entidad": "SANIPES",
      "aplicabilidad": "Embarcaciones pesqueras comerciales distintas de las embarcaciones factoría y congeladoras; confirmar que la embarcación concreta está comprendida.",
      "plazo": "Durante cada faena y desde la captura hasta el desembarque, según destino y tipo de embarcación.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2390264-1"
    }
  ],
  "Agroindustria": [
    {
      "id": "AG-1",
      "nombre": "Registro sanitario del producto industrializado",
      "critico": true,
      "glosario": "Comprueba que el alimento industrializado sujeto a registro cuenta con el registro sanitario correspondiente antes de comercializarlo.",
      "baseLegal": "D.S. 007-98-SA, arts. 101 y 102",
      "entidad": "DIGESA (MINSA), según el tipo de alimento y competencia sanitaria",
      "aplicabilidad": "Alimentos y bebidas industrializados de consumo humano sujetos a registro sanitario. No se aplica automáticamente al procesamiento primario.",
      "plazo": "Antes de comercializar; verificar vigencia y condiciones del registro.",
      "fuente": "https://www.digesa.minsa.gob.pe/normaslegales/normas/ds007_98.pdf"
    },
    {
      "id": "AG-2",
      "nombre": "Programa de limpieza y desinfección",
      "critico": true,
      "glosario": "Organiza y ejecuta la limpieza y desinfección del establecimiento para evitar contaminación de los alimentos.",
      "baseLegal": "D.S. 007-98-SA, art. 56",
      "entidad": "Autoridad sanitaria competente (DIGESA o autoridad regional, según competencia)",
      "aplicabilidad": "Fábricas de alimentos y bebidas del perfil industrializado seleccionado.",
      "plazo": "De forma continua, con la frecuencia establecida en los procedimientos de higiene y cuando sea necesario.",
      "fuente": "https://www.digesa.minsa.gob.pe/normaslegales/normas/ds007_98.pdf"
    },
    {
      "id": "AG-3",
      "nombre": "Agua apta para elaborar alimentos",
      "critico": true,
      "glosario": "Utiliza agua que cumpla los requisitos sanitarios aplicables al consumo humano y controla su condición sanitaria durante el proceso.",
      "baseLegal": "D.S. 007-98-SA, art. 40",
      "entidad": "Autoridad sanitaria competente (DIGESA o autoridad regional, según competencia)",
      "aplicabilidad": "Fabricación de alimentos y bebidas del perfil seleccionado que utiliza agua en sus procesos o en operaciones de higiene.",
      "plazo": "Durante la fabricación y según el programa de control sanitario.",
      "fuente": "https://www.digesa.minsa.gob.pe/normaslegales/normas/ds007_98.pdf"
    }
  ],
  "Manufactura": [
    {
      "id": "MF-1",
      "nombre": "Licencia municipal de funcionamiento e ITSE",
      "critico": true,
      "glosario": "Antes de abrir el taller o planta, verifica la licencia municipal y las condiciones de seguridad del establecimiento. La inspección de seguridad puede ser previa o posterior según el nivel de riesgo.",
      "baseLegal": "TUO de la Ley 28976, aprobado por D.S. 163-2020-PCM, arts. 3, 4, 5, 6 y 8; D.S. 002-2018-PCM, arts. 31, 33 y 34",
      "entidad": "Municipalidad distrital o provincial competente",
      "aplicabilidad": "Personas naturales o jurídicas que desarrollan actividad industrial en un establecimiento permanente; la municipalidad evalúa zonificación, compatibilidad de uso y seguridad.",
      "plazo": "Antes de abrir el establecimiento. ITSE previa para riesgo alto o muy alto; posterior para riesgo bajo o medio, conforme a la clasificación municipal.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/1890266-2"
    },
    {
      "id": "MF-2",
      "nombre": "Instrumento de Gestión Ambiental correspondiente",
      "critico": true,
      "glosario": "Identifica qué instrumento ambiental corresponde a tu actividad y cumple sus compromisos. No todas las fábricas necesitan el mismo instrumento: depende de la actividad, categoría e impactos.",
      "baseLegal": "D.S. 017-2015-PRODUCE, arts. 16 y 19, modificado por D.S. 006-2019-PRODUCE; D.S. 020-2025-PRODUCE, arts. 1, 2.1 y 2.5; Ley 27446, art. 3",
      "entidad": "PRODUCE (Dirección General de Asuntos Ambientales de Industria) o gobierno regional con funciones transferidas; fiscalización por OEFA/EFA según competencia",
      "aplicabilidad": "Proyectos manufactureros sujetos al SEIA y actividades en curso comprendidas en el reglamento sectorial. La DAA o el PAMA por adecuación excepcional del D.S. 020-2025-PRODUCE solo alcanza a actividades que iniciaron hasta el 27/06/2019 sin IGA aprobado y cumplen las condiciones normativas.",
      "plazo": "El instrumento preventivo debe obtenerse antes de iniciar el proyecto sujeto al SEIA. Para los supuestos excepcionales del D.S. 020-2025-PRODUCE, el plazo máximo para presentar DAA o PAMA es de cinco años desde la entrada en vigor de esa norma.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2445312-1"
    },
    {
      "id": "MF-3",
      "nombre": "Evaluación de riesgos laborales y equipos de protección",
      "critico": true,
      "glosario": "Identifica los peligros de máquinas, herramientas, sustancias y procesos; actualiza la evaluación de riesgos y entrega gratuitamente los equipos de protección adecuados cuando correspondan.",
      "baseLegal": "Ley 29783, arts. 49, 57 y 60 (arts. 49 y 60 modificados por Ley 31246); D.S. 005-2012-TR",
      "entidad": "SUNAFIL y autoridad de trabajo competente",
      "aplicabilidad": "Empleadores manufactureros con trabajadores; deben prevenir riesgos según las tareas y condiciones reales del centro de trabajo.",
      "plazo": "La evaluación de riesgos se actualiza como mínimo una vez al año, cuando cambian las condiciones de trabajo o cuando se producen daños a la salud o seguridad; los EPP se proporcionan cuando el riesgo no puede eliminarse en su origen.",
      "fuente": "https://www.dirislimaeste.gob.pe/Virtual2/Otros_Link/CSST/Ley%2029783%20Seguridad%20y%20Salud%20en%20el%20Trabajo.pdf"
    },
    {
      "id": "MF-4",
      "nombre": "Manejo de residuos sólidos no municipales y reportes SIGERSOL",
      "critico": true,
      "glosario": "Separa, almacena y entrega los residuos industriales de forma adecuada. Si tu actividad está obligada a contar con IGA, verifica además los reportes que correspondan en SIGERSOL.",
      "baseLegal": "D. Leg. 1278, art. 55; D.S. 014-2017-MINAM, arts. 13 y 48; R.M. 000279-2025-PRODUCE, arts. 1 y 3-1.4",
      "entidad": "MINAM (administración de SIGERSOL); PRODUCE/DGAAMI para las reglas sectoriales; OEFA o EFA competente para fiscalización, según corresponda",
      "aplicabilidad": "Generadores de residuos sólidos no municipales. Si cuentan con IGA, revisar la obligación de reporte conforme al D.S. 014-2017-MINAM. Si no están obligados a IGA, la R.M. 000279-2025-PRODUCE (vigente desde 01/01/2026) exige DAMRS/MMRSP solo a las actividades manufactureras CIIU enumeradas y cuando se cumplan las condiciones y umbrales específicos de su cuadro (por ejemplo, cantidades de residuos o material de descarte). Quienes no estén comprendidos igualmente deben cumplir las demás obligaciones de manejo de residuos.",
      "plazo": "Cuando corresponda: DAMRS durante los primeros quince días hábiles de abril de cada año; manifiestos de residuos peligrosos durante los primeros quince días hábiles del inicio de cada trimestre. La gestión de residuos debe mantenerse de forma continua.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2430741-1"
    }
  ],
  "Minería en formalización": [
    {
      "id": "MN-1",
      "nombre": "Inscripción vigente en REINFO y RUC activo",
      "critico": true,
      "glosario": "Verifica que tu inscripción en el REINFO figure vigente y que tu RUC esté activo, en renta de tercera categoría y con actividad económica minera. Estar inscrito no equivale a tener autorización de inicio o reinicio.",
      "baseLegal": "D.S. 001-2020-EM, art. 7.2 literal a), modificado por D.S. 010-2022-EM; Ley 32537, art. único (modifica art. 6 del D. Leg. 1293)",
      "entidad": "MINEM - Dirección General de Formalización Minera (REINFO); SUNAT (RUC)",
      "aplicabilidad": "Solo para operadores inscritos en el REINFO dentro del proceso de formalización minera integral. La Ley 32537 también exige verificar el cumplimiento del sinceramiento georreferenciado de ubicación presentado por los inscritos.",
      "plazo": "Mantener las condiciones durante la vigencia del proceso. La Ley 32537 fija vigencia hasta el 31/12/2026 o hasta la entrada en vigor de la Ley MAPE y su reglamento, lo que ocurra primero. Además, exigió el sinceramiento georreferenciado de ubicación dentro de 120 días desde su entrada en vigor; verificar el cargo porque ese plazo único ya transcurrió.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2471915-1"
    },
    {
      "id": "MN-2",
      "nombre": "IGAFOM correctivo y preventivo",
      "critico": true,
      "glosario": "El IGAFOM describe las medidas para corregir impactos existentes y prevenir impactos de la actividad minera. Debes revisar que corresponda a cada actividad inscrita y conocer su estado de evaluación.",
      "baseLegal": "D. Leg. 1336, art. 6; D.S. 038-2017-EM, arts. 4, 9 y 10; D.S. 001-2020-EM, art. 7.2 literal b), modificado por D.S. 010-2022-EM; D.S. 009-2025-EM, arts. 9.5 y disposición complementaria modificatoria primera",
      "entidad": "MINEM - Dirección General de Asuntos Ambientales Mineros (evalúa y aprueba); gobiernos regionales y Dirección General de Minería en Lima Metropolitana (fiscalización ambiental, según competencia)",
      "aplicabilidad": "Minero informal inscrito en REINFO, respecto de cada actividad minera inscrita. El IGAFOM es un requisito del proceso de formalización y su aprobación es necesaria para culminarlo.",
      "plazo": "Presentar los aspectos correctivo y preventivo y atender las observaciones. Si hay desistimiento, abandono o desaprobación, revisar el plazo de treinta días calendario para una nueva presentación previsto en el art. 7.2 literal b), según corresponda.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2400459-1"
    },
    {
      "id": "MN-3",
      "nombre": "Acreditación de concesión minera y uso del terreno superficial",
      "critico": true,
      "glosario": "Debes acreditar el derecho sobre la concesión minera y, por separado, la propiedad o autorización para usar el terreno superficial. Una concesión minera no reemplaza el derecho de uso de la superficie.",
      "baseLegal": "D. Leg. 1336, art. 3; D.S. 018-2017-EM, arts. 18 y 20",
      "entidad": "MINEM - Dirección General de Formalización Minera; SUNARP para verificar partidas registrales; titular del predio o de la concesión, según corresponda",
      "aplicabilidad": "Operadores inscritos en el proceso que deben acreditar titularidad de la concesión o contrato de cesión/explotación y propiedad o autorización de uso del terreno superficial.",
      "plazo": "Antes de solicitar la autorización de inicio o reinicio; los contratos y derechos deben estar vigentes y acreditados conforme a la norma.",
      "fuente": "https://cdn.www.gob.pe/uploads/document/file/308242/D.S._N__018-2017-EM_-_Complementarias_en_el_marco_del_PFMI.pdf"
    },
    {
      "id": "MN-4",
      "nombre": "Expediente técnico y autorización de inicio o reinicio",
      "critico": true,
      "glosario": "Prepara el expediente técnico y los documentos arqueológicos que correspondan. No inicies ni reinicies explotación o beneficio solo por tener inscripción en REINFO: se requiere la autorización administrativa correspondiente.",
      "baseLegal": "D.S. 018-2017-EM, arts. 29, 30, 31 y 32; D.S. 009-2025-EM, art. 9.3 literal c) y art. 9.5; D.S. 025-2026-EM, art. 2",
      "entidad": "MINEM - Dirección General de Formalización Minera (trámite y verificación previa); otras autoridades sectoriales para documentos específicos",
      "aplicabilidad": "Minero en proceso de formalización que solicita autorización de inicio o reinicio de explotación y/o beneficio. Incluye expediente técnico, declaración jurada de inexistencia de restos arqueológicos y demás requisitos aplicables.",
      "plazo": "Antes de iniciar o reiniciar actividades. Desde el D.S. 025-2026-EM, la verificación previa del art. 32 se realiza en gabinete por la DGFM.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2570415-1"
    },
    {
      "id": "MN-5",
      "nombre": "Declaración semestral de producción y registro de insumos fiscalizados",
      "critico": true,
      "glosario": "Presenta la declaración semestral de producción cuando te corresponda. Si realizas beneficio con insumos químicos fiscalizados, verifica también la inscripción en el registro de SUNAT.",
      "baseLegal": "D.S. 001-2020-EM, art. 7.2 literales c) y d), modificado por D.S. 005-2022-EM y D.S. 010-2022-EM",
      "entidad": "MINEM - Dirección General de Formalización Minera (declaración de producción); SUNAT (Registro para el Control de Bienes Fiscalizados)",
      "aplicabilidad": "Mineros inscritos en REINFO por cada actividad declarada. La declaración semestral tiene una excepción para quien explota en una concesión vigente de la que es titular; el registro de bienes fiscalizados corresponde cuando se realiza beneficio con insumos sujetos a control.",
      "plazo": "Declaración de producción: hasta el último día calendario de julio y enero, por los semestres anteriores, según el texto del art. 7.2(c) modificado por D.S. 010-2022-EM. Registro de bienes fiscalizados: antes de realizar la actividad sujeta a control.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2102467-1"
    },
    {
      "id": "MN-6",
      "nombre": "Seguridad y salud ocupacional minera",
      "critico": true,
      "glosario": "Realiza inspecciones para identificar peligros y evaluar riesgos. Implementa estándares, procedimientos y prácticas seguras para las labores mineras, según el tipo de operación.",
      "baseLegal": "D.S. 024-2016-EM, arts. 26 literal m) y 33, modificados por D.S. 034-2023-EM",
      "entidad": "Gobierno regional competente para pequeña minería y minería artesanal; SUNAFIL en el ámbito laboral; OSINERGMIN para gran y mediana minería",
      "aplicabilidad": "Titulares de actividades de pequeña minería y minería artesanal; las medidas concretas dependen de si la operación es subterránea, superficial, de explotación o beneficio.",
      "plazo": "Obligación permanente durante las actividades; efectuar inspecciones, evaluar riesgos e implementar los controles, estándares y procedimientos que correspondan.",
      "fuente": "https://busquedas.elperuano.pe/dispositivo/NL/2249422-2"
    }
  ],
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

let estadosActualesRequisitos = [];

function obtenerMetricasRequisitos() {
  const rubro = document.getElementById("prod-rubro").value;
  const listaBase = REQUISITOS_POR_RUBRO[rubro] || [];
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
  const listaBase = REQUISITOS_POR_RUBRO[rubro] || [];
  estadosActualesRequisitos = listaBase.map(function () {
    return "pendiente";
  });

  const contenedor = document.getElementById("contenedor-requisitos");
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
  nota.textContent = "Diagnóstico parcial y orientativo, basado en declaraciones. No acredita cumplimiento legal integral. Marca No aplica solo cuando la condición descrita no corresponde a tu actividad. Los días ingresados son referenciales; no son plazos legales calculados.";
  contenedor.appendChild(nota);


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
      '<option value="no_aplica">No aplica</option>' +
      "</select>" +
      "</div>" +
      '<p class="glosario-requisito">' +
      req.glosario +
      "</p>";

    if (req.baseLegal) {
      const datos = [
        ["Código", req.id], ["Base legal", req.baseLegal],
        ["Autoridad competente", req.entidad],
        ["Aplicabilidad", req.aplicabilidad], ["Plazo", req.plazo]
      ];
      datos.forEach(function (dato) {
        const p = document.createElement("p");
        p.className = "glosario-requisito";
        p.textContent = dato[0] + ": " + dato[1];
        tarjetaReq.appendChild(p);
      });
      const enlace = document.createElement("a");
      enlace.href = req.fuente;
      enlace.target = "_blank";
      enlace.rel = "noopener noreferrer";
      enlace.textContent = "Consultar fuente oficial";
      tarjetaReq.appendChild(enlace);
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
renderizarRequisitosRubro();
actualizarEscenariosRetraso();
calcularPlanYVigencia();