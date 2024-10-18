const firstA = document.querySelector('.header-menu a:first-child')

function changeMode() {
  const html = document.documentElement
  html.classList.toggle('light-mode')
}

firstA.addEventListener('click', changeMode)
