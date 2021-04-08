class bwalls{

    constructor(x,y){
    
    var options = {
    
    restitution : 0.5,
  //  isStatic : true,
    density:0.7,
    friction:1
    }
    this.width=33;
    this.height=50;
    
    this.body = Bodies.rectangle(x,y,35,60,options);
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