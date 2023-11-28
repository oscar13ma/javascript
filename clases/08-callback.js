
//METODO1

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const numbers = [1, 4, 25, 80, 3, 5]
const result = words.filter((word) => word.length > 6);


//METODO 2
function Filter(array,) {
const trueArray = [];

for (let index = 0; index < array.length; index++) {
    if (array[index].length > 6) {
     trueArray.push(array[index])
    }
     
}

return trueArray;

}

const result2 = Filter(words)

// console.log('Result 1: ', result)
// console.log('Result 2: ', result2)

// Expected output: Array ["exuberant", "destruction", "present"]
console.log(words)
console.log(numbers)

numbers.sort((a, b) => a - b) // de menor a mayor b-a (de mayor a menor)
console.log(numbers)

//forma1
// let resultadoBusqueda = words.find((word) => {
// console.log(word)
// return word.length > 6;
// })

//forma2  
let resultadoBusqueda = words.find((word) => word.length > 6) //parecido al while agarra un valor y se detiene ahi, no recorre nada
console.log(resultadoBusqueda)
// let resultadoBusqueda = words.findIndex((word) => word.length > 6)
//foreach no edita arrays, solo recorre
words.forEach((word) => console.log(word)) //es igual al for, nos ahorramos codigo



numbers.forEach((number) => {
console.log(number);
number *= 2;


})

const numbers2 = numbers.map((number) => number * 2)
console.log(numbers);
console.log(numbers2);