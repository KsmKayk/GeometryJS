class Jogo {
  frames = 0;
  maxPulos = 5;
  largura = 600;
  altura = 600;

  constructor() {}

  configurar() {
    this.configurarElementosDeTela();
    this.configuraClique();
  }

  configurarElementosDeTela() {
    this.configurarCenario();
    this.configurarChao();
    this.configurarPersonagem();
  }

  configurarCenario() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.largura;
    this.canvas.height = this.altura;
    this.canvas.style.border = "1px solid #000";
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
  }

  configurarChao() {
    this.chao = new Chao(this.ctx, this.largura);
  }

  configurarPersonagem() {
    this.personagem = new Personagem(
      this.ctx,
      this.chao,
      this.maxPulos,
      50,
      "#F00"
    );
  }

  configuraClique() {
    this.canvas.addEventListener("mousedown", () => this.personagem.pular());
  }

  rodar() {
    this.atualizar();
    this.renderizar();
  }

  atualizar() {
    this.personagem.atualizar();
  }

  renderizar() {
    this.frames++;
    this.renderizarCenario();
    this.renderizarChao();
    this.renderizarPersonagem();
  }

  renderizarCenario() {
    this.ctx.fillStyle = "#89D6FF";
    this.ctx.fillRect(0, 0, this.largura, this.altura);
  }

  renderizarChao() {
    this.chao.renderizar();
  }

  renderizarPersonagem() {
    this.personagem.renderizar();
  }
}
