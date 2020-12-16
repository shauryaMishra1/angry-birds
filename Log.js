class Log extends Baseclass{
    constructor(x,y,height,angle){
        super(x,y,20,height,angle);
        this.image=loadImage("wood2.png");
        Matter.Body.setAngle(this.body,angle)
       // this.x=x;
       // this.y=y;
       
        
    }
display(){
  angleMode(RADIANS)
  super.display()
}
}