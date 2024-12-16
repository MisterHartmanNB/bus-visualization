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

//Offset bus 1,2,3,4 by a variable to make room for text labelling each one
var offset = 50;
var bus1 = new Bus(300,20+offset);
var bus2 = new Bus(100,60+offset*2);
var bus3 = new Bus(100,140+offset*3);
var bus4 = new Bus(300,190+offset*4);



function setup() {
  createCanvas(400,500);
  bus1.dx = -2;
  bus2.dx = 2;
  bus3.dx = 2;
  bus4.dx = -2;
}

function draw() {
  background(200);
  
  //Draws the landing box for the first bus
  noFill();
  stroke('white');
  strokeWeight(5);
  rect(100-bus1.width/2,20-bus1.height/2+offset,bus1.width,bus1.height);

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
  rect(300-bus2.width/2,60-bus2.height/2+2*offset,bus2.width,bus2.height);

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


  //Bus 3, pulling into a parallel spot
  noFill();
  stroke('white');
  strokeWeight(5);
  rect(300-bus3.width/2,100+3*offset,bus3.width,bus3.height);

  if(bus3.x>=300) {
    bus3.dx = 0;
    bus3.frame++;
    if(bus3.frame==30) {
      bus3.x = 100;
      bus3.y = 140+3*offset;
      bus3.frame = 0;
      bus3.dx = 2;
    }
  }

  if(bus3.x>=150&&bus3.x<=250) {
    bus3.dy = -0.3
  } else {
    bus3.dy = 0;
  }

  if(bus3.x>=175&&bus3.x<=225) {
    bus3.dy = -0.9;
  }

  if(bus3.x>=140&&bus3.x<=165) {
    bus3.rotation -= 0.018;
  } else if(bus3.x>=210&&bus3.x<=235) {
    bus3.rotation += 0.018;
  }

  bus3.draw();

  //Bus 4, pulling out of the same spot
  noFill();
  stroke('white');
  strokeWeight(5);
  rect(300-bus4.width/2,180+4*offset,bus3.width,bus3.height);
  
  if(bus4.x<=100) {
    bus4.dx = 0;
    bus4.frame++;
    if(bus4.frame==30) {
      bus4.x = 300;
      bus4.y = 190+4*offset;
      bus4.frame = 0;
      bus4.dx = -2;
    }
  }

  if(bus4.x>=150&&bus4.x<=250) {
    bus4.dy = 0.3
  } else {
    bus4.dy = 0;
  }

  if(bus4.x>=175&&bus4.x<=225) {
    bus4.dy = 0.9;
  }

  if(bus4.x>=170&&bus4.x<=195) {
    bus4.rotation += 0.018;
  } else if(bus4.x>=213&&bus4.x<=238) {
    bus4.rotation -= 0.018;
  }
  
  bus4.draw();

  //Write text to describe the directions for the driver in each situation
  fill('black');
  text("Step 1: Forward Stop - Drive forward through the alley and stop with the\nfront most part of the vehicle in the box without going past the front of\nthe alley", 10, offset/2);
}