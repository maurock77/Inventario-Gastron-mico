/**
 * ===========================================
 * Sistema de control de inventario - taller de gastronomía
 * ===========================================
 * 
 * este script maneja tres secciones principales
 * 1.control de insumos (entrada/salida)
 * 2.registro de herramientas
 * 3.control de prestamos
 */

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * =================================
     * sección 1: control de insumos
     * =================================
     * esta sección maneja la entrada y salida de insmos como harina, aceite, etc.
     */

    // obtiene referencias a los elementos del formulario de insumos
    var formInsumos = document.querySelector('#Insumos form');
    var nombreInsumo = document.getElementById('nombre-insumo');
    var cantidadInsumo = document.getElementById('cantidad-insumo');
    var tipoMovimiento = document.getElementById('tipo-movimiento');
    var tablaInsumos = document.querySelector('#Insumos tbody');

    /**
     * obtiene ka fecha actual en formulario en formato DD/MM/YYYY
     * @returns {string} fecha formateada (ejemplo: "25/10/2025")
     */
    function obtenerFechaActual() {
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var año = fecha.getFullYear();
        
        // agrega cero adelante si el número es menor a 10
        if (dia < 10) dia = '0' + dia;
        if (mes < 10) mes = '0' + mes;
        
        return dia + '/' + mes + '/' + año;
    }

    /**
     * capitaliza la primera letra de un texto
     * @param {string} texto - el texto a capitalizar
     * @returns {string} texto con la primera letra en mayúscula
     * ejemplo: entrada -> Entrada
     */
    function capitalizar(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

    // Manejar envío del formulario de insumos
    if (formInsumos) {
        formInsumos.addEventListener('submit', function(e) {
            // prevenir el comportamiento por defecto del formulario (recargar la pagina)
            e.preventDefault();

            // obtiene los valores ingresados por el usuario
            var nombre = nombreInsumo.value.trim(); // trim elimina espacios al inicio y al final
            var cantidad = cantidadInsumo.value;
            var tipo = tipoMovimiento.value;
            var fecha = obtenerFechaActual();

            
            /**
             * =======================
             * validaciones
             * =======================
             * 
             * valida que el nonbre no este vacío
             */
            if (nombre === '') {
                alert('Por favor ingresa el nombre del insumo');
                return;
            }

            // valida que la cantidad sea un número valido y mayor a 0
            if (cantidad === '' || cantidad < 1) {
                alert('Por favor ingresa una cantidad válida');
                return;
            }

            /**
             * =====================
             * crea  y agrega nueva fila a la tabla
             * =====================
             */

            // Crea el elemento <tr> (fila de tabla)
            var nuevaFila = document.createElement('tr');
            
            // Crear celda para el nombre del insumo
            var celdaNombre = document.createElement('td');
            celdaNombre.textContent = nombre;
            
            // crea la celda para la cantidad (agregando kg al final)
            var celdaCantidad = document.createElement('td');
            celdaCantidad.textContent = cantidad + ' kg';
            
            // crear celda para el tipo de movimiento (entrada o salida)
            var celdaTipo = document.createElement('td');
            celdaTipo.textContent = capitalizar(tipo);
            
            // crear celda para la fecha
            var celdaFecha = document.createElement('td');
            celdaFecha.textContent = fecha;

            // Agregar celdas a la fila
            nuevaFila.appendChild(celdaNombre);
            nuevaFila.appendChild(celdaCantidad);
            nuevaFila.appendChild(celdaTipo);
            nuevaFila.appendChild(celdaFecha);

            // Agregar fila completa a la tabla
            tablaInsumos.appendChild(nuevaFila);

            // Limpiar formulario para el siguiente registro
            formInsumos.reset();
        });
    }

    /**
     * ==========================
     * sección 2: registro de herramientas
     * ==========================++++++++++++++++++++++++++
     * esta sección maneja el inventario de herramientas y su estado
     */

    // obtener referencias a los elementos de formulario de herramientas
    var formHerramientas = document.querySelector('#Herramientas form');
    var nombreHerramienta = document.getElementById('nombre-herramienta');
    var estadoHerramienta = document.getElementById('estado-herramienta');
    var tablaHerramientas = document.querySelector('#Herramientas tbody');

    // manejar el evento de envío del formulario de herramientas
    if (formHerramientas) {
        formHerramientas.addEventListener('submit', function(e) {
            e.preventDefault();

            // obtener valres del formulario
            var nombre = nombreHerramienta.value.trim();
            var estado = estadoHerramienta.value;

            // validar que el nombre no esté vacío
            if (nombre === '') {
                alert('Por favor ingresa el nombre de la herramienta');
                return;
            }

            /**
             * ===================
             * crear y agregar nueva fila
             * ===================
             */
            var nuevaFila = document.createElement('tr');
            
            // crear celda para el nombre de la herramienta
            var celdaNombre = document.createElement('td');
            celdaNombre.textContent = nombre;
            
            // crear celda para el estado
            var celdaEstado = document.createElement('td');
            celdaEstado.textContent = estado === 'disponible' ? 'Disponible' : 'En Reparación';

            // agregar celdas a la fila
            nuevaFila.appendChild(celdaNombre);
            nuevaFila.appendChild(celdaEstado);

            // agregar fila a la tabla
            tablaHerramientas.appendChild(nuevaFila);

            // limpiar formulario
            formHerramientas.reset();
        });
    }

    /**
     * =======================
     * sección 3: control de préstamos
     * =======================
     * esta secciónregistra prestamos de herramientas a usuarios
     */

    // obtener referencias a los elementos del formulario de prestamos
    var formPrestamos = document.querySelector('#prestamos form');
    var herramientaPrestamo = document.getElementById('herramienta-prestamo');
    var nombreUsuario = document.getElementById('nombre-usuario');
    var fechaDevolucion = document.getElementById('fecha-devolución');
    var tablaPrestamos = document.querySelector('#prestamos tbody');

    /**
     * formatea una fecha del formulario YYYY-MM-DD al formato DD/MM/YYYY
     * @param {string} fechaInput - fecha en formato iso (YYYY-MM-DD)
     * @returns {string} fecha formateada (DD-MM-YYYY)
     * ejemplo: 2025-10-26 -> 26/10/2025
     */
    function formatearFechaInput(fechaInput) {
        // si no hay fecha, retornar cadena vacía
        if (!fechaInput) return '';
        
        // separar la fecha por el guión
        var partes = fechaInput.split('-');
        var año = partes[0];
        var mes = partes[1];
        var dia = partes[2];
        
        // retornar en formato DD/MM/YYYY
        return dia + '/' + mes + '/' + año;
    }

    // anejar el evento de envío del formulario de prestamos
    if (formPrestamos) {
        formPrestamos.addEventListener('submit', function(e) {
            e.preventDefault();

            // obtener valores del formulario
            var herramienta = herramientaPrestamo.value.trim();
            var usuario = nombreUsuario.value.trim();
            var fecha = fechaDevolucion.value;

            /**
             * =================
             * validaciones
             * =================
             */

            // validar nombre de herramientas
            if (herramienta === '') {
                alert('Por favor ingresa el nombre de la herramienta');
                return;
            }

            // validar nombre de usuario
            if (usuario === '') {
                alert('Por favor ingresa el nombre del usuario');
                return;
            }

            // validar que se haya selecionado una fecha
            if (fecha === '') {
                alert('Por favor selecciona una fecha de devolución');
                return;
            }

            /**
             * ========================
             * crear y agregar nueva fila
             * ========================
             */

            var nuevaFila = document.createElement('tr');
            
            // crear celda para la herramienta prestada
            var celdaHerramienta = document.createElement('td');
            celdaHerramienta.textContent = herramienta;
            
            // crear celda para el usuario que recibe el prestamo
            var celdaUsuario = document.createElement('td');
            celdaUsuario.textContent = usuario;
            
            // crear celda oara la fecha de devolución (formateada)
            var celdaFecha = document.createElement('td');
            celdaFecha.textContent = formatearFechaInput(fecha);

            // agregar celdas a la fila
            nuevaFila.appendChild(celdaHerramienta);
            nuevaFila.appendChild(celdaUsuario);
            nuevaFila.appendChild(celdaFecha);

            // agregar fila a la tabla
            tablaPrestamos.appendChild(nuevaFila);

            // limpiar formulario
            formPrestamos.reset();
        });
    }

});

/**
 * =================================
 * NOTAS IMPORTANTES
 * =================================
 * 
 * 1. este script no guarda datos en el servidor ni en localstorage
 *      por lo que los datos se perderán al recargar la página
 * 
 * 2. no hay funcionalidad de editar o eliminar registros
 *      se pueden agregar en futuras versiones
 * 
 * 3. las validaciones son básicas, en un sistema real se debería tomar en cuenta
 *      -verificación de caracteres especiales
 *      -limitar longitud de caracteres
 *      -validar formato de números
 */