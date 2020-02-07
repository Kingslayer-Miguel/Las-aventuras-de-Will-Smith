class Bola{
  constructor(){
    this.x = 150;
    this.y = 200;
  }

mostrar(){
  ellipse(this.x,this.y,45,45);
}
  mover(){
    this.x++;
    this.y++;
  }
}
