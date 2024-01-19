const form = document.querySelector('form');  //agarramos la etiquera
const root = document.querySelector('#root');
// const input = document.querySelector('input');
// let dataList = [];

// if (localStorage.getItem('list')) {
//   dataList = JSON.parse(localStorage.getItem('list'));
// }

// dataList.forEach(element => {
//   root.innerHTML += `
//     <div class="card">
//       ${element}
//       <button onclick="">Eliminar</button>
//     </div>
//   `;
// });

const handleOnSubmit = (event) => {
  event.preventDefault(); //evita el por defecto del submit (que se recarga automaticamente)
  console.log(event.target)
  const input = event.target[0].value // tomo el 0 porque el input esta en esa posicion 
  console.log(input)
  // dataList.push(input.value);
  // localStorage.setItem('list', JSON.stringify(dataList));
  root.innerHTML += `
    <div class="card">
      ${input}
    </div>
  `;
  event.target.reset();
};
// const handleOnRemove = (event) => {
  
// }

form.addEventListener('submit', handleOnSubmit);

// localStorage.clear();
// localStorage.getItem('nombre');
// localStorage.removeItem('nombre');

// JSON.parse({
//   "nombre": "Luis",
//   "apellido": "Perez",
//   "imagen": {
//     "url": "http://www.google.com",
//     "alt": "Imagen de Luis",
//     "class": "img-responsive"
//   }
// })
// JSON.stringify({
//   nombre: 'Luis',
//   apellido: 'Perez',
//   imagen: {
//     url: 'http://www.google.com',
//     alt: 'Imagen de Luis',
//     class: 'img-responsive',
//   },
// })