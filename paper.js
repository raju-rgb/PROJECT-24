class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 0.2
}
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);
      push ();
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(0,0,this.radius, this.radius);
      pop();
    }
  };