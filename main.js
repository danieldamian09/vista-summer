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



if (pasoActual === 0) {
  app.style.display = "none"
}

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
  console.log("Estoy en la capsula uno")
  const audioDos = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 2.mp4')
  let banderaUno = 0;
  if (banderaUno === 0) {
    audioDos.play()
    banderaUno++;
  }else{
    audioDos.pause()
  }

})

capsulaDos.addEventListener('click', function () {
  containerDos.style.display = 'block';
  console.log("Estoy en la capsula dos")
  const audioTres = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 3.mp4')
  let banderaDos = 0;
  if (banderaDos === 0) {
    audioTres.play()
    banderaDos++;
    console.log(banderaDos)
  }else if(banderaDos === 1){
    audioTres.pause()
  }
})

capsulaTres.addEventListener('click', function () {
  containerTres.style.display = 'block';
  console.log("Estoy en la capsula tres")
  const audioCuatro = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 4.mp4')
  audioCuatro.play()
})

capsulaCuatro.addEventListener('click', function () {
  containerCuatro.style.display = 'block';
  console.log("Estoy en la capsula cuatro")
  const audioCinco = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 5.mp4')
  audioCinco.play()
})

capsulaCinco.addEventListener('click', function () {
  containerCinco.style.display = 'block';
  console.log("Estoy en la capsula cinco")
  const audioSeis = new Audio('./assets/audios/Fede Pollevik Marlboro Vista Summer Fusion Loc 6.mp4')
  audioSeis.play()
})