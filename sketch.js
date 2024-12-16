class Bus {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
    this.rotation = 0;
    this.height = 20;
    this.width = 50;
    this.frame = 0;
  }

  move() {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }

  draw() {
    fill('yellow');
    stroke('black');
    strokeWeight(1);
    this.move();
    this.rotate();
    rect(0,0,this.width,this.height);
    this.unRotate();
  }

  rotate() {
    translate(this.x-this.width/2,this.y-this.height/2);
    rotate(this.rotation);
  }

  unRotate() {
    rotate(-this.rotation);
    translate(-this.x+this.width/2,-this.y+this.height/2);
  }
}

var bus1 = new Bus(300,20);
var bus2 = new Bus(100,60);
var bus3 = new Bus(300,100);

function setup() {
  createCanvas(400,400);
  bus1.dx = -2;
  bus2.dx = 2;
  bus3.dx = -2;
}

function draw() {
  background(200);
  
  //Draws the landing box for the first bus
  noFill();
  stroke('white');
  strokeWeight(5);
  rect(100-bus1.width/2,20-bus1.height/2,bus1.width,bus1.height);

  bus1.draw();

  if(bus1.x<=100) {
    bus1.dx = 0;
    bus1.frame++;
    if(bus1.frame==30) {
      bus1.x = 300;
      bus1.frame = 0;
      bus1.dx = -2;
    }
  }

  //Draw the landing box for the second bus
  noFill();
  stroke('white');
  strokeWeight(5);
  rect(300-bus2.width/2,60-bus2.height/2,bus2.width,bus2.height);

  if(bus2.x>=300) {
    bus2.dx = 0;
    bus2.frame++;
    if(bus2.frame==30) {
      bus2.x = 100;
      bus2.frame = 0;
      bus2.dx = 2;
    }
  }

  bus2.draw();

  noFill();
  stroke('white');
  strokeWeight(5);
  rect(100-bus3.width/2,100,bus3.width,bus3.height);

  if(bus3.x<=100) {
    bus3.dx = 0;
    bus3.frame++;
    if(bus3.frame==30) {
      bus3.x = 300;
      bus3.frame = 0;
      bus3.dx = -2;
    }
  }
}