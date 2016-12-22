function setup(){
  createCanvas(100, 100, WEBGL);

}
function draw(){
 //move the camera away from the plane by a sin wave
 camera(0, 0, sin(frameCount * 0.01) * 100);
 // plane(120, 120);

 ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
fill(255);  // Set fill to white
ellipse(50, 50, 30, 30);  // Draw white ellipse using RADIUS mode

ellipseMode(CENTER);  // Set ellipseMode to CENTER
fill(100);  // Set fill to gray
ellipse(50, 50, 30, 30);  // Draw gray ellipse using CENTER mode
}
