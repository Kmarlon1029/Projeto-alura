function setup() {
  createCanvas(800, 600); // Define o tamanho da tela
}

function draw() {
  background(220); // Cor de fundo

  // Define a cor e o tamanho do círculo
  fill(100, 150, 250);
  stroke(0);
  strokeWeight(2);
  
  // Desenha o círculo na posição do mouse
  ellipse(mouseX, mouseY, 50, 50); // (x, y, largura, altura)
}
