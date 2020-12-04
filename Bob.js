class Bob{

    constructor(x,y,radius){

        var options={

            'restitution':1,
            'isStatic':false,
            'friction':0.5,
            'density':1.2

        }

        
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
        
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill("pink");
        ellipseMode(this.RADIUS);
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0, this.radius, this.radius);
        pop();
    
    }
}