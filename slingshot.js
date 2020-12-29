class Slingshot {
constructor(bodyA,pointB) {
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        lenght:0.04
    }

    this.pointB=pointB
    this.connect = Constraint.create(options)
    World.add(world,this.connect)
}
display() {
    if(this.connect.bodyA) {
    strokeWeight(3)
    line(this.connect.bodyA.position.x,this.connect.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}

 fly() {
 this.connect.bodyA=null
 }
}
