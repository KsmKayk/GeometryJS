class Chao {
  // parametros do chão, onde inicia, seu tamanho em px e sua cor
  y = 550;
  altura = 50;
  largura = 0;
  cor = "#26802C";
  // entrada do chão no jogo, sua cor e posicionamento

  constructor(ctx, larguraCenario) {
    this.ctx = ctx;
    this.largura = larguraCenario;
  }

  renderizar() {
    this.ctx.fillStyle = this.cor;
    this.ctx.fillRect(0, this.y, this.largura, this.altura);
  }
}
