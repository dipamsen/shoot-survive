var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var player;
var inRange=[];
var form, /*player1, player2, player3, player4,*/ game;
//var everyone=[player1, player2, player3, player4];
var img1, img2, img3, img4, ground;
var playerSprites, p1, p2, p3, p4;
var spawned = false;

function preload(){
  img1 = loadAnimation("/img/boy/Idle (1).png",  "/img/boy/Idle (15).png");
  img2 = loadAnimation("/img/girl/Idle (1).png","/img/girl/Idle (15).png");
}

function setup(){
  canvas = createCanvas(800, 600);
  database = firebase.database();
  textFont('Bahnschrift')
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  //console.log(allPlayers);
  if(gameState === 1){
    clear();
    for (plr in allPlayers){
      player.x = allPlayers[plr].position.x; player.y = allPlayers[plr].position.y;
    }
    game.play();
  } 
  if(gameState === 2){
    game.end();
  }
}
