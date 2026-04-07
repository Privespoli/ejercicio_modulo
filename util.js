// EJERCICIO 1 --------

// Enunciado: Crea un pequeño programa donde el usuario ingrese una temperatura en grados Celsius y, al presionar un botón, se muestre el equivalente en Fahrenheit.
// Requisito: La lógica de la fórmula debe estar en un archivo utils.js y ser exportada. El archivo principal debe importar esa función y usarla para mostrar el resultado en el HTML.
// Tip: Recuerda que los valores que vienen de un <input> son siempre texto (strings). Usa parseFloat() para que la lógica matemática funcione correctamente.




// La fórmula es: (Celsius * 9/5) + 32
export const celsiusAFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};
