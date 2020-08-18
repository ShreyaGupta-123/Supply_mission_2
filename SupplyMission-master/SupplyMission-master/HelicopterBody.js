class HelicopterBody{
    constructor(){
        this.body=Bodies.rectangle(400,100,10,10,{isStatic:true});
        this.width=10;
        this.height=10;
        this.image=loadImage("pngfuel.com.png");
        World.add(world,this.body);
        
    }

    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

    }
}