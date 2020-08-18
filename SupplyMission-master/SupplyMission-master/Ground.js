class Ground{
    constructor(){
        this.body=Bodies.rectangle(400,680,800,20,{isStatic:true});
        this.width=800;
        this.height=20;
        World.add(world,this.body);
        
    }

    display(){

        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}