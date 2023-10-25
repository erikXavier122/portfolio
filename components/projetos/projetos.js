const tituloProjetos = document.createElement("h1")
tituloProjetos.className = "tituloProjetos"
tituloProjetos.innerText = "Projetos"

pageProjetosGetById.appendChild(tituloProjetos)

function createButtonsProjects(id,href){
    const buttonProjetos = document.createElement('button')
    buttonProjetos.id = id
    buttonProjetos.href = href
    pageProjetosGetById.appendChild(buttonProjetos)
}
createButtonsProjects("btnUsuarios", "https://github.com/erikXavier122/spring-boot-api-cadastro")
createButtonsProjects("btnEmpresa", "https://github.com/erikXavier122/spring-boot-api-empresa.git")
createButtonsProjects("btnProdutos","https://github.com/erikXavier122/spring-boot-api-product.git")
createButtonsProjects("btnUsers", "https://github.com/erikXavier122/spring-boot-api-user.git")
createButtonsProjects("btnLoginFront","https://github.com/erikXavier122/pagina-de-login.git")
createButtonsProjects("btnCadastroFront","https://github.com/erikXavier122/Cadastro_de_usuarios.git")
createButtonsProjects("btnPortfolio","https://github.com/erikXavier122/portfolio.git")
createButtonsProjects("btnPicpay","https://github.com/erikXavier122/picpay.git")

function createimgProjects(id,src,idDestino){
    const imgProjetos = document.createElement('img')
    imgProjetos.id = id
    imgProjetos.src = src
    console.log(imgProjetos)
    const insideBtn = document.getElementById(idDestino)
    console.log(insideBtn)
    insideBtn.appendChild(imgProjetos)

}
createimgProjects("imgUsuarios","assets/principal-page/icons8-loading-100.png","btnUsuarios")
createimgProjects("imgEmpresa","./assets/principal-page/icons8-loading-100.png","btnEmpresa")
createimgProjects("imgProdutos","./assets/principal-page/icons8-loading-100.png","btnProdutos")
createimgProjects("imgUsers","./assets/principal-page/icons8-loading-100.png","btnUsers")
createimgProjects("imgLogin","./assets/principal-page/icons8-loading-100.png","btnLoginFront")
createimgProjects("imgPageCadastro","./assets/principal-page/icons8-loading-100.png","btnCadastroFront")
createimgProjects("imgPortfolio","./assets/principal-page/icons8-loading-100.png","btnPortfolio")
createimgProjects("imgPicpay","./assets/principal-page/icons8-loading-100.png","btnPicpay")

function createTextProjects(id,text,idTextDestino){
    const textProjetos = document.createElement('h2')
    textProjetos.id = id
    textProjetos.innerText = text
    const insideTextBtn = document.getElementById(idTextDestino)
    insideTextBtn.appendChild(textProjetos)

}
createTextProjects("textUsuarios","...","btnUsuarios")
createTextProjects("textEmpresa","...","btnEmpresa")
createTextProjects("textProdutos","...","btnProdutos")
createTextProjects("textUsers","...","btnUsers")
createTextProjects("textLogin","...","btnLoginFront")
createTextProjects("textPageCadastro","...","btnCadastroFront")
createTextProjects("textPortfolio","...","btnPortfolio")
createTextProjects("textPicpay","...","btnPicpay")