let nombre = "Ada"
let apellido = "Lovelace"
let saludo = "Hola"
/* 6. gritar(str)
Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo
gritar('hola') // ¡hola!
gritar('aaaaaa') // ¡aaaaaa!

*/


const gritar = (frase) => {

    return "¡" + frase + "!"

}


console.log(gritar("Goooool"))


/*7. obtenerNombreCompleto(nombre, apellido)
Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y 
devuelva un string con la unión de ambos valores

obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace' */

const obtenerNombreCompleto = (nombre, apellido) => {

    return nombre + " " + apellido

}

console.log(obtenerNombreCompleto(nombre, apellido))

/*8. saludar(nombre)
Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.

saludar('Ada') // 'Hola Ada, un gusto conocerte' */

const saludar = (saludo, nombre) => {

    return saludo + " " + nombre + ", un gusto conocerte"
}

console.log(saludar(saludo, nombre))



/* 9. saludarGritando(nombre, apellido)
Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), 
crear una función saludarGritando que tome como argumentos un nombre y un apellido y 
devuelva un saludo con signos de exclamación.

saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte! 


TIP: recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante 

const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
const saludo = saludar(nombreCompleto)
const grito = gritar(saludo)
console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!*/

console.log(gritar(saludar(saludo, nombre)))