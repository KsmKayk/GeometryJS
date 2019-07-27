//let altura = window.innerHeight;
//let largura = window.innerWidth;
const jogo = new Jogo();
jogo.configurar();

const loop = function() {
  jogo.rodar();
  window.requestAnimationFrame(loop);
};
window.requestAnimationFrame(loop);

//window.requestAnimationFrame(this.rodar);
//document.addEventListener("mousedown", clique);
// roda();
