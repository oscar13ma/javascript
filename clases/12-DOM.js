const nombre = prompt('Ingrese su nombre');

document.body.innerHTML += `<p>Esto es un parrafo</p>`;

const title = document.getElementById('title');

title.innerHTML = `<h1>Hola ${nombre}</h1>`;
prueba.innerHTML = `Hola ${nombre}`;

const button = document.querySelector('button');
console.log(button);

document.body.appendChild(title.cloneNode(true));
document.body.removeChild(title);

const nomeTOques = document.querySelector('#btn-dont') //const para evitar errores
 
// const handlerBtnDont = () => {

// }

//o de otra manera asi
// function handlerBtnDont() {

// }

nomeTOques.addEventListener('click', (event) => {          //el parametro event se lo puede llamar de cualquier forma
  console.log(event)
  alert('No me toques')
})