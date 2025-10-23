//const titulo = document.getElementById('titulo');
//console.log(titulo);

/* const elementos = document.querySelectorAll('h1#titulo2');
console.log(elementos); */

/* const elemento = document.querySelector('p')
console.log(elemento); */

/* const elemento = document.getElementsByClassName('titulo5')
console.log(elemento);
 */

/* const elemento = document.getElementsByTagName('p');
console.log(elemento); */

const titulo1 = document.getElementById('titulo1');
const btnPrueba = document.getElementById('btn');
const [titulo5] = document.getElementsByClassName('titulo5');
const [label] = document.getElementsByTagName('label');

const pagina = document.querySelector('body');

titulo5.addEventListener('click', () => {
    titulo5.innerText = "javascript";
});


/* btnPrueba.addEventListener('click', () => {
    let valor = parseInt(numero.innerText);
    numero.innerText = ++valor;
}); */

/* numero.addEventListener('mouseover', function (e) {
    let valor = parseInt(numero.innerText);
    numero.innerText = ++valor;
    console.log(e);
}); */

/* titulo.addEventListener('click', function () {
    numero.innerText = "javascript";
});
 */

document.addEventListener('keydown', () => {
    titulo5.innerText = "javascript";
});

/* btnPrueba.addEventListener('click', () => {
    if (titulo1.style.color === 'red') {
        titulo1.style.color = 'black';
    } else {
        titulo1.style.color = 'red';
    }
}) */

/* btnPrueba.addEventListener('click', () => {
    titulo1.style.color = titulo1.style.color === 'red' ? 'black' : 'red';
}) */

// btnPrueba.addEventListener('click', () => {
//     titulo5.classList.toggle('cambio1');
//     titulo5.classList.toggle('change2');
// })


btnPrueba.addEventListener('click', () => {
    pagina.classList.toggle('dark');
});


const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');
const btnCalc = document.getElementById('btnCalc');

/* btnCalc.addEventListener('click', () => {
    let result = parseInt(num1.value) * parseInt(num2.value);
    resultado.value = result;
    num1.value = '';
    num2.value = '';
}); */

/* btnCalc.addEventListener('click', () => {
    console.log(eval(11 * 6));
}); */

function prueba(valor) {

    console.log(`El valor es ${valor}`);
}
