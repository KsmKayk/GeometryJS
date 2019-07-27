// "Personagem" do jogo
class Personagem {
  // Parametros do personagem, onde inicia, tamanho, cor, gravidade do -
  // - jogo, velocidade atual, força do pulo e quantidade de pulos
  x = 50;
  y = 0;
  altura = 50;
  largura = 50;
  cor = "#F94DFF";
  gravidade = 1.6;
  velocidade = 0;
  forcadopulo = 23.6;
  qtdPulos = 0;

  constructor(ctx, chao, maxPulos, eixoX, cor) {
    this.ctx = ctx;
    this.chao = chao;
    this.maxPulos = maxPulos;
    this.x = eixoX;
    this.cor = cor || this.cor;
  }

  // Aplicação da gravidade, e interatividade com o chão
  atualizar() {
    this.velocidade += this.gravidade;
    this.y += this.velocidade;
    if (this.y > this.chao.y - this.altura) {
      this.y = this.chao.y - this.altura;
      this.qtdPulos = 0;
    }
  }

  // pulo do personagem
  pular() {
    if (this.qtdPulos < this.maxPulos) {
      this.velocidade = -this.forcadopulo;
      this.qtdPulos++;
    }
  }

  //  colocando o personagem no jogo, com sua cor e posição
  renderizar() {
    this.ctx.fillStyle = this.cor;
    this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
  }
}
