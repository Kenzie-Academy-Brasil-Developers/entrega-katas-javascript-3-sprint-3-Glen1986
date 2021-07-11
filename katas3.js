const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(a, b) {
  const destiny = document.getElementById("body");
  const actividad = document.createElement("div");
  const titulo = document.createElement("h2");
  const resultado = document.createElement("p");

  destiny.appendChild(actividad);
  resultado.innerText = a;
  titulo.innerText = b;
  actividad.appendChild(titulo);
  actividad.appendChild(resultado);
}
function isPar(){
  return n % 2 === 0;
}
function isOod(){
  return n % 2 === 1;
}
function kata1() {
    // implemente o código do kata 1 aqui
  let kat1 = [];
  for (let i = kat1; i <= 25; i++) {
    kat1.push(i);
  }
  showResults(kat1, "kata1");
  return kat1;
}
kata1();

function kata2() {
    // implemente o código do kata 2 aqui
  let kat2 =[];
  for (let i = 25; i >= 1; i--){
    kat2.push(i);
  }
  showResults(kat2, "kata2");
  return kat2;
}
kata2();

function kata3() {
    // implemente o código do kata 3 aqui
let kat3 = [];
  for (let i = -1; i >= -25; i--) {
    kat3.push(i);
  }
  showResults(kat3, "kata3");
  return kat3;
}
kata3();

function kata4() {
    // implemente o código do kata 4 aqui
  let kat4 = [];
  for(let i = -25; i <= -1; i++){
    kat4.push(i);
  }
  showResults(kat4,"kata4");
  return kat4;
}
kata4();


function kata5() {
    // implemente o código do kata 5 aqui
  let kat5 = [];
  for(let i = -25; i <= 25; i++){
    if(i % 2 > 0){
      kat5.push(i);
    }
    if(i % 2 < 0){
      kat5.push(i);
    }
  }
  showResults(kat5,"kata5");
  return kat5;
}
kata5();

function kata6() {
    // implemente o código do kata 6 aqui
  let kat6 = [];
  for(let i = 0; i <= 100; i ++){
    if(i % 3 === 0){
      kat6.push(i);
    }
  }
  showResults(kat6,"kata6");
  return kat6
}
kata6();

function kata7() {
    // implemente o código do kata 7 aqui
  let kat7 = [];
  for(let i = 0; i <= 100; i ++){
    if(i % 7 === 0){
      kat7.push(i);
    }
  }
  showResults(kat7, "kata7")
  return kat7
}
kata7();

function kata8() {
    // implemente o código do kata 8 aqui
  let kat8 = [];
  for(let i = 100; i >= 1; i --){
    if(i % 3 === 0 || i % 7 === 0){
      kat8.push(i);
    }
  }
  showResults(kat8, "kata8");
  return kat8;
}
kata8();

function kata9() {
    // implemente o código do kata 9 aqui
  let kat9 = [];
  for( let i = 0; i <= 100; i++ ){
    if( i % 5 === 0 && i % 2 > 0 ) {
      kat9.push(i);
    }
  }
  showResults(kat9, "kata9");
  return kat9;
}
kata9();

function kata10() {
    // implemente o código do kata 10 aqui
  let kat10 = [];
  for ( let i = 0; i <= 20; i ++  ){
    kat10.push(sampleArray[i])
  }
  showResults(kat10, "kata10");
  return kat10;
}
kata10();

function kata11() {
    // implemente o código do kata 11 aqui
  let kat11 = [];
  for ( let i = 0; i <= sampleArray.length; i ++ ){
    if( sampleArray[i] % 2 === 0 ){
      kat11.push(sampleArray[i]);
    }
  }
  showResults(kat11, "kata11");
  return kat11;
}
kata11();

function kata12() {
    // implemente o código do kata 12 aqui
  let kat12 = [];
  for( let i = 0; i <= sampleArray.length; i++ ){
    if(sampleArray[i] % 2 === 1){
      kat12.push(sampleArray[i]);
    }
  }
  showResults(kat12, "kata12");
  return kat12;
}
kata12();

function kata13() {
    // implemente o código do kata 13 aqui
  let kat13 = [];
  for( let i = 0; i <= sampleArray.length; i++ ){
    if(sampleArray[i] % 8 === 0){
      kat13.push(sampleArray[i]);
    }
  }
  showResults(kat13, "kata13");
  return kat13;
}
kata13();


function kata14() {
    // implemente o código do kata 14 aqui
  let kat14 = [];
  for ( let i = 0; i < sampleArray.length; i++ ){
    kat14.push(sampleArray[i] * sampleArray[i] )
  }
  showResults(kat14, "kata14");
  return kat14;
}
kata14();

function kata15() {
    // implemente o código do kata 15 aqui
  let kat15 = 0;
  for ( let i = 0; i <= 20; i ++ ){
    kat15 =+ i;
  }
  showResults(kat15, "kata15");
  return kat15;
}
kata15();

function kata16() {
    // implemente o código do kata 16 aqui
  let kat16 = 0;
  for ( let i = 0; i < sampleArray.length; i ++ ){
    kat16 =+ Number(sampleArray[i]);
  }
  showResults(kat16, "kata16");
  return kat16
}
kata16();

function kata17() {
    // implemente o código do kata 17 aqui
  let kat17 = sampleArray[0];
  for ( let i = 0; i < sampleArray.length; i ++ ){
    if(sampleArray[i] < kat17){
      kat17 = sampleArray[i];
    }
  }
  showResults(kat17, "kata17");
  return kat17;
}
kata17();

function kata18() {
    // implemente o código do kata 18 aqui
  let kat18 = sampleArray[0];
  for ( let i = 0; i < sampleArray.length; i ++ ){
    if(sampleArray[i] > kat18){
      kat18 = sampleArray[i];
    }
  }
  showResults(kat18, "kata18");
  return kat18;
}
kata18();



/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
