class Personaje{
	nombre: string;
	edad: number;

	constructor(nombre: string, edad: number){
	this.nombre = nombre;
	this.edad = edad;
	}
}
let nombre: string = "Miguel";
let edad: number = 30;
const PERSONAJE: Personaje = new Personaje(nombre, edad);
console.log(PERSONAJE);
	




