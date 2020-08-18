class PackageBody{
    

    constructor(x,y,width,height){
        this.body=Bodies.rectangle(400,100,50,50,{isStatic:true});


     


        this.width=10;
        this.height=10;
        

        World.add(world,this.body);
        
    }

    display(){

        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
    
}