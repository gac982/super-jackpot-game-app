 // variables
 let cuadroUno = document.querySelector('#casillaUno');
 let cuadroDos = document.querySelector('#casillaDos');
 let cuadroTres = document.querySelector('#casillaTres');
 const modal = document.querySelector('#modal');
 const reinicio = document.querySelector('#reset');
 let score = document.querySelector('#saldo');
 let saldo = 0;
 const boton = document.querySelector('#boton');

 // funciones
 function coin() {
     // ingresa saldo
     saldo = parseInt(prompt(" Bienvenido a Super Jackpot por favor ingresa tu Saldo Inicial",""));
     score.textContent = saldo;
 }
 function calculoRandom() {
     // calcular los numeros random con la ayuda de la libreria lodash
     let a = _.random(0, 9);
     let b = _.random(0, 9);
     let c = _.random(0, 9);
     // mostrar en cada cuadro
     cuadroUno.textContent = a;
     cuadroDos.textContent = b;
     cuadroTres.textContent = c;
     // comparacion de numeros
     if(a === b === c) {
         saldo = saldo + 10;
         let addSaldo = saldo
         score.textContent = addSaldo;
     } else {
         saldo--;
         let resSaldo = saldo
         score.textContent = resSaldo;
     } if(saldo === 0) {
         modal.style.display = 'flex';
      }
 }
 // evento
 coin();
 boton.addEventListener('click', calculoRandom);
