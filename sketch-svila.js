// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//        Words Brush v1.0
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// for Generative Type (2020-06-10)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// note : not working right pulling
// in text from assets, pull array?
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//let poem;
// function preload(){
//   poem = loadStrings('assets/text-1.txt');
// }


let poem = 
`Berem. To je kot bolezen. Berem, karkoli mi pride v roke, pred oči:
časopise, učbenike, reklame, koščke papirja, najdene na ulici, kuharske recepte, otroške knjige. Karkoli natisnjenega.
`


let n = 0;
let prevX, prevY;
let myFont;
let c1, c2;
let clear;
let save;


function preload(){
  //myFont = loadFont('assets/Brzo_Bold_v0.1.otf');
  myFont = loadFont('assets/NHaasGrotesk.woff');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  resetSketch();
}


function resetSketch() {
  /*save = createButton('💾');
  save.position((windowWidth - 85), windowHeight - (windowHeight / 18));
  save.mousePressed(saveFile);*/
  
  clear = createButton('❌');
  clear.position((windowWidth - 45), windowHeight - (windowHeight / 22));
  clear.mousePressed(resetSketch);
  
  c1 = color('#FF1493');
  c2 = color(0, 0, 255);
  background('#1F86E0');
  //setGradient(c1, c2);
}
  

function isFarFromLastCharacter() {
  // || means "or". so:
  // (true || false) === true
  // (false || false) === false
  return !prevX || (
    ptDistance(prevX, prevY, mouseX, mouseY) > 16
  )
}


// Calculates the distance between two points using MATH.
function ptDistance(x, y, otherX, otherY) {
  return Math.sqrt((x - otherX)**2 + (y - otherY)**2)
}


function draw() {
  //    && means "and". so:
  //    (true && true) === true
  //    (true && false) === false
  if (mouseIsPressed && isFarFromLastCharacter()) {
    /*push();
    fill(255)
    noStroke();
    ellipse(mouseX, mouseY, 35);
    pop();*/
    
    push();
    fill(1,1,1);
    noStroke();
    textFont(myFont);
    textSize(20);
    textAlign(CENTER);
    text(poem[n], mouseX, mouseY+5)
    n = (n + 1) % poem.length
    prevX = mouseX
    prevY = mouseY
  }
  
  push();
    fill(0);
    noStroke();
    translate(0, height);
    rect(0, -windowHeight/20, windowWidth, windowHeight/20);
  pop();
}


function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}


function saveFile() {
  saveCanvas('Temples', 'png');
}


