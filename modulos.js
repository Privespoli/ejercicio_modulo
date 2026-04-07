import { celsiusAFahrenheit } from './util';

const boton = document.getElementById('btnConvertir');
const input = document.getElementById('tempInput');
const display = document.getElementById('resultado');

boton.addEventListener('click', () => {
    // 1. Obtenemos el valor y lo convertimos a número
    const valorCelsius = parseFloat(input.value);

    // 2. Validamos que sea un número válido
    if (isNaN(valorCelsius)) {
        display.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // 3. Llamamos a la función importada
    const resultado = celsiusAFahrenheit(valorCelsius);

    // 4. Mostramos el resultado
    display.textContent = `${valorCelsius}°C equivalen a ${resultado.toFixed(2)}°F`;
});