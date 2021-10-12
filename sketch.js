let dotslista = [];
let verticeslista = []
let numeroaleatorioo;
let vertice1;
let vertice2;
let vertice3;
let j = 0;
let k = 0;

function setup() {
  let position
  let canvas
  position = windowWidth/2 - 600/2
  canvas = createCanvas(600, 500);
  canvas.position(position,0)
    background(0);
   vertice1 = new Vertices(300, 40, 'A');
   vertice2 = new Vertices(50, 473, 'B');
   vertice3 = new Vertices(550, 473, 'C');
   numeroaleatorioo = floor(random(0, 3));
   pontonovo = new Dots(200, 400, vertice3)
   dotslista.push(pontonovo)
   verticeslista = [vertice1, vertice2, vertice3]
  }

let n = 0;
let speed = 1;

function draw() {
  vertice1.showvertice();
  vertice2.showvertice();
  vertice3.showvertice();
  n = 1
  
  dotslista[k].showpontonovo();
  
  if (n == speed){
    creatDots(verticeslista[numeroaleatorioo]);
    numeroaleatorioo = floor(random(0, 3));
    k += 1
  }
}
