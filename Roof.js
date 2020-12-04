class Roof{

    constructor(x,y,width,height){

        var option={

            isStatic:true

        }

        this.roofObject = Bodies.rectangle(x,y,width,height,option);
        World.add(world, this.roofObject);
        this.width=width;
        this.height=height;

    }
    display(){
        rectMode(CENTER);
        fill("grey");
        stroke(0);

        rect(this.roofObject.position.x,this.roofObject.position.y,this.width,this.height);

    }
}