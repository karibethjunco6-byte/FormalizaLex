# FormalizaLex — Tu Abogado en Regla

Prototipo de apoyo al cumplimiento normativo y ambiental diseñado para **micro y pequeñas empresas (MYPES)** y pequeños productores en el Perú (pesca artesanal, agroindustria, manufactura, minería a pequeña escala y rubros afines).

## El problema

Muchas MYPES y pequeños productores enfrentan obligaciones legales y ambientales dispersas en normas y procedimientos técnicos complejos. Por falta de acceso a asesoría especializada oportuna, suelen incurrir en omisiones por desconocimiento y recién detectan el riesgo cuando aparece una sanción, multa o paralización operativa.

## Qué resuelve este prototipo

FormalizaLex ordena la revisión inicial de cumplimiento con un enfoque preventivo y práctico:

* **Selección por rubro y diagnóstico guiado:** permite consultar obligaciones aplicables según actividad, rubro, base legal, entidad competente, aplicabilidad y plazos.
* **Semáforo preventivo (Verde / Amarillo / Rojo):** clasifica el nivel de atención según criticidad y proximidad de vencimiento o estado de cumplimiento.
* **Simulador de escenarios de retraso:** proyecta impactos y costos referenciales en horizontes de **7, 15 y 30 días** para dimensionar el costo de postergar la regularización.
* **Seguimiento de tareas y plan Mype:** apoya el registro de pendientes o bitácora y una vista de plan o suscripción referencial para organizar la formalización.

*(Nota de diseño: el enfoque de explicación en lenguaje sencillo y alertas periódicas forma parte de la evolución del producto sobre la base normativa verificada, sin depender de respuestas libres o inventadas por IA).*

## ¿A quién está dirigido?

* **MYPES y pequeños productores:** pesca artesanal, agroindustria, manufactura, minería a pequeña escala y actividades productivas afines.
* **Aliados de acompañamiento:** gremios, asociaciones productivas, cámaras de comercio y estudios jurídicos que orientan a emprendedores y negocios en formalización.

## Estructura del proyecto

```text
FormalizaLex/
|-- base-normativa.json   # Base de datos normativa estructurada por rubro
|-- Formalizalex.py       # Lógica en Python: carga de datos, semáforo, escenarios y planes
|-- index.html            # Estructura de la interfaz web
|-- style.css             # Estilos visuales de la aplicación
|-- script.js             # Interacción en el navegador sincronizada con la base normativa