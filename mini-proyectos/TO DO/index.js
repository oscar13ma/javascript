const form = document.querySelector('form');  //agarramos la etiquera
const root = document.querySelector('#root');
// const input = document.querySelector('input');
let dataList = [];

if (localStorage.getItem('list')) {
  dataList = JSON.parse(localStorage.getItem('list'));
}

dataList.forEach(element => {                 //aqui la info persiste por mas que se actualice
  root.innerHTML += `
    <div class="card">
      ${element}
      <button onclick="">Eliminar</button>
    </div>
  `;
});

const handleOnSubmit = (event) => {
  event.preventDefault(); //evita el por defecto del submit (que se recarga automaticamente)
  // console.log(event.target)
  const input = event.target[0].value // tomo el 0 porque el input esta en esa posicion 
  // console.log(input)
  dataList.push(input);
  localStorage.setItem('list', JSON.stringify(dataList));
  root.innerHTML += `
    <div class="card">
      ${input}
    </div>
  `;
  event.target.reset();
};
const handleOnRemove = (event) => {
  
}

form.addEventListener('submit', handleOnSubmit);

// localStorage.clear(); //limpia todo
// localStorage.setItem('nombre', 'Luis')
// localStorage.getItem('nombre');
// localStorage.removeItem('nombre'); //aca me puede limpiar solo una cosa

// JSON.parse({
//   "nombre": "Luis",
//   "apellido": "Perez",
//   "imagen": {
//     "url": "http://www.google.com",
//     "alt": "Imagen de Luis",
//     "class": "img-responsive"
//   }
// })
JSON.stringify({
  nombre: 'Luis',
  apellido: 'Perez',
  imagen: {
    url: 'http://www.google.com',
    alt: 'Imagen de Luis',
    class: 'img-responsive',
  },
})