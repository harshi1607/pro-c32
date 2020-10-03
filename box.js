class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=255;
        this.image=loadImage("wood1.png")
        World.add(world, this.body);
      }
      display(){  
        console.log(this.Visibility)
      if(this.body.speed<3){
        push();
        var pos =this.body.position;
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER);
        //fill("yellow");
        image(this.image,0, 0,50,50);
        pop();
        }
      
      else{
        World.remove(world,this.body)
        push();
        this.Visibility=this.Visibility-5
        tint(255,this.Visibility)
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();

      }
    }

getscore(){
  
  if(this.Visibility<0 && this.Visibility>-500){
    score++;
  }
}

}
//var pos =this.body.position;
       // push()
        //translate(pos.x,pos.y)
        //rectMode(CENTER);
        //fill("yellow");
        //rect(0, 0, this.width, this.height);
        //pop();