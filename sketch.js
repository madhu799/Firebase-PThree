var database;
var canvas, backgroundIMG, gameState=0;
var playerCount, form, player, game;
var allPlayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game= new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  if(playerCount=== 4){
    game.update(1);
  }
  if(gameState=== 1){
    clear();
    game.play();
  }
}




