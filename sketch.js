// define variables
var bullet, wall, thickness;
var bulletSpeed, BulletWeight;
var damage;


function setup() {
  // create canvas
  createCanvas(1600,400);

  // make random bulletSpeed and weight
  bulletSpeed = Math.round(random(223, 321));
  bulletWeight = Math.round(random(30, 52));
  thickness = Math.round(random(22, 83));
  // calculate damage
  damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness*thickness*thickness);

  // create wall sprite
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  // cerate bullet sprite
  bullet = createSprite(50, 200, 60, 10);
  // make velocity X the bulletSpeed
  bullet.velocityX = bulletSpeed;
}

function draw() {
  // black background
  background(0);  

  // show bulletSpeed, bulletWeight and damage as text
  textSize(20);
  text("bulletSpeed is: " + bulletSpeed, 50, 50);
  text("bulletWeight is: " + bulletWeight, 250, 50);
  text("thickness is: " + thickness, 450, 50);

  // if the bullet is colliding with the wall
  if(collide(bullet, wall) === true)
  {
    // make the bullet stop
    bullet.velocityX = 0;
    // show damage
    text("damage is: " + damage, 650, 50);
    // set color based on damage
    if(damage > 10)
    {
      bullet.shapeColor = color(255, 0, 0);
    }
    if(damage < 10)
    {
      bullet.shapeColor = color(0, 255, 0);
    }  
  }

  // draw sprites
  drawSprites();
}

// collide function
function collide(obj1, obj2)
{
  // if the first object is past the second object
  if(obj1.x + obj1.width/2 >= obj2.x - obj2.width/2)
  {
    // give true
    return true;
  }
  else
  {
    // else give false
    return false;
  }
}
