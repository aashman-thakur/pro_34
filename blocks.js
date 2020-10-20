class blocks {
   
    constructor(x,y) {
      
      var options = {
          'restitution':1,
          'friction':8,
          'density':3
      }
      this.body = Bodies.rectangle(x,y,30,30,options);
      this.width = 30;
      this.height = 30;
      World.add(world, this.body);
    }
    display(){ 
        var c ='blue'
     if(this.body.speed < 5){
    c ='blue '
    }else{
    c ='red'
    text('you Win!!',200,200)
    }
    fill(c)
    var pos =this.body.position;
    rectMode(CENTER);
    push()
    var angle = this.body.angle;
    rect(pos.x, pos.y, this.width, this.height);
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    pop()
   

    
  }};