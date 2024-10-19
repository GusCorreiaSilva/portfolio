const firstA = document.querySelector('.header-menu a:first-child')

function changeMode() {
  const body = document.querySelector('body')
  const bodyClass = body.classList
  bodyClass.toggle('light-mode')

  if (bodyClass.contains("light-mode")) {
    firstA.innerHTML = "Modo escuro"
  }else{
    firstA.innerHTML = "Modo claro"
  }
}

firstA.addEventListener('click', changeMode)
