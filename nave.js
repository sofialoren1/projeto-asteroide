class Nave{
  constructor(){
    this.pos = createVector(width/2,height/2);
    this.r = 15;
    this.heading = 0;
    this.rotation = 0;
    this.vel = createVector(0,0);
    this.acc = false;
  }
  
  render(){
    translate(this.pos.x,this.pos.y);
    rotate(this.heading + PI/2);
    noFill();
    stroke(255);
    triangle(-this.r,this.r,this.r,this.r,0,-this.r);
  }
  
  update(){
    if(this.acc){
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.95);
  }
  
  boost(){
    let force = p5.Vector.fromAngle(this.heading);
    force.mult(0.3);
    this.vel.add(force);
  }
  
  acelerando(a){
    this.acc = a;
  }
  
  setRotation(r){
    this.rotation = r;
  }
  
  turn(){
    this.heading += this.rotation;
  
  }
  bordas(){
    if(this.pos.x > width + this.r){
      this.pos.x = -this.r;
    }else if(this.pos.x < -this.r){
      this.pos.x = width + this.r;
    }
    if(this.pos.y > height + this.r){
       this.pos.y = -this.r
    }else if(this.pos.y < -this.r){
      this.pos.y = height + this.r;
    }
  }
}