# FormalizaLex: Tu Abogado en Regla - Logica base (Vista unica Productor / Mype)
# Incluye semaforo, proyeccion de escenarios de retraso (7, 15, 30 dias),
# porcentaje de avance por requisitos y suscripcion.

CONFIG_COLORES_PLATAFORMA = {
    "encabezado_fondo": "#0f172a",
    "acento_principal": "#1d4ed8",
    "acento_secundario": "#0f766e",
    "fondo_pagina": "#f4f6f9",
}

REQUISITOS_POR_RUBRO = {
    "Pesca artesanal": [
        {"id": "PA-1", "nombre": "Permiso o matricula vigente", "critico": True, "glosario": "Acredita que puedes operar legalmente sin que te inmovilicen."},
        {"id": "PA-2", "nombre": "Bitacora o control de desembarque", "critico": False, "glosario": "Registro simple de tus jornadas y descargas para evitar observaciones."},
        {"id": "PA-3", "nombre": "Buenas practicas sanitarias a bordo", "critico": True, "glosario": "Cuidado basico de higiene y frio para proteger tu producto y venta."},
    ],
    "Agroindustria": [
        {"id": "AG-1", "nombre": "Registro sanitario o habilitacion del local", "critico": True, "glosario": "Valida que tu espacio y proceso cumplen condiciones minimas de salubridad."},
        {"id": "AG-2", "nombre": "Trazabilidad de insumos y cosecha/compra", "critico": False, "glosario": "Saber de donde vino cada lote evita perdidas ante reclamos o controles."},
        {"id": "AG-3", "nombre": "Control de residuos y agua", "critico": True, "glosario": "Evita multas ambientales o cierre temporal por manejo inadecuado."},
    ],
    "Manufactura": [
        {"id": "MF-1", "nombre": "Licencia y condiciones de seguridad del taller", "critico": True, "glosario": "Reduce el riesgo de clausura o multa por local sin orden basico."},
        {"id": "MF-2", "nombre": "Equipos de proteccion y orden de maquinarias", "critico": True, "glosario": "Previene accidentes que paralizan el taller y generan costos altos."},
        {"id": "MF-3", "nombre": "Gestion de mermas y desechos del taller", "critico": False, "glosario": "Separar residuos evita acumulacion y sanciones municipales."},
    ],
    "Mineria en formalizacion": [
        {"id": "MN-1", "nombre": "Instrumento ambiental en seguimiento", "critico": True, "glosario": "Documento que detalla como cuidas el entorno en tu actividad."},
        {"id": "MN-2", "nombre": "Acreditacion de titularidad o contrato vigente", "critico": True, "glosario": "Demuestra derecho de uso del area para operar sin conflictos."},
        {"id": "MN-3", "nombre": "Seguridad y control de insumos", "critico": True, "glosario": "Reglas clave para evitar accidentes y observaciones de control."},
    ],
    "Otro rubro productivo": [
        {"id": "OT-1", "nombre": "Identificacion formal del negocio y permisos base", "critico": True, "glosario": "La base para operar con tranquilidad y acceder a mejores clientes."},
        {"id": "OT-2", "nombre": "Calendario de fechas y pagos clave", "critico": False, "glosario": "Evita recargos o multas solo por olvidar una fecha."},
        {"id": "OT-3", "nombre": "Respaldo de comprobantes y cargos", "critico": False, "glosario": "Guardar constancias te protege si hay un malentendido."},
    ],
}


def evaluar_cumplimiento_productor(dias_restantes, estado_requisito, criticos_pendientes):
  if estado_requisito == "no" or dias_restantes < 0 or criticos_pendientes >= 2:
    return "ROJO: Riesgo alto — Hay plazos vencidos, vacios criticos o desconocimiento importante."
  elif estado_requisito == "parcial" or dias_restantes <= 10 or criticos_pendientes == 1:
    return "AMARILLO: Preventivo — Revisa fechas cercanas y cierra pendientes clave a tiempo."
  else:
    return "VERDE: En regla — Vas bien encaminado; mantente con alertas preventivas."


def proyectar_escenarios_retraso(monto_por_dia, presupuesto_base):
  escenarios = {}
  for dias in (7, 15, 30):
    costo = monto_por_dia * dias
    escenarios[dias] = {
        "costo_retraso": costo,
        "diferencia_vs_presupuesto": costo - presupuesto_base,
    }
  return escenarios


def calcular_avance_requisitos(estados_requisitos):
  if not estados_requisitos:
    return 0
  al_dia = sum(1 for estado in estados_requisitos if estado == "al_dia")
  return round((al_dia / len(estados_requisitos)) * 100)


def calcular_suscripcion(tipo_plan, meses):
  meses_seguros = meses if meses > 0 else 1
  if tipo_plan == "anual":
    return 800
  return 80 * meses_seguros


# --- PRUEBA RAPIDA EN CONSOLA ---
print("=== 1. SEMAFORO PRODUCTOR / MYPE ===")
print(evaluar_cumplimiento_productor(7, "parcial", 1))

print("\n=== 2. ESCENARIOS DE RETRASO (7, 15, 30 DIAS) VS PRESUPUESTO S/ 450 ===")
for dias, datos in proyectar_escenarios_retraso(25, 450).items():
  print(
      f"A los {dias} dias -> Costo retraso: S/ {datos['costo_retraso']} | "
      f"Diferencia vs presupuesto: S/ {datos['diferencia_vs_presupuesto']}"
  )

print("\n=== 3. AVANCE DE REQUISITOS (EJ. 1 DE 3 AL DIA) ===")
print("Porcentaje al dia:", calcular_avance_requisitos(["al_dia", "en_tramite", "pendiente"]), "%")

print("\n=== 4. SUSCRIPCION MYPE ===")
print("Mensual (3 meses): S/", calcular_suscripcion("mensual", 3))
print("Anual: S/", calcular_suscripcion("anual", 12))