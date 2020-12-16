class Ground{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,this.width,height,ground_options);
       // this.x=x;
       // this.y=y;
       
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x,pos.y,this.width,this.height);
}
}