let health = 100;
let healthColor;

function setup() {
  createCanvas(450, 450);
}

function draw() {
  if (health > 70){
    healthColor = 'green'
  } else if (health > 30){
    healthColor = 'yellow'
  } else {
    healthColor = 'red'
  }
  
  background(255);
  fill("white")
  stroke(0)
  rect(100,200,200,40)
  stroke(healthColor)
  fill(healthColor)
  rect(100,201,health*2,38)
  textSize(50)
  fill('black')
  text("♥️",86,235)
  let healthRatio = health + '/100';
  text(healthRatio, 100,300)
  textSize(30)
  text("Press 'a' to Attack 🗡️", 50,100)
  text("Press 'h' to heal 🧪",50,150)

}

function keyPressed() {
  if (key === 'a'){
    health -= 10;
  } else if (key === 'h'){
    health += 10;
  } 
}


