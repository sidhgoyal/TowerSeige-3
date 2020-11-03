class Ground {
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.h = h
      this.y = y
      this.w = w
      this.x = x
      this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.w, this.h);
    }
  };
