class Rect {
    constructor(x,y,w,h,col) {
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.render.fillStyle = col;
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        fill(this.body.render.fillStyle);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
      }
}