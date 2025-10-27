function preload() {
  // put preload code here
}

function setup() 
{
  createCanvas(1000,1000)
  noStroke()
}

function draw() 
{
  // put drawing code here
  background(0) //fondo negro
  fill(180)//color de la luna
  ellipse(250,250,200,200) //forma de la luna
  fill(100)//color de los cráteres
  ellipse(235, 160, 15, 10)
  ellipse(200, 190, 20, 13)
  ellipse(226, 200, 10, 7)
  ellipse(200, 225, 12, 8)
  ellipse(250, 210, 18, 12)
  ellipse(250,175,12,10)
  ellipse(175,209,15,10)
  
  fill(255, 230, 240)//cuerpo color
  //cuerpo de la kuromi
  ellipse(600, 620, 150, 175)

  // Manos
  fill(255, 230, 240)
  ellipse(520, 590, 50, 50) //mano izquierda mia
  ellipse(672, 590, 50, 50) //mano derecha mia
  // Pies
  ellipse(575, 708, 40, 60)//pierna izquierda mia
  ellipse(630, 708, 40, 60)//pierna derecha mia
  ellipse(571, 728, 45, 30) //pie izq mio
  ellipse(635, 728, 45, 30)//pie der mio

  //color orejas
  fill(40)
  //oreja izquiersa
  //triangle(x1,y1,x2,y2,x3,y3)
  triangle(520,490,480,400,580,450)
  //oreja derecha
  //triangle(x1,y1,x2,y2,x3,y3)
  triangle(670, 490, 710, 400, 610, 450)

  //gorrito color
  fill(40)
  //forma del gorrito
  ellipse(600,500,180,150)
  //cara kuromi
  fill(600, 230, 240);
  ellipse(600, 525, 125, 110)
  
  
  //pico frente
  //1.-,2.- pico de abajo, 3.-pico de la derecha(ancho),4.-
  fill(40)
  triangle(600,500,670,450,530,450)
  //calavera
  fill(255,100,180)
  ellipse(600,465,42,35)//cabeza de la calavera
  ellipse(595,482,4,10)//diente1
  ellipse(600,482,4,10)//diente2
  ellipse(605,482,4,10)//diente3
  fill(40)//color ojo calavera
  ellipse(590,468, 12, 12)//ojo1
  ellipse(610,468, 12, 12)//ojo2

  //ojos
  fill(0);
  ellipse(630, 520, 25, 25)
  ellipse(570, 520, 25, 25)
  fill(255);
  ellipse(573, 515, 6, 6)
  ellipse(565, 519, 3, 3)
  ellipse(635, 515, 6, 6)
  ellipse(625, 519, 3, 3)
  // Nariz
  fill(255)
  stroke(0)
  ellipse(600, 535, 10, 8);
  // Boca
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(600, 548, 20, 9, 0, PI);
  noStroke()
}
