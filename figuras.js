// Codigo del cuadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;

//console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

function perimetroCuadrado(lado){
    return lado* 4;
}

console.log("El perimetro del cuadrado es: "+perimetroCuadrado(5)+"cm");

function areaCuadrado(lado){
    return lado * lado;
}

console.log("El area del cuadrado es: "+areaCuadrado(5)+"cm^2");
console.groupEnd();

// Codigo del Triangulo

console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log("Los lados del triangulo miden: "+ladoTriangulo1+"cm, "+ladoTriangulo2+"cm, "+baseTriangulo+"cm" );
//console.log("La altura del triangulo es de: "+alturaTriangulo+"cm");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}
console.log("El perimetro del triangulo es: "+perimetroTriangulo(6,6,4)+"cm");

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
console.log("El area del triangulo es: "+areaTriangulo(4,5.5)+"cm^2");
console.groupEnd();

// COdigo del Circulo

console.group("Circulos");
//const radio = 4;
const PI = Math.PI;

//console.log("El radio del circulo es de: "+radio*2);
//console.log("El diametro del circulo es de: "+radio*2);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return PI * diametro;
} 

console.log("El perimetro del circulo es: "+perimetroCirculo(4)+"cm");

function areaCirculo(radio){
    return PI * (radio * radio);
}

function diametroCirculo(radio){
    return radio * 2;
}
console.log("El area del circulo es: "+areaCirculo(4)+"cm^2");

console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    
    const perimetro = perimetroCuadrado(lado);
    let resultado = document.getElementById('inputResultado');
    resultado.value = perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    
    const area = areaCuadrado(lado);

    let resultado = document.getElementById('inputResultado');
    resultado.value = area;
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputlado1");
    const lado = parseFloat(input.value);
    const input1 = document.getElementById("inputlado2");
    const lado1 = parseFloat(input1.value);
    const input2 = document.getElementById("inputlado3");
    const lado2 = parseFloat(input2.value);
    
    const perimetro = perimetroTriangulo(lado,lado1,lado2);

    let resultado = document.getElementById('inputResTriangulo');
    resultado.value = perimetro;
}

function calcularAreaTriangulo(){
    const input = document.getElementById("inputlado3");
    const base = input.value;
    const input1 = document.getElementById("inputAltura");
    const altura = input1.value;
    
    const area = areaTriangulo(base, altura);

    let resultado = document.getElementById('inputResTriangulo');
    resultado.value = area;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = parseFloat(input.value);

    const perimetro = perimetroCirculo(radio);

    let resultado = document.getElementById('inputResCirculo');
    resultado.value = perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = parseFloat(input.value);
    
    const area = areaCirculo(radio);

    let resultado = document.getElementById('inputResCirculo');
    resultado.value = area;
}


