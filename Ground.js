class Ground{
    constructor(x,y,width,height){
      var options = {
          isStatic : true,
          friction : 0.5
      }  
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("silver");
        rect(this.x,this.y,this.width,this.height);
    }
}