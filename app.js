// Declaramos un array para los Productos
const productos = [
{
    id: 1,
    nombre:'ZB 125 R',
    marca:'Zanella',
    precio:500000,
},
{
    id: 2,
    nombre:'RX Z7 150 F',
    marca:'Zanella',
    precio:600000,
},
{
    id: 3,
    nombre:'CB190-R',
    marca:'Honda',
    precio:800000,
},
{
    id: 4,
    nombre:'Wave-110s',
    marca:'Honda',
    precio:450000,
},
{
    id: 5,
    nombre:'AX-100',
    marca:'Suzuki',
    precio:500000,
},
{
    id: 6,
    nombre:'GSX S 750',
    marca:'Suzuki',
    precio:1500000,
}
];

//Primero declaramos una variable del nombre del usuario para dirigirnos derirectamente a él. 
let nombreUsuario = prompt('Hola! Esperamos que te encuentres bien! \nIngresa tu nombre');
//Creamos un while para validar que el nombre no este vacio.
while (nombreUsuario == '') {
    alert('Nombre Invalido 🤨');
    nombreUsuario = prompt('Hola! Esperamos que te encuentres bien! \nIngresa tu nombre aquí');
}

alert('Bienvenido/a '+ nombreUsuario+'\nHora de elegir tu moto! 🏍');

//Funcion para filtrar por precio

function filtrarPrecio(precio) {
    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados;
}

//Dato de entrada:
let precioMax = parseFloat(prompt('Ingrese el precio maximo que deseé!\n(El minimo es de $450.000)\n(Presione 0 para salir):'));

while (precioMax != 0) {
    if (isNaN(precioMax) || precioMax < 0) {
        alert('Valor ingresado invalido 😢');        
    }else{
        const prodsFiltrados = filtrarPrecio(precioMax);
        console.table(prodsFiltrados);
    }
    precioMax = parseFloat(prompt('Ingrese el precio maximo que deseé!\n(El minimo es de $450.000)\n(Presione 0 para salir):'));
};