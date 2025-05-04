let contador = 0;

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nome_jogo = gameClicado.querySelector('.dashboard__item__name');
  
    alert(nome_jogo.textContent);
    //console.log(imagem);

    if(imagem.classList.contains('dashboard__item__img--rented')){//CONFIRMAÇÃO AO DEVOLVER
if (confirm(`Você deseja realmente devolver o jogo ${nome_jogo.textContent}?`)) {
            console.log('sim');
          } else {
            console.log('não');
            return;
          }
    }

    if(imagem.classList.contains('dashboard__item__img--rented')){//ALTERAR DO BOTÃO
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = "Alugar";
    }else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
    }
     
    if(imagem.classList.contains('dashboard__item__img--rented')){//CONTAR JOGOS ALUGADOS
        contador = contador + 1;
        console.log(`Foram alugados ${contador} jogos.`);
    }
 }




