class Vertices {
  constructor(x, y, letter){
    this.x = x;
    this.y = y;
    this.letter = letter;
  }
  
  showvertice(){
    noStroke();
    fill(0, 250, 175);
    ellipse(this.x, this.y, 10);
    textSize(15);
    fill(255);
    text(this.letter, this.x - 5, this.y - 8);
  }
}

function creatDots(vertice){
  let dot = new Dots(dotslista[j].x, dotslista[j].y, vertice);
  dotslista.push(dot);
  j +=1;
}

class Dots {
  constructor(x, y, vertice){
    this.x = (x + vertice.x)/2;
    this.y = (y + vertice.y)/2;
    this.vertice = vertice;
  }
  
  showpontonovo(){
    fill(this.x*255/600, this.y*255/600, 3*this.y*255/600);
    ellipse(this.x, this.y, 2);
  }
}