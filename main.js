var pasoActual = 1;

var app = document.querySelector('#app');

var capsulaUno = document.querySelector('#capsulaUno');
var capsulaDos = document.querySelector('#capsulaDos');
var capsulaTres = document.querySelector('#capsulaTres');
var capsulaCuatro = document.querySelector('#capsulaCuatro');
var capsulaCinco = document.querySelector('#capsulaCinco');

var intro = document.querySelector('.content_intro')
var containerUno = document.querySelector('.uno')
var containerDos = document.querySelector('.dos')
var containerTres = document.querySelector('.tres')
var containerCuatro = document.querySelector('.cuatro')
var containerCinco = document.querySelector('.cinco')

const audioDos = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 2.mp4')
const audioTres = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 3.mp4')
const audioCuatro = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 4.mp4')
const audioCinco = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 5.mp4')
const audioSeis = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 6.mp4')


if(pasoActual === 1){
  intro.style.display = 'block'
}else if(pasoActual === 2){
  containerUno.style.display = 'block'
}else if(pasoActual === 3){
  containerDos.style.display = 'block'
}else if(pasoActual === 4){
  containerTres.style.display = 'block'
}else if(pasoActual === 5){
  containerCuatro.style.display = 'block'
}else if(pasoActual === 6){
  containerCinco.style.display = 'block'
}


// if (pasoActual === 0) {
//   app.style.display = "none"
// }

// for(const avanza of avanzar){
//   avanza.addEventListener('click', function(e){
//     for(const contenedor of container){
//       contenedor.style.display = 'block';
//     }
//   })
// }



// Obligar rotacion de la pantalla
// jQuery(window).bind('orientationchange', function (e) {
//   switch (window.orientation) {
//     case 0:
//       $('.turnDeviceNotification').css('display', 'none');
//       // The device is in portrait mode now
//       break;

//     case 180:
//       $('.turnDeviceNotification').css('display', 'none');
//       // The device is in portrait mode now
//       break;

//     case 90:
//       // The device is in landscape now
//       $('.turnDeviceNotification').css('display', 'block');
//       break;

//     case -90:
//       // The device is in landscape now
//       $('.turnDeviceNotification').css('display', 'block');
//       break;
//   }
// });

capsulaUno.addEventListener('click', function () {
  containerUno.style.display = 'block';
  pasoActual = 1;
  console.log(pasoActual)
  
  audioDos.play()

})

capsulaDos.addEventListener('click', function () {
  containerDos.style.display = 'block';
  pasoActual = 2;
  console.log(pasoActual)
  
  audioTres.play()
  audioDos.pause()
  
})

capsulaTres.addEventListener('click', function () {
  containerTres.style.display = 'block';
  pasoActual = 3;
  console.log(pasoActual)
  
  audioCuatro.play()
  audioTres.pause()
})

capsulaCuatro.addEventListener('click', function () {
  containerCuatro.style.display = 'block';
  pasoActual = 4;
  console.log(pasoActual)
  
  audioCinco.play()
  audioCuatro.pause()
})

capsulaCinco.addEventListener('click', function () {
  containerCinco.style.display = 'block';
  pasoActual = 5;
  console.log(pasoActual)
  
  audioSeis.play()
  audioCinco.pause()
})