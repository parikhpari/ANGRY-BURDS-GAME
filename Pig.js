class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    //to set visibility
    this.visibility=255;
    this.image = loadImage("sprites/enemy.png");
  }

  display(){
    //push the changes from this point
    push();
    //if the body speed willbe less than 3 pig won't be visible
    if(this.body.speed<3){
      super.display()
    }
    //else the bird will disappear and it will be removed from the world 
    else{
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
    //to end the changes from that point to this point
    pop();
  }
}