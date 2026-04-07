
// Hacer un modal con un formulario que pida el nombre, el modal viene siendo una pantalla emergente, usando funciones deben capturar el nombre que se coloque en el input del formulario, al momento de darle al boton de enviar el modal debe cerrarse y en la pantalla final (la pantalla que está detras de esa ventana emergente) se debe pintar el nombre 
// recuerden que deben usar funciones, módulos y parámetros dentro de las funciones
// pueden usar innerHTML


// Exportamos una función que procesa el nombre
export const procesarNombre = (nombre) => {
    const nombreLimpio = nombre.trim();
    if (nombreLimpio === "") return "Invitado Anónimo";
    return nombreLimpio;
};