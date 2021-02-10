class Slingshot{
    constructor (bodyA,pointB){
        var link_options={
            bodyA :bodyA,
            pointB : pointB,
            length :10,
            stiffness : 0.04
        }
    
        this.pointB = pointB
        this.sling = Constraint.create(link_options);
        World.add(world,this.sling)
    
    }
    display(){

        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.pointB;
          strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
    
    fly(){
        this.sling.bodyA=null;
    }


}
// .------------------------------
//null