
// (() =>{
'use strict'
// area y perimetro del cuadrado
let perimSquare = (side) => side * 4;
let areaSquare = (side) => side * side;
function calculatePerimSquad() {
    let inputSide = document.getElementById('inputSide')
    let value = Number(inputSide.value);

    const result = `El perimetro del cuadrado es: ${perimSquare(value)} cm `
    document.getElementById('resultado').innerText = result;
}
function calculateareaSquad() {
    let inputSide = document.getElementById('inputSide')
    let value = Number(inputSide.value);

    const result = `El Area del cuadrado es: ${areaSquare(value)} cm^2 `
    document.getElementById('resultado').innerText = result;
}

// perimetro y area del triangulo

let perimTriangle = (side1, side2, side3) => side1 + side2 + side3;
let areaTriangle = (base, altura) => (base * altura) / 2;
function calculatePerimTriangle() {
    let side1 = document.getElementById('side1')
    let side2 = document.getElementById('side2')
    let side3 = document.getElementById('side3')
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);
    const result = `El perimetro del triangulo es: ${perimTriangle(side1, side2, side3)} cm `
    document.getElementById('resultado').innerText = result;
}

function calculateareaTriangle() {
    let base = document.getElementById('base')
    let altura = document.getElementById('altura')
    base = Number(base.value);
    altura = Number(altura.value);
    const result = `El Area del triangulo es: ${areaTriangle(base, altura)} cm^2 `
    document.getElementById('resultado').innerText = result;
}
// area,perimetro y diametro de circulo
let diamCircle = (radio) => radio * 2;
let perimCircle = (radio) => diamCircle(radio) * Math.PI;
let areaCircle = (radio) => (radio * radio) * Math.PI;

function calculateDiamCircle() {
    let radio = document.getElementById('radio')
    radio = Number(radio.value);

    const result = `El Diametro del circulo es: ${diamCircle(radio)} cm `
    document.getElementById('resultado').innerText = result;
}
function calculatePerimCircle() {
    let radio = document.getElementById('radio')
    radio = Number(radio.value);

    const result = `El perimetro del circulo es: ${perimCircle(radio)} cm `
    document.getElementById('resultado').innerText = result;
}
function calculateareaCircle() {
    let radio = document.getElementById('radio')
    radio = Number(radio.value);

    const result = `El Area del Circulo es: ${areaCircle(radio)} cm^2 `
    document.getElementById('resultado').innerText = result;
}

// })();
