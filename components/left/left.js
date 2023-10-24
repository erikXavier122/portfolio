const h1Titulo = document.createElement('h1')
h1Titulo.className = "titulo"
h1Titulo.innerText = "Olá, sou o Erik"

const subTitulo = document.createElement('h2')
subTitulo.className = "subTitulo"
subTitulo.innerText = "Back-end Developer"

const paragrafoUm = document.createElement('p')
paragrafoUm.className = "paragrafoUm"
paragrafoUm.innerText = "É um prezer compartilhar as tecnologias que eu uso em meus projetos"


pageGetById.appendChild(h1Titulo)
pageGetById.appendChild(subTitulo)
pageGetById.appendChild(paragrafoUm)

// const buttonSobre = document.createElement("button")
// buttonSobre.className = "sobre"
// buttonSobre.innerText = "Sobre"

// // buttons close here

// navbarGetElement.appendChild(buttonContact)
// navbarGetElement.appendChild(buttonSobre)
// navbarGetElement.appendChild(buttonProject)
// navbarGetElement.appendChild(buttonTecnologias)
