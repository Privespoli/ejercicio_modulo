// EJERCICIO 4

// // Enunciado: Crea un campo de contraseña. Debajo, debe haber un texto que diga "Seguridad: Débil" o "Seguridad: Fuerte". El texto debe actualizarse cada vez que el usuario escribe algo (sin necesidad de botón).
// Requisito: La función de validación no debe recibir parámetros, sino capturar el valor directamente o ser ejecutada en el evento input.
// Tip: En lugar de click, utiliza el evento input en el addEventListener para que la respuesta sea inmediata mientras el alumno escribe.

export const verificarSeguridad = (password) => {
  // Si tiene 8 o más caracteres es Fuerte, si no, Débil
  if (password.length >= 8) {
    return { texto: "Fuerte", color: "green" };
  } else {
    return { texto: "Débil", color: "red" };
  }
};
