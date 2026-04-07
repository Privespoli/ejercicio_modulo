// EJERCICIO 5
// Enunciado: Crea un contador simple con dos botones: "+" y "-". El número no puede ser menor a 0 ni mayor a 10.
// Requisito: Crea un módulo que gestione el incremento y decremento. Las funciones deben recibir el valor actual y devolver el nuevo valor, validando los límites dentro de la función.
// Tip: Usa variables para guardar el estado del contador en tu archivo JS principal, y actualiza el textContent del elemento HTML cada vez que cambie el valor.



// Lógica de incremento con límite en 10
export const incrementar = (valorActual) => {
    if (valorActual < 10) {
        return valorActual + 1;
    }
    return valorActual; // Si ya es 10, no sube más
};

// Lógica de decremento con límite en 0
export const decrementar = (valorActual) => {
    if (valorActual > 0) {
        return valorActual - 1;
    }
    return valorActual; // Si ya es 0, no baja más
};