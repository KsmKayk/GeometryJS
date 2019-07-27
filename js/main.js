(function(undefined) {
  "use strict";

  require(["chao", "personagem", "jogo"], function() {
    const jogo = new Jogo();
    jogo.configurar();

    const loop = function() {
      jogo.rodar();
      window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
  });
})();

//let altura = window.innerHeight;
//let largura = window.innerWidth;

//window.requestAnimationFrame(this.rodar);
//document.addEventListener("mousedown", clique);
// roda();
