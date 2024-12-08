// Função de troca de Mode
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pega a TAG image e a substitui caso estiver light.
  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png' )
  }

  // Descrição
  const des = document.querySelector("#profile alt")
  if (html.classList.contains("light")) {
    des.setAttribute("alt", "Um gatinho tricolor em tons de marrom, branco e laranja, com manchas irregulares. Seus olhos estão fechados, pois ele está dormindo serenamente, tendo suas patinhas rosadas estendidas para a frente. Parece um gatinho filhote e muito fofo...")
  } else {
    des.setAttribute("alt",
      "A foto apresenta um gatinho com pelagem bicolor, preta e branca. Ele está com a língua de fora, parecendo brincalhão e fofo. O gatinho usa um laço rosa em uma de suas orelhas, e tem bigodes atrapalhados..."
      )
    }
}


