class bwalls{

    constructor(x,y,width,height){
    
    var options = {
    
    restitution : 0.5,
  //  isStatic : true,
    density:0.7,
    friction:1
    }
    this.width=width
    this.height=height;
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    
    
    }
    
    display(){
    
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER)
    fill("blue")
    rect(0,0,this.width,this.height)
    pop();
    
    
    }
    
    
    }

