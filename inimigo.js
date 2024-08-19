class Inimigo{
  constructor(x,y){
    this.x =x;
    this.y = y;
  }
  
  render(){
    rect(this.x,this.y,25);
  }
  
  update(){
    this.y +=1;
  }
}