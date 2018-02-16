let stars = [];
let bg;

function setup(){
  bg = loadImage("Images/Flag.jpg");

  createCanvas(610, 348);
 for (var i = 0; i < 100; i++){
     stars[i] = new Star(random(0, width), random(0, height), 1);
 }
}

function draw() {
  background(bg);
  for (var i=0; i < stars.length; i++) {
    
    //rotate(frameCount / -100.0);
    stars[i].move();
    stars[i].display();
  }
}

class Star{
    constructor(tempX, tempY, tempSpeed){
    this.x = tempX;
    this.y = tempY;
    this.speed = tempSpeed;
    }

    display(){
    push();
    translate(this.x, this.y);
        fill(255);
        var points = 7;
        var radius1 = 50;
        var radius2 = 10;
        var angle = TWO_PI / points;
        var halfAngle = angle/2.0;
        beginShape();
            for (var a = 0; a < TWO_PI; a += angle) {
            var sx = this.x + cos(a) * radius2;
            var sy = this.y + sin(a) * radius2;
            vertex(sx, sy);
            sx = this.x + cos(a+halfAngle) * radius1;
            sy = this.y + sin(a+halfAngle) * radius1;
            vertex(sx, sy);
       
    }
    endShape(CLOSE);
    pop();
  }

    move(){
        this.x = this.x+this.speed 
        if(this.x>width){
            this.x=0;
        };
    }
}
