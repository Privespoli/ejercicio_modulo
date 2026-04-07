// 1. IMPORTS AL PRINCIPIO
import { celsiusAFahrenheit } from './util.js';
import saludar from './saludos.js';
import { calcularAreaCuadrado, calcularAreaCirculo } from './area_cuadrado.js';
import { verificarSeguridad } from './password.js';
import { incrementar, decrementar } from './contador.js';

// --- EJERCICIO 1: TEMPERATURA ---
const tempBoton = document.getElementById('btnConvertir');
const tempInput = document.getElementById('tempInput');
const tempDisplay = document.getElementById('resultado');

tempBoton.addEventListener('click', () => {
    const valorCelsius = parseFloat(tempInput.value);
    if (isNaN(valorCelsius)) {
        tempDisplay.textContent = "Ingresa un número";
        return;
    }
    const resultado = celsiusAFahrenheit(valorCelsius);
    tempDisplay.textContent = `${resultado.toFixed(2)}°F`;
});

// --- EJERCICIO 2: SALUDOS ---
const saludoBoton = document.getElementById('btnSaludar');
const saludoInput = document.getElementById('nombreInput');
const saludoSelect = document.getElementById('idiomaSelect');
const saludoDisplay = document.getElementById('resultadoSaludo');

saludoBoton.addEventListener('click', () => {
    const nombre = saludoInput.value.trim();
    const idioma = saludoSelect.value;
    if (nombre === "") {
        saludoDisplay.textContent = "Escribe un nombre";
        return;
    }
    saludoDisplay.textContent = saludar(nombre, idioma);
});

// --- EJERCICIO 3: GEOMETRÍA (Solo Círculo según tu HTML) ---
const rInput = document.getElementById('circuloInput');
const rBoton = document.getElementById('circuloBtn');
const rDisplay = document.getElementById('circuloRes');

rBoton.addEventListener('click', () => {
    const radio = parseFloat(rInput.value);
    if (!isNaN(radio) && radio > 0) {
        const area = calcularAreaCirculo(radio);
        rDisplay.textContent = `Área: ${area.toFixed(2)} u²`;
    } else {
        rDisplay.textContent = "Radio inválido";
    }
});


// --- EJERCICIO 3.1: ÁREA CUADRADO ---
const cInput = document.getElementById('cuadradoInput');
const cBoton = document.getElementById('cuadradoBtn');
const cDisplay = document.getElementById('cuadradoRes');

// Verificamos que los elementos existan antes de poner el listener
if (cBoton) {
    cBoton.addEventListener('click', () => {
        const lado = parseFloat(cInput.value);
        
        if (!isNaN(lado) && lado > 0) {
            // Usamos la función que ya importaste de area_cuadrado.js
            const area = calcularAreaCuadrado(lado);
            cDisplay.textContent = `Resultado: ${area.toFixed(2)} u²`;
            cDisplay.style.color = "#28a745"; // Un toque de verde al éxito
        } else {
            cDisplay.textContent = "Lado no válido";
            cDisplay.style.color = "#dc3545"; // Rojo si hay error
        }
    });
}
// --- EJERCICIO 4: PASSWORD ---
const pInput = document.getElementById('passInput');
const pBadge = document.getElementById('passNivel');

pInput.addEventListener('input', () => {
    const password = pInput.value;
    const resultado = verificarSeguridad(password);
    
    pBadge.textContent = resultado.texto;
    // Aplicamos el color al badge usando el objeto que devuelve tu función
    pBadge.style.backgroundColor = (resultado.color === 'green') ? '#28a745' : '#dc3545';
});

// --- EJERCICIO 5: CONTADOR ---
const displayContador = document.getElementById('numeroDisplay');
const btnMas = document.getElementById('btnMas');
const btnMenos = document.getElementById('btnMenos');

let cuenta = 0;

btnMas.addEventListener('click', () => {
    cuenta = incrementar(cuenta);
    displayContador.textContent = cuenta;
});

btnMenos.addEventListener('click', () => {
    cuenta = decrementar(cuenta);
    displayContador.textContent = cuenta;
});