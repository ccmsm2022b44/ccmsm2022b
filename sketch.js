function setup() {
  createCanvas(400, 400);
}
//variaveis da bolinha
let xBol=200;
let yBol=200;
let diametro=50;
let velocidadex=1
let velocidadeY=-1;
//variaveis da raquete
let euX=20;
let euY=150;
let euL=10;
let euA=50;
function draw() {
  background(000);
  //desenha a bolinha
  circle(xBol,yBol,diametro);
  //faz a bolinha andar na tela
  xBol+=velocidadex
  yBol+=velocidadeY;
  //faz a bolinha clicar nas laterais
  if(xBol+diametro/2>=400){
  velocidadex*=-1;  
  }
  rect(euX,euY,euL,euA);
}