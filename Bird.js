class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.candyFloss = loadImage("sprites/smoke.png");
    this.arr = [];
  }

  display() {
  
  console.log(this.arr);

    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var situation = [this.body.position.x, this.body.position.y];
      this.arr.push(situation);
    }
 

    for(var i = 0; i < this.arr.length; i = i+1){
    image(this.candyFloss, this.arr[i][0], this.arr[i][1]);
    }

  }
}
