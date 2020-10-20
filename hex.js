class hex {
    constructor(x,y) {
      var options = {
          'restitution':1,
          'friction':8,
          'density':3
      }
      this.body = Bodies.circle(x,y,30,options);
      this.radius = 30;
      World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("yellow"); 
    circle(pos.x, pos.y,15);
     push()
     var angle = this.body.angle;
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    pop()

    }
  };