
function showTab(tabId) {
  // Oculta todos os conteúdos das abas
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Remove a classe "active" de todas as abas
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Mostra o conteúdo da aba selecionada
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = "block";

    // Verifica se a aba selecionada é "Área do Doador"
    if (tabId === "tab6") {
      // Exibe o formulário de login na aba "Área do Doador"
      var usuario = document.getElementById("usuario");
      if (usuario) {
        usuario.style.display = "block";
      }
    }
  }

  // Adiciona a classe "active" à aba selecionada
  var selectedTabButton = document.querySelector(".tab[id='" + tabId + "']");
  if (selectedTabButton) {
    selectedTabButton.classList.add("active");
  }
}
