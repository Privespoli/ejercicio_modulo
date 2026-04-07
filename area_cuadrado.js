// EJERCICIO 3
// Enunciado: Crea una página que permita calcular el área de un cuadrado y de un círculo.
// Requisito: En un archivo llamado geometria.js, crea y exporta dos funciones distintas: calcularAreaCuadrado(lado) y calcularAreaCirculo(radio). Impórtalas de forma "nombrada" (usando llaves) en tu archivo principal.
// Tip: Para el círculo, JavaScript ya tiene el valor de Pi listo para usar con Math.PI.


// Exportamos funciones específicas
export const calcularAreaCuadrado = (lado) => {
    return lado * lado;
};

export const calcularAreaCirculo = (radio) => {
    // Fórmula: π * r²
    return Math.PI * Math.pow(radio, 2);
};
