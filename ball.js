class ball {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':1,
        'friction':1,
        'density':95
      }

      

      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
        
      World.add(world, this.body);
      }
    display(){
      ellipseMode(RADIUS);
  
      fill("yellow");
  
      circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };