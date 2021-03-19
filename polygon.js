class Polygon {
    constructor(x,y,r)
{
    var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2,

    }
     
    this.x=x;
    this.y=y;
    this.r=r;
    this.image = loadImage("polygon.png");
    this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
    World.add(world,this.body);
}
    display(){
        var rubberpos = this.body.position;
        push();
        translate(rubberpos.x,rubberpos.y);
       
        strokeWeight(4);
        stroke("black");
        fill("darkblue");
        imageMode(CENTER);
        image(this.image, 0, 0,60,60);
        
        pop();

    }
};