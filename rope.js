class rope
{
    constructor(body1,body2,pointA, pointB)
{
    this.pointA=pointA
    this.pointB=pointB

    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.pointA, y:this.pointB}, 
        length:1,
        stiffness:0,
    }
}

display()
  {
	  var pointA=this.rope.bodyA.position;
	  var pointB=this.rope.bodyB.position;

	  strokeWeight(0);
  }
}