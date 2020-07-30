class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("enemy.png");
    this.Visibility = 255;
  }
  display(){
    if(this.body.speed<4)
    {super.display();}
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-1115;
        tint(255,this.Visibility);
        pop();
      }
    }
  }
