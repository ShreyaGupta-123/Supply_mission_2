class RedBox{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);


        this.height=height
        this.width=width
    }
    display(){
        push()
        fill("red")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop()
    }
}