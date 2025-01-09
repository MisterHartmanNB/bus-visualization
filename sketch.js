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
    fill('lightblue');
    rect(0,2,10,16);
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

  //Function to honk the horn by drawing a white ellipse that says "Honk!" in the top-left corner of the bus
  honkHorn() {
    fill('white');
    ellipse(this.x+5,this.y-12,40,25);
    fill('black');
    text("Honk!",this.x-10,this.y-10);
  }
}

//Offset bus 1,2,3,4 by a variable to make room for text labelling each one
var offset = 60;
var bus1 = new Bus(300,20+offset);
var bus2 = new Bus(100,60+offset*2);
var bus3 = new Bus(55,230+offset*4);
var bus4 = new Bus(300,110+3*offset);



function setup() {
  createCanvas(400,550);
  bus1.dx = -1;
  bus2.dx = 1;
  bus3.dx = 1;
  bus4.dx = -1;
  frameRate(30);
}

function draw() {
  background(200);

    //Add lines in line with the top and bottom of each rectangle to show the path of the bus to show where the busses are supposed to be
    stroke('white');
    strokeWeight(3);
    line(100,10+offset,300,10+offset);
    line(100,30+offset,300,30+offset);
    line(100,50+offset*2,300,50+offset*2);
    line(100,70+offset*2,300,70+offset*2);
    line(100,100+offset*3,300,100+offset*3);
    line(100,120+offset*3,300,120+offset*3);
    line(100,190+offset*4,300,190+offset*4);
    line(100,210+offset*4,300,210+offset*4);
  
  
  //Draws the landing box for the first bus
  noFill();
  stroke('white');
  strokeWeight(5);
  rect(100-bus1.width/2,20-bus1.height/2+offset,bus1.width,bus1.height);

 //Draw the landing box for the second bus
 noFill();
 stroke('white');
 strokeWeight(5);
 rect(300-bus2.width/2,60-bus2.height/2+2*offset,bus2.width,bus2.height);

  //Bus 3, pulling into a parallel spot
  noFill();
  stroke('white');
  strokeWeight(5);
  rect(300-bus3.width/2,100+3*offset,bus3.width,bus3.height);

  noFill();
  stroke('white');
  strokeWeight(5);
  rect(300-bus4.width/2,190+4*offset,bus3.width,bus3.height);

  //Place orange circles as cones to show the bounding box for each exercise
  fill('orange');
  stroke('black');
  strokeWeight(1);
 
  drawCones(100-bus1.width/2,20-bus1.height/2+offset);
  drawCones(100-bus2.width/2,60-bus2.height/2+2*offset);
  drawCones(100-bus3.width/2,100+3*offset);
  drawCones(100-bus4.width/2,190+4*offset);

  bus1.draw();

  if(bus1.x<=100) {
    bus1.dx = 0;
    bus1.frame++;
    if(bus1.frame==30) {
      bus1.x = 300;
      bus1.frame = 0;
      bus1.dx = -1;
    }
  }

  if(bus2.x>=300) {
    bus2.dx = 0;
    bus2.frame++;
    if(bus2.frame==30) {
      bus2.x = 100;
      bus2.frame = 0;
      bus2.dx = 1;
    }
  }

  bus2.draw();

  if(bus3.x>=300) {
    bus3.dx = 0;
    bus3.frame++;
    if(bus3.frame==30) {
      bus3.x = 55;
      bus3.y = 230+offset*4;
      bus3.frame = 0;
      bus3.dx = 1;
    }
  }

  if(bus3.x>=115&&bus3.x<=215) {
    bus3.dy = -0.15
  } else {
    bus3.dy = 0;
  }

  if(bus3.x>=155&&bus3.x<=205) {
    bus3.dy = -0.45;
  }

  if(bus3.x>=115&&bus3.x<=140) {
    bus3.rotation -= 0.009;
  } else if(bus3.x>=185&&bus3.x<=210) {
    bus3.rotation += 0.009;
  }

  bus3.draw();

  //Bus 4, pulling out of the same spot
  
  
  if(bus4.x<=55) {
    bus4.dx = 0;
    bus4.frame++;
    if(bus4.frame==30) {
      bus4.x = 300;
      bus4.y = 110+3*offset;
      bus4.frame = 0;
      bus4.dx = -1;
    }
  }

  if(bus4.x>=120&&bus4.x<=220) {
    bus4.dy = 0.15
  } else {
    bus4.dy = 0;
  }

  if(bus4.x>=155&&bus4.x<=205) {
    bus4.dy = 0.45;
  }

  if(bus4.x>=135&&bus4.x<=160) {
    bus4.rotation += 0.009;
  } else if(bus4.x>=185&&bus4.x<=210) {
    bus4.rotation -= 0.009;
  }
  
  bus4.draw();

  //Honk the horn at the end of each exercise
  if(bus1.x<=100) {
    bus1.honkHorn();
  }

  if(bus2.x>=300) {
    bus2.honkHorn();
  }

  if(bus3.x>=300) {
    bus3.honkHorn();
  }

  if(bus4.x<=55) {
    bus4.honkHorn();
  }

  //Write text to describe the directions for the driver in each situation
  fill('black');
  text("Step 1: Forward Stop - Drive forward through the alley and stop with the\nfront most part of the vehicle in the box without going past the front of\nthe alley", 10, offset/2);
  text("Step 2: Straight Line Backing - You will demonstrate your ability to back\na vehicle in a straight line. Pull forward and stop when I raise my hand.\nThen back straight through the alley until the front of your vehcile has\ncleared the last set of cones at the far end of the alley.",10,offset*2-5);
  text("Step 3: Forward Offset Tracking - You will demonstrate your ability to\nmanuever a vehicle around other objects while moving forward. Drive \nforward and steer to the left through the opposite lane, keeping the right\nmost rear tire between the cone and the line",10,offset*4-15);
  text("Step 4: Reverse Offset Backing - You will demonstrate your ability to\noffset back and park a vehicle at the end of an alley. Starting parallel with\nthe outer boundary, offset back into the alley, bringing the rear most part\nof your vehicle within 3 feet of the rear of the alley. Stop with the rear\nmost part of the vehicle in the box.",10,offset*6);
}

function drawCones(box1x,box1y) {
  fill('orange');
  circle(box1x,box1y-4,5);
  circle(box1x+bus1.width,box1y-4,5);
  circle(box1x,box1y+bus1.height+4,5);
  circle(box1x+bus1.width*2,box1y-4,5);
  circle(box1x+bus1.width*3,box1y-4,5);
  circle(box1x+bus1.width*4,box1y-4,5);
  circle(box1x+bus1.width*5,box1y-4,5);
  circle(box1x+bus1.width*3,box1y+bus1.height+4,5);
  circle(box1x+bus1.width*4,box1y+bus1.height+4,5);
  circle(box1x+bus1.width*5,box1y+bus1.height+4,5);
  fill('white');
  rect(box1x-3,box1y+bus1.width-22,6,3);
}

