/* Project Classes
Player class (Roll, show)

*/

 /* Game Skeleton 
 change board to single array-> Pro: easier move, Con: harder to show  


infinite loop for game until "something" happens( Ex: press ESC)
     Player Roll
for each player, roll dice + change position
switch(array index, aka Square of board):
ladder 5,15,25..
Snakes 10, 20 ,30 ...
default: -

show board
if someone on gets to 10 square wins

 */
//import from canvas

import {Canvas2dGraphics} from './gameCanvas.js';
const canvas=document.getElementById('canvas'),
      canvasObj=new Canvas2dGraphics(canvas),
      WIDTH=500,
      HEIGHT=500,
      numCol=10,
      numRow=10,
      boxSize=WIDTH/numCol,
      player1Color="orange",
      player2Color="black",
      canvasPlayer=document.createElement('canvas'),
      canvasPlayerObj=new Canvas2dGraphics(canvasPlayer);

//Variables
var boxArr=[],
    x=0,
    y=(numRow-1)*boxSize,
    dir=1,
    snake1=new Image(),
    snake2=new Image(),
    snake3=new Image(),
    snake4=new Image(),
    ladder1=new Image(),
    ladder2=new Image(),
    ladder3=new Image(),
    player1=new Player(player1Color,1),
    player2=new Player(player2Color,2),
    isPlayer1Turn=Math.random()<0.5?false:true,
    dice=new Dice(20,180,100,'orange');

snake1.src='/images/snake1.png';
snake2.src='/images/snake2.png';
snake3.src='/images/snake3.png';
snake4.src='/images/snake1.png';
ladder1.src='/images/ladder1.png';
ladder2.src='/images/ladder1.png';
ladder3.src='/images/ladder1.png';


canvas.width=WIDTH;
canvas.height=HEIGHT;
canvasPlayer.width=300;
canvasPlayer.height=300;
canvasPlayer.style.background='brown';
canvasPlayer.style.float='left';
document.body.appendChild(canvasPlayer);

for(let i=0;i<numCol*numRow;i++){
    boxArr.push(new Box(x, y, boxSize,i));
    x=x+boxSize*dir;
    if(x>=WIDTH || x<=-boxSize){
        dir*=-1;
        x+=boxSize*dir;
        y-=boxSize;
    }
}

window.addEventListener('click',playGame);
 window.addEventListener('keydown',(e)=>{
    if(e.keyCode==13){
        window.location.reload();
    }
}); 
//Details of the players on the canvas
function drawPlayerDetails(){
    canvasPlayerObj.ClearCanvas(0,0,canvasPlayer.width,canvasPlayer.height);
    canvasPlayerObj.FillText('Player 1',20,30,player1Color,'25px Arial');
    canvasPlayerObj.FillCircle(150,20,boxSize/3,0,2*Math.PI,false,player1Color);
    canvasPlayerObj.FillText('Player 2',20,70,player2Color,'25px Arial');
    canvasPlayerObj.FillCircle(150,60,boxSize/3,0,2*Math.PI,false,player2Color);

    if(isPlayer1Turn){
        canvasPlayerObj.FillText('Player 2 turn',20,120,player2Color,'25px Arial');        
    }else{
        canvasPlayerObj.FillText('Player 1 turn',20,120,player1Color,'25px Arial');        
    }
}

// Dice and its function
function Dice(x, y, size, color){
    this.x=x;
    this.y=y;
    this.size=size;
    this.color=color;

    this.drawDice=function(n){
        canvasPlayerObj.StrokeRectangle(this.x, this.y, this.size,this.size,this.color);
        switch(n){
            case 1:
                canvasPlayerObj.FillCircle(this.x+this.size/2,this.y+this.size/2,10,0,2*Math.PI,false,this.color);
                break;
            case 2:
                canvasPlayerObj.FillCircle(this.x+this.size/4,this.y+this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+3*this.size/4,this.y+3*this.size/4,10,0,2*Math.PI,false,this.color);
                break;
            case 3:
                canvasPlayerObj.FillCircle(this.x+this.size/4,this.y+this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+3*this.size/4,this.y+3*this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+this.size/2,this.y+this.size/2,10,0,2*Math.PI,false,this.color);
                break;
            case 4:
                canvasPlayerObj.FillCircle(this.x+this.size/4,this.y+this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+3*this.size/4,this.y+this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+this.size/4,this.y+3*this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+3*this.size/4,this.y+3*this.size/4,10,0,2*Math.PI,false,this.color);
                break;
            case 5:
                canvasPlayerObj.FillCircle(this.x+this.size/4,this.y+this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+3*this.size/4,this.y+this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+this.size/4,this.y+3*this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+3*this.size/4,this.y+3*this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+this.size/2,this.y+this.size/2,10,0,2*Math.PI,false,this.color);
                
                break;
            default:
                canvasPlayerObj.FillCircle(this.x+this.size/8+10,this.y+this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+3*this.size/8+10,this.y+this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+5*this.size/8+10,this.y+this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+1*this.size/8+10,this.y+3*this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+3*this.size/8+10,this.y+3*this.size/4,10,0,2*Math.PI,false,this.color);
                canvasPlayerObj.FillCircle(this.x+5*this.size/8+10,this.y+3*this.size/4,10,0,2*Math.PI,false,this.color);
                break;
        }
    }
    
}

