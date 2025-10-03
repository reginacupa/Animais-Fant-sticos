export default function initTabNav() {
  //Selecionar os itens
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo');

    //Função Callback
    //Recebe index como parâmetro para ativar a tab. Sempre que ativar, remove a classe ativo de todos os outros elementos.Função Callback


    //Adicionar o Evento
    //Neste caso precisamos passar antes a função anônima no callback, para podermos passar o index como argumento de activeTab
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
