class Polygon{
    constructor(x, y,radius) {
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.radius = radius;
        this.polygonImg= loadImage("download.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER);
        fill("yellow");
        image(this.polygonImg,0, 0, this.radius,this.radius);
        pop();
      }
}