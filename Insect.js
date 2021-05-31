class Insect{
    constructor(x, y, width, height, img) {
        var options = {
         // isStatic:true,
            'restitution':0.2,
           // 'friction':1.0,
           // 'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage(img)
        /*
var rand = Math.round(random(1,3))
        switch(rand){
          case 1:this.image = loadImage("sprites/insect1.png");break;
          case 2:this.image = loadImage("sprites/insect2.png");break;
          case 3:this.image = loadImage("sprites/insect3.png");break;
          default: break;
        }
        */
        World.add(world, this.body);
        this.Visibility =255;
      }
      display(){
       
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        
        
      }
      disappear(){
      
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      score(){
        if(this.Visibility===0){
          health = health -50;

        }
      }
      
      detectCollision(abody){
        
        var distance=dist(this.body.position.x,this.body.position.y, abody.x, abody.y)
       
            if(distance<=(this.body.width+abody.width)/2)
          { 
           //return true;
           console.log("true")
          }
        }
    }