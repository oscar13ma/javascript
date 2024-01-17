console.log(window)
console.log(navigator)
console.log('El navigator esta conectado? ', navigator.onLine)

if (navigator.onLine) {
    console.log('estoy conectado');

} else {
    console.log('no tengo internet :(')

}

navigator.geolocation.getCurrentPosition((pos) => {
console.log('Mi posicion es: ', pos);

});
console.log(location)
// location.assign('https://www.google.com.ar/') //cambia directamente sino tengo ningun if
// location.reload();  //recara pagina automaticamente
console.log(history)
console.log(screen)



let contador;

let intervalo1 = setInterval(() => {
    console.log('Hola1')
    
     contador =0;

    
    
},3000);
let intervalo2 = setInterval(() => {
    console.log('Hola2')
} ,2000);

setTimeout(() => {
    clearInterval(intervalo1)
    clearInterval(intervalo2)
    console.log(contador)
}, 4000)

// clearInterval(intervalo1);
let usuario = {};


setTimeout(() => {
usuario.nombre = 'oscar';
usuario.apellido = 'mamani';
usuario.edad = 31;
usuario.pais = 'argentina';
console.log(usuario)
}, 5000)


const promesa1 = new Promise((resolve, reject) =>{
setTimeout(() =>{
    resolve('todo ok');
}, 2000);
});
console.log(promesa1)
// promesa1.then((res) => {
//     console.log(res)
// })
const promesa2 = new Promise((resolve, reject) =>{
setTimeout(() =>{
    resolve('todo ok2');
}, 3000);
});

async function funcionAsincronica() {
const response = await promesa1;
console.log(response)
const response2 = await promesa2;
console.log(response2)
}

funcionAsincronica();                                          //reemplaza lo de abajo


// promesa1
// .then((response) =>{
//     console.log(response)
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve('todo ok2');
//         }, 2000);
//         });
// })
// .then((response) => {
//     console.log(response)
//    return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve('todo ok3');
//         }, 3000);
//         }) ;
// }).then((response) => {
//     alert(response)
// })
 




// console.log(promesa1);



// console.log(usuario);

// console.log(history);



