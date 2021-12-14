var pasoActual = 1;
var app = document.querySelector('#app');
var capsulaUno = document.querySelector('#capsulaUno');
var capsulaDos = document.querySelector('#capsulaDos');
var capsulaTres = document.querySelector('#capsulaTres');
var capsulaCuatro = document.querySelector('#capsulaCuatro');
var capsulaCinco = document.querySelector('#capsulaCinco');
var containerUno = document.querySelector('.uno')
var containerDos = document.querySelector('.dos')
var containerTres = document.querySelector('.tres')
var containerCuatro = document.querySelector('.cuatro')
var containerCinco = document.querySelector('.cinco')



if(pasoActual === 0){
  app.style.display = "none"
}

// for(const avanza of avanzar){
//   avanza.addEventListener('click', function(e){
//     for(const contenedor of container){
//       contenedor.style.display = 'block';
//     }
//   })
// }

if (app.requestFullscreen) {
  app.requestFullscreen();
}

capsulaUno.addEventListener('click', function(){
  containerUno.style.display = 'block';
  console.log("Estoy en la capsula uno")
})

capsulaDos.addEventListener('click', function(){
  containerDos.style.display = 'block';
  console.log("Estoy en la capsula dos")
})

capsulaTres.addEventListener('click', function(){
  containerTres.style.display = 'block';
  console.log("Estoy en la capsula tres")
})

capsulaCuatro.addEventListener('click', function(){
  containerCuatro.style.display = 'block';
  console.log("Estoy en la capsula cuatro")
})

capsulaCinco.addEventListener('click', function(){
  containerCinco.style.display = 'block';
  console.log("Estoy en la capsula cinco")
})