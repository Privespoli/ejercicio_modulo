// EJERCICIO 2 --------
// Usamos un objeto para mapear los idiomas, es más limpio que un switch
const saludos = {
    es: "¡Hola",
    en: "Hello",
    fr: "Bonjour",
    pt: "Olá"
};

const generarSaludo = (nombre, idioma) => {
    const prefijo = saludos[idioma] || "Hola"; // "Hola" por defecto
    return `${prefijo}, ${nombre}! :D `;
};

export default generarSaludo;