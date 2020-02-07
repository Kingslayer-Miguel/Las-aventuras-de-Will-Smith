let img;
var pelota;

function setup() {
  createCanvas(400, 400);
  img = loadImage('space.jfif');
  pelota = new Bola();
}

function draw() {
  background(220);
  image(img, 0, 0);
  pelota.mostrar();
  pelota.mover();
  console.log(pelota);
}