// play game
function playGame(){
    if(isPlayer1Turn){
        drawBoard();
        loadSnakeAndLadder();
        player1.rollDice();
        player1.drawPlayer();
        player2.drawPlayer();
        isPlayer1Turn=false;
    }else{
        drawBoard();
        loadSnakeAndLadder();
        player2.rollDice();
        player1.drawPlayer();
        player2.drawPlayer();
        isPlayer1Turn=true;
    }
}
//sound for roll dice 
/* var diceSound;
function preload(){
     diceSound =
} */

//Player 
function Player(color,playerNumber){
    this.position=0;
    this.color=color;
    this.playerNumber=playerNumber;
    this.isActive=false;
// roll the dice = r
    this.rollDice=function(){
        drawPlayerDetails();
        let r=Math.floor(Math.random()*6)+1;//1 to 6;
        dice.drawDice(r);
        if(r==1 || r==5 || r==6){
            this.isActive=true;
        }
        if(r<=(boxArr.length-1)-this.position && this.isActive){
            this.position+=r;
        }
        //Check if player wins and display it
        if(this.position==boxArr.length-1){
            alert('Player '+this.playerNumber+'wins!!!\nPlease press enter to restart the game.');
        }
    };
        // snake and ladders position
    this.drawPlayer=function(){
        let currentPos=boxArr[this.position];
        if(this.position==58){
            canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=18;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },2000);
        }
        else if(this.position==98){
            canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=24;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },1000);
        }
        else if(this.position==74){
            canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=33;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },1000);
        }
        else if(this.position==93){
            canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=66;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },1000);
        }
        else if(this.position==16){
            canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=75;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },1000);
        }
        else if(this.position==6){
            canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=34;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },1000);
        }
        else if(this.position==30){
            canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            this.position=87;
            setTimeout(()=>{
                currentPos=boxArr[this.position];
                canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
            },1000);
        }else{
            canvasObj.FillCircle(currentPos.x+currentPos.size/2,currentPos.y+currentPos.size/2,boxSize/3,0,2*Math.PI,false,this.color);
        }        
    };
}

//function to draw image of snake and ladder a/c to the above draw player function
function loadSnakeAndLadder(){
    canvasObj.DrawImageWH(snake1,boxSize*1, boxSize*4,80, 230);
    canvasObj.DrawImageWH(snake2,boxSize*1, 0,200,400);
    canvasObj.DrawImageWH(snake3,boxSize*5,boxSize*2,100,250);
    canvasObj.DrawImageWH(snake4,boxSize*6,0,100,190);
    canvasObj.Save();
    canvasObj.Rotate(0.15);
    canvasObj.DrawImageWH(ladder1,boxSize*4.5, boxSize*1.75, 30,310);
    canvasObj.Restore();
    canvasObj.Save();
    canvasObj.Rotate(-0.4);
    canvasObj.DrawImageWH(ladder2,boxSize*6,boxSize*4.25,30,280);
    canvasObj.Restore();
    canvasObj.Save();
    canvasObj.Rotate(-0.25);
    canvasObj.DrawImageWH(ladder3,boxSize*3.5, boxSize*7.5, 30,170);
    canvasObj.Restore();
}


//coloring the box  
function Box(x, y, size, index){
    this.x=x;
    this.y=y;
    this.size=size;
    this.index=index;

    if(this.index % 4 ==1){
        this.color='lightblue';        
    }else if(this.index % 4 ==2){
        this.color='grey';
    }else if(this.index % 4 ==3){
        this.color='lightblue';
    }else{
        this.color='grey';
    }
}

Box.prototype.drawBox=function(){
    canvasObj.FillRectangle(this.x, this.y, this.size, this.size,this.color);
    canvasObj.FillText(this.index+1,this.x+this.size/1.5,this.y+this.size/4,'#fff','10px Arial');
}

function drawBoard(){
    boxArr.forEach((b)=>{
        b.drawBox();
    });
}

window.onload=function () {  
    drawBoard();
    loadSnakeAndLadder();
    player1.drawPlayer();
    player2.drawPlayer();
    drawPlayerDetails();
}
