class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length : 1
                    }
 this.sling1 = loadImage("sling1.png");
 this.sling2 = loadImage("sling2.png");
 this.sling3 = loadImage("sling3.png");
 this.pointB = pointB;
 this.sling = Constraint.create(options);
 World.add(world,this.sling);
   }
   attach(body){
     this.sling.bodyA = body;
   }
 fly()
 {
      this.sling.bodyA = null;
 }
   
 display(){
   image(this.sling1,200,40);
   image(this.sling2,170,40);
if(this.sling.bodyA){      
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    push();
   }
}
}
