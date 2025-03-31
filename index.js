// 1
console.log("Mostrar un mensaje por consola");

// 2
const array = ["agregado","Me", "Gusta", "DAI"];

function mostrarArray() {
    array.forEach(palabra => {
        console.log(palabra)
    });
}

mostrarArray();

const array2 = [3, 2, 1, 2];

const mostrarArraySeg = () =>{
    array2.forEach(palabra => {
        console.log(palabra)
    });
}

mostrarArraySeg();

// 3

const agregarValorArray = () => {
    array.push("agregado");
    mostrarArray();
}

agregarValorArray();

//4

const ultPos = array.lastIndexOf("agregado");

console.log(`La última posicion de la palabra agregado en el array es ${ultPos}`);

// 5

console.log(array2.reduce((suma, currentValue = 0) => suma + currentValue));

// 6

const invertir = array2.reverse()

console.log(invertir);

// 7
let ordenar = array2.sort((a, b) => a - b);
console.log(ordenar);

// 8

let filtro = array2.filter((numero) => numero > 2);
console.log(filtro);

// 9 

let contar = array2.filter(num => num === 2).length;
console.log(contar);