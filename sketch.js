//Projeto de Desenvolvimento de Sistemas
//Aula de POO e Encapsulamento
//Sofia Loren

//Objetivos:
//1- Criar a classe Nave
//2-Criar a função Render
//3- Criar a função Turn com as setas do teclado
//4- Criar a função de bordas
//5- Criar Placar

//---------------Variaveis Globais----------
let nave;
let inimigo;
let tiros = [];
let inimigos = [];
let meusPontos = 0;
let pontosOponetes = 0;
let funfo;

function preload(){
  fundo = loadImage('img/fundo-espaço.png');
}

function setup() {
  createCanvas(400, 400);
  nave = new Nave();
  for(let i = 0; i <10; i++){
    let inimigojogo = new Inimigo(random(0,width),random(-800,0));
    inimigos.push(inimigojogo);
  }
}
function draw() {
  background(fundo);
  
  verificaColisao();
  for(let inimigo of inimigos){
     inimigo.render();
     inimigo.update();
  }
  
  
  //Exebindo os tiros
  for(let i = tiros.length -1; i >=0; i--){
    tiros[i].render();
    tiros[i].update();
    
  }
  
  
  nave.render();
  nave.update();
  nave.turn();
  nave.bordas();
  
  placar();
  
  
  
}

//-------Funções do Teclado
function keyPressed(){
  if(keyCode == UP_ARROW){
    nave.acelerando(true);
  }
  if(keyCode == RIGHT_ARROW){
    nave.setRotation(0.1);
  }
  if(keyCode == LEFT_ARROW){
    nave.setRotation(-0.1);
  }
  if(key == ' '){
    tiros.push(new Laser (nave.pos,nave.heading));
  }
}

function keyReleased(){
  if(keyCode == UP_ARROW){
    nave.acelerando(false);
  }
  nave.setRotation(0);
}

function verificaColisao(){
  for(let inimigo of inimigos){
    for(let tiro of tiros){
      if(dist(inimigo.x,inimigo.y,tiro.pos.x,tiro.pos.y)<25){
        inimigos.splice(inimigos.indexOf(inimigo),1);
         let novoInimigo = new Inimigo(random(0,width),random(-800,0));
        inimigos.push(novoInimigo)
          meusPontos +=1;
      }
    }
  }
}

function placar(){
  push();
  textSize(30);
  rotate(PI/2)
  fill(255,255,0);
  textFont('Jersey 10')
  text(meusPontos,0,50);
  pop();
}