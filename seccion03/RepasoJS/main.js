// alert('Hola Mundo!!!');

var nombre = "Alew";
var altura = 160;

var concatenacion = nombre + " " + altura;
/* document.write(nombre);
document.write(altura); */
/* 
document.write(concatenacion);

var datos = document.getElementById("datos");
datos.innerHTML = `
            <h1>Soy la caja de datos <h1>
            <h2>Mi nombre es ${nombre}</h2>
            <h3>Mido: ${altura} </h3>
           `;

if(altura <= 160){
    datos.innerHTML += '<h1>Eres una persona BAJA</h1>';
}else{
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>';
}

for(var i = 2000; i <= 2020; i++){
    // bloque de insctrucciones
    datos.innerHTML += '<h2>Estamos en el año: '+i+'</h2>';
}
 */
/* function MuestraMiNombre(nombre, altura){
    var datos = document.getElementById("datos");
    datos.innerHTML = `
            <h1>Soy la caja de datos <h1>
            <h2>Mi nombre es ${nombre}</h2>
            <h3>Mido: ${altura} </h3>
           `;
} */

function MuestraMiNombre(nombre, altura){
    var misDatos = `
            <h1>Soy la caja de datos <h1>
            <h2>Mi nombre es ${nombre}</h2>
            <h3>Mido: ${altura} </h3>
           `;
           return misDatos;
}
function imprimir(){
    datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Alew 2", 160);
}

// MuestraMiNombre("Alew", 160);
imprimir();

var nombres = ['Víctor', 'Antonio', ' Joaquín'];

// alert(nombres[1]);

document.write('<h1>Listado de Nombres</h1>');
for(var i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}


nombres.forEach(function(nombre){
    document.write(nombre + '<br/>');
});


// Objeto JSON

var coche = {
    modelo: 'Mercedez Clase C',
    maxima: 250,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>");
document.write("<h1>"+coche.antiguedad+"</h1>");
coche.mostrarDatos();
console.log(coche);