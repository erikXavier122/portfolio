function createAncorasNavbar(id,href,text){
    const buttonNavbar = document.createElement('a')
    buttonNavbar.id = id
    buttonNavbar.href = href
    buttonNavbar.innerText = text
    navbarGetById.appendChild(buttonNavbar)
}

createAncorasNavbar("contato","#pageContatos", "Contato")
createAncorasNavbar("projetos","#pageProjetos", "Projetos")
createAncorasNavbar("tecnologias","#pageTecnologias", "Tecnologias")
createAncorasNavbar("sobre","#pageSobre", "Sobre")