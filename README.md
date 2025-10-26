<h1>Prototipo control de inventario Gastronómico</h1>
<p>versión 1.0 del inventario gastronómico del socio comunitario <b>Matiano Latorre</b></p>
<p>Pequeño prototipo front-end para registrar movimientos de insumos (entradas/salidas), gestionar herramientas y controlar préstamos, desarrollado para uso del socio comunitario <strong>Centro Educacional Mariano Latorre</strong>. Sirve para validar flujos, usabilidad y coherencia visual antes de una posible etapa con backend.</p>

<h2>Contenido del repositorio</h2>
<ul><li><strong>/src (o /)</strong>: HTML, CSS y JavaScript del prototipo.</li><li>Assets: imágenes, íconos y estilos.</li><li>Capturas de pantalla que muestran las ventanas: Insumos, Herramientas, Préstamos.</li><li>README.md (este archivo) con instrucciones y descripción del prototipo.</li></ul>
<hr />
<h2>Estructura del prototipo</h2>
<h3>Ventana Insumos</h3><ul><li>Formulario con: <strong>Nombre del insumo</strong>, <strong>Cantidad</strong>, <strong>Tipo de movimiento</strong> (entrada/salida) y botón <em>Registrar</em>.</li><li>Tabla que muestra <strong>Insumo</strong>, <strong>Cantidad</strong>, <strong>Movimiento</strong> y <strong>Fecha</strong>.</li><li>Validaciones cliente básicas y creación dinámica de filas en el DOM.</li></ul>
<h3>Ventana Herramientas y Equipamiento</h3><ul><li>Formulario con: <strong>Nombre de la herramienta</strong> y <strong>Estado</strong> (Disponible, En uso, En reparación).</li><li>Tabla con <strong>Herramienta</strong> y <strong>Estado</strong>.</li></ul>
<h3>Ventana Préstamos de Herramientas</h3><ul><li>Formulario con: <strong>Herramienta</strong>, <strong>Prestado a</strong> (usuario) y <strong>Fecha de devolución</strong>.</li><li>Tabla con <strong>Herramienta</strong>, <strong>Usuario</strong> y <strong>Fecha de devolución</strong>.</li><li>Validación de fecha para evitar devoluciones anteriores a la fecha actual.</li></ul>
<hr />
<h2>Requisitos e instalación local</h2><p><strong>Requisitos mínimos:</strong></p><ul><li>Navegador moderno (Chrome, Edge, Firefox).</li><li>Servidor estático opcional (recomendado): <code>Live Server</code> en VSCode o <code>python -m http.server</code>.</li></ul>
<p><strong>Pasos para ejecutar localmente:</strong></p><ol><li>Clonar o descargar el repositorio.</li><li>Abrir la carpeta del proyecto en tu editor/IDE.</li><li>Servir los archivos estáticos con un servidor local o abrir <code>index.html</code> en el navegador.</li><li>Probar los flujos: Insumos, Herramientas y Préstamos.</li></ol>
<hr />
<h2>Uso rápido</h2><ol><li>Completar los campos del formulario correspondiente.</li><li>Pulsar el botón de registro (por ejemplo, <em>Registrar Movimiento</em>, <em>Agregar herramienta</em> o <em>Registrar Préstamo</em>).</li><li>Ver la fila añadida en la tabla correspondiente.</li><li>Los datos permanecen en la sesión del navegador hasta recargar la página.</li></ol>
<hr />
<h2>Validaciones implementadas</h2><ul><li>Campos obligatorios con <code>required</code> y normalización <code>trim()</code> en JavaScript.</li><li>Validación de cantidad: conversión a <code>Number</code> y comprobación de que sea mayor que 0.</li><li>Validación de fecha de devolución: no permitir fechas anteriores al día actual.</li><li>Feedback de errores: actualmente mediante <code>alert</code> en el prototipo.</li></ul>
<hr />
<h2>Limitaciones importantes</h2><ul><li>No existe persistencia entre recargas; los registros viven en el DOM de la sesión del navegador.</li><li>No hay backend, autenticación ni control multiusuario.</li><li>No hay edición/eliminación de registros ni gestión centralizada de stock.</li><li>Mensajes de error y accesibilidad mejorables (se usan <code>alert</code> en vez de mensajes inline).</li></ul>
<hr />
<h2>Qué contiene este prototipo para evaluar</h2><ul><li>Interfaz y flujos principales para insumos, herramientas y préstamos.</li><li>Validaciones cliente y comportamiento interactivo (preventDefault, DOM dinámico).</li><li>Artefacto para recoger feedback del socio comunitario y priorizar próximas etapas.</li></ul>
<hr />
<h2>Siguientes pasos (documentados pero no implementados aquí)</h2><ul><li>Persistencia (localStorage para demo o API + base de datos en etapa 2).</li><li>Reemplazo de <code>alert</code> por mensajes inline accesibles.</li><li>Operaciones CRUD completas (editar/eliminar), control de stock y bloqueo de préstamos si la herramienta no está disponible.</li><li>API REST y autenticación para despliegue multiusuario.</li></ul>
<hr />
<h2>Licencia</h2><p>Licencia MIT — libre para uso y adaptación. Ajustar según necesidades institucionales.</p>
<hr />
<h2>Contacto</h2><p>Proyecto desarrollado para Centro Educacional Mariano Latorre. Para consultas o comentarios sobre el prototipo, abrir un issue en este repositorio o contactar al autor responsable del proyecto (mauricio henríquez mauro.ahenriquezperez@gmail.com).</p>


