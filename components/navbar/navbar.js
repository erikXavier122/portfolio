function createButtonsNavbar(nameClass,text){
    const buttonNavbar = document.createElement('button')
    buttonNavbar.className = nameClass
    buttonNavbar.innerText = text
    navbarGetById.appendChild(buttonNavbar)
}

createButtonsNavbar("contato", "Contato")
createButtonsNavbar("projetos", "Projetos")
createButtonsNavbar("tecnologias", "Tecnologias")
createButtonsNavbar("sobre", "Sobre")

