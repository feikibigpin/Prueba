var dots = [];

var value;  //starting value of earthquake

var acx;
var acy;
var acz;
var shake;
var soloshake;

//var button1;
//var button2;
var button3;
//var myChile;
//var myJapon;
//var myIndonesia;
//var myMexico;
//var myResults;

//function preload() {
    //myChile = loadImage("images/9.5.png");
    //myJapon = loadImage("images/9.0.png");  
    //myIndonesia = loadImage("images/8.6.png");
    //myMexico = loadImage("images/8.1.png");

function setup(){
     createCanvas(windowWidth, windowHeight);
}

function draw(){
     background(204);
     angleMode(DEGREES);
     shake();
    
}
function soloshake(){
     textSize(height/20);
     textAlign(CENTER);
     textStyle(BOLD);
     fill(0);
     noStroke();
     text("SHAKE YOUR DEVICE", width/2,height - height/1.2);    
    //var magnitude = norm(value, 6 , 10);
    
function shake(){
     soloshake();
    
    var magnitude = map(value, 0, 500 , 0, 10); //le quite el pAccelerationX * pAccelerationY
    
    // cuando es en eje Y, hacia la derecha es positivo, izq negativo, reacciona bien
    // con el eje Z reacciona de manera mas controlada, hacia adelante es positivo, hacia atras negativo
    
   
}
  

function deviceShaken(){
    button3 = createButton("try again");
    button3.position(width/2,height/3);
    button3.touchStarted(soloshake); //en vez de mousePressed para touch es touchStarted
    
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

