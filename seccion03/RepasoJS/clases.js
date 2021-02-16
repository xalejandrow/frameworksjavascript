class Coche {
    
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;

    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}


class Autobus extends Coche {
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.capacidad = 40;
    }

    mostrarCapacidad(){
        return "La capacidad del Autobus es: " + this.capacidad;
    }
}


var autobus1 = new Autobus('PEGASUS', 150, 2017);
console.log("autobus1: ", autobus1);
console.log(autobus1.mostrarCapacidad());

var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 220, 2018);
var coche3 = new Coche('Mercedez', 200, 2017);
var coche4 = new Coche('Renault', 200, 2017);

console.log(coche1);
document.write("<h1>Velocidad:"+coche1.velocidad+"</h1>");
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write("<h1>Velocidad:"+coche1.velocidad+"</h1>");
console.log(coche1);