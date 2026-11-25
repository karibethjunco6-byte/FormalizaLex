# FormalizaLex — Tu Abogado en Regla

Herramienta de apoyo al cumplimiento normativo y ambiental diseñada para **micro y pequeñas empresas (MYPES)** y pequeños productores en el Perú (pesca artesanal, agroindustria, manufactura, minería a pequeña escala, entre otros rubros).

## El problema
Muchos pequeños productores y MYPES enfrentan obligaciones legales y ambientales dispersas en normas y resoluciones técnicas complejas. Por falta de acceso a asesoría legal especializada, suelen incumplir por desconocimiento y recién advierten el riesgo cuando llega una sanción, multa o paralización.

## Nuestra solución
FormalizaLex acompaña a la empresa o productor con un enfoque práctico y preventivo:
* **Diagnóstico guiado sin tecnicismos:** cuestionario simple sobre rubro, actividad, ubicación, tamaño y estado actual de permisos o instrumentos ambientales.
* **Matriz personalizada y semáforo preventivo (Verde / Amarillo / Rojo):** muestra qué obligaciones aplican, su base legal, cuánto tiempo falta para vencer un plazo y el nivel de alerta.
* **Traductor legal con IA:** explica normas, requisitos y trámites en lenguaje cotidiano con un paso a paso claro, evitando caer en tramitadores.
* **Calendario de alertas e informe descargable:** recuerda vencimientos clave (reportes de monitoreo, declaraciones en SIGERSOL, hitos de formalización u otras obligaciones del sector) y genera un plan de acción priorizado.

## ¿A quién está dirigido?
* **MYPES y pequeños productores:** pesca artesanal, agroindustria, manufactura, minería a pequeña escala y actividades afines.
* **Aliados de acompañamiento:** gremios, asociaciones productivas, cámaras de comercio y estudios jurídicos pequeños que orientan a estos negocios.

## Arquitectura técnica del prototipo
* **Motor determinista en Python:** evalúa respuestas, fechas, hitos y plazos legales con precisión para asignar obligaciones y calcular el estado del semáforo.
* **Interfaz web:** formulario paso a paso y vista visual clara para consultar resultados y alertas.
* **Base de datos normativa:** organiza obligaciones verificadas por rubro, entidad competente, periodicidad y base legal.
* **IA aplicada con controles:**
  * **Control de alucinaciones:** la IA no inventa normas; traduce a lenguaje sencillo únicamente la información proveniente de la base normativa verificada.
  * **Confidencialidad:** minimización de datos sensibles y tratamiento responsable conforme a la Ley N.° 29733 (Ley de Protección de Datos Personales).
  * **Supervisión humana:** los reportes tienen carácter preventivo y orientativo, y no sustituyen la revisión legal profesional ni los trámites oficiales ante la autoridad competente.

## Modelo de negocio (referencial)
* **Diagnóstico único:** S/ 150 – S/ 300 (matriz de obligaciones + semáforo + informe con ruta de acción).
* **Suscripción mensual:** S/ 60 – S/ 120 (alertas tempranas de vencimientos, actualizaciones normativas y traductor legal).
* **Planes para gremios y estudios jurídicos:** tarifa escalonada según cartera de asociados o clientes.

## Diferenciador clave
A diferencia de los portales normativos difíciles de interpretar o de los chatbots genéricos que pueden inventar artículos, **FormalizaLex** combina **reglas jurídicas deterministas** con **traducción clara asistida por IA**, ayudando a las MYPES a prevenir incumplimientos y ordenar su formalización.

## Estado del proyecto
Prototipo en desarrollo. La información entregada es referencial y preventiva; para decisiones legales o procedimientos administrativos específicos se recomienda validar con un abogado especialista o la entidad correspondiente.
