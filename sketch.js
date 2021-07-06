var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2 = loadImage("aladdin_cave2.jpg");
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  text("Welcome to the Cave of Alladin!", 450, 20);
  text("Take nothing but the lamp! Even the smallest of desires will cost and YOU will never make you see the light of day again!", 150, 40);
  textSize(20);
  fill("white");
 
  text("Score: " + score, 450, 65);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}