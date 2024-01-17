
const notas1 = [5, 7, 9, 10];
const notas2  = [2, 4, 7, 9]



//funcion declarativa
function promediar(notas) {
    


let sumatoria = 0

for (let index = 0; index < notas.length; index++) {
    //sumatoria=sumatoria+numeros
    sumatoria += notas[index];
}
    let promedio = sumatoria / notas.length;

    return promedio; 

}



let promedio1 = promediar(notas1);  
let promedio2 = promediar(notas2);

console.log(promedio1);
console.log(promedio2);


//funcion expresiva/funcion anonima
const mostrarPromedio = function(notas, callback) {
console.log(`las notas son: ${notas}`)
let promedio = callback(notas)

console.log(`el promedio de las notas en todo el año es: ${promedio}`)
}
mostrarPromedio(notas1, promediar)
mostrarPromedio(notas2, promediar); 


//callbacks