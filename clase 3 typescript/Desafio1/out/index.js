var Personaje = /** @class */ (function () {
    function Personaje(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Personaje;
}());
var nombre = "Miguel";
var edad = 30;
var PERSONAJE = new Personaje(nombre, edad);
console.log(PERSONAJE);
