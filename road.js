class Road{
    constructor(x,y,w,h){
        this.road= rect(x,y,w,h);
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
    }
    display(){
        fill(255)
        rect(this.x,this.y,this.width,this.height);
    }
}