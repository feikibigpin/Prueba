var dots = [];

var value = 0;  //starting value of earthquake

var acx;
var acy;
var acz;
//var shake;
//var soloshake;

var button1;
//var button2;
var button3;
//var myChile;
//var myJapon;
//var myIndonesia;
var myMexico;
//var myResults;

function preload() {
    //myChile = loadImage("images/9.5.png");
    //myJapon = loadImage("images/9.0.png");  
    //myIndonesia = loadImage("images/8.6.png");
    myMexico = loadImage("images/8.1.png");

function setup(){
     createCanvas(windowWidth, windowHeight);
     angleMode(DEGREES);
}

function draw(){
     background(204);
    
     textSize(height/20);
     textAlign(CENTER);
     textStyle(BOLD);
     fill(0);
     noStroke();
     text("SHAKE YOUR DEVICE", width/2,height - height/1.1);    
    
    var magnitude = int(map(value, 0, 500, 0, 10)); 
    
    if (value > 0){
        
        //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = value * 2; 
    
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (x, y, r, r);

    //magnitude indication
    fill(0);
    noStroke();    
    
    textSize(height/40);
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Magnitude", width/2, height - height/5);
        
    textSize(height/20);
    textAlign(CENTER);
    textStyle(BOLD);
    text(magnitude,width/2, height - height/6.7);
    
    textSize(height/50);
    textAlign(CENTER);
    textStyle(NORMAL);    
    text(value, width/2, height - height/8);
        
        
    
    }  
    
}
/*
function soloshake(){
     textSize(height/20);
     textAlign(CENTER);
     textStyle(BOLD);
     fill(0);
     noStroke();
     text("SHAKE YOUR DEVICE", width/2,height - height/1.2);    
     value = 0;
}
  
/*    
function shake(){
     soloshake();
    
    var magnitude = map(value, 0, 500 , 0, 10); //le quite el pAccelerationX * pAccelerationY
    
    // cuando es en eje Y, hacia la derecha es positivo, izq negativo, reacciona bien
    // con el eje Z reacciona de manera mas controlada, hacia adelante es positivo, hacia atras negativo
    
   
}
  
*/
function deviceShaken(){
    button3 = createButton("Try again");
    button3.position((width/7)*5, (height/15)*14);
    button3.touchStarted(clearEverything);
    
    button1 = createButton("See results");
    button1.position((width/8)*5, (height/15)*14);
    button1.touchStarted(results); //en vez de mousePressed para touch es touchStarted
    /*
    button3 = createButton("try again");
    button3.position(width/2,height/3);
    button3.touchStarted(clearEverything); //en vez de mousePressed para touch es touchStarted
    */
    acx = abs(pAccelerationX);
    acy = abs(pAccelerationY);
    acz = abs(pAccelerationZ);
    value = acx + acy + acz ;  //le quite pAccelerationX * pAccelerationY 
   
    //create objects
    for (var i = 0; i < value*10; i++){
        dots.push(new QuakeDots());
        
    } 
    
}


function QuakeDots(){
  
    var a = random(0,360);
    var b = random(0,value);//r = value = 30
    var x = sin(a) * b; // mi dà un numero che va da -b a b
    var y = cos(a) * b; // mi dà un numero che va da -b a b
    var d = dist(width/2,height/2, width/2, height/2 + x/2);
    this.xdot = random(width/2 - d, width/2 + d); //according to ellipse area
    this.ydot = random(height/2 - d, height/2 + d); //according to ellipse area
    this.diameter = 4;
    this.speed = 2; //magnitude
    
    this.move = function(){
      this.xdot += random(-this.speed,this.speed);
      this.ydot += random(-this.speed,this.speed);
    }
    this.display = function(){
      ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
    };
    
}
function results() {
    image(myMexico,0,0,windowWidth,windowHeight);
}
function clearEverything() {
    background(204);
    value = 0;
    textSize(height/20);
     textAlign(CENTER);
     textStyle(BOLD);
     fill(0);
     noStroke();
     text("SHAKE YOUR DEVICE", width/2,height - height/1.1);    
 
     }
