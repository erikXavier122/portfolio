const tituloProjetos = document.createElement("h1")
tituloProjetos.className = "tituloProjetos"
tituloProjetos.innerText = "Projetos"

pageProjetosGetById.appendChild(tituloProjetos)

function createButtonsProjects(id){
    const buttonProjetos = document.createElement('button')
    buttonProjetos.id = id
    pageProjetosGetById.appendChild(buttonProjetos)
}
createButtonsProjects("btnUsuarios")
createButtonsProjects("btnEmpresa")
createButtonsProjects("btnProdutos")
createButtonsProjects("btnVagas")
createButtonsProjects("btnLoginFront")
createButtonsProjects("btnCadastroFront")
createButtonsProjects("btnPortfolio")
createButtonsProjects("btnPicpay")

function createimgProjects(id,src,idDestino){
    const imgProjetos = document.createElement('img')
    imgProjetos.id = id
    imgProjetos.src = src
    console.log(imgProjetos)
    const insideBtn = document.getElementById(idDestino)
    console.log(insideBtn)
    insideBtn.appendChild(imgProjetos)

}
createimgProjects("imgUsuarios","assets/principal-page/imagem-swagger.png","btnUsuarios")
createimgProjects("imgEmpresa","./assets/principal-page/imagem-swagger.png","btnEmpresa")
createimgProjects("imgProdutos","./assets/principal-page/imagem-swagger.png","btnProdutos")
createimgProjects("imgVagas","./assets/principal-page/imagem-postman.png","btnVagas")
createimgProjects("imgLogin","./assets/principal-page/image-login.png","btnLoginFront")
createimgProjects("imgPageCadastro","./assets/principal-page/image-cadastro.png","btnCadastroFront")
createimgProjects("imgPortfolio","./assets/principal-page/image-portfolio.png","btnPortfolio")
createimgProjects("imgPicpay","./assets/principal-page/icons8-loading-100.png","btnPicpay")

function createTextProjects(id,text,idTextDestino){
    const textProjetos = document.createElement('h2')
    textProjetos.id = id
    textProjetos.innerText = text
    const insideTextBtn = document.getElementById(idTextDestino)
    insideTextBtn.appendChild(textProjetos)
}
createTextProjects("textUsuarios","Cadastro de Usuarios","btnUsuarios")
createTextProjects("textEmpresa","Cadastro de Empresas","btnEmpresa")
createTextProjects("textProdutos","Cadastro de Produtos","btnProdutos")
createTextProjects("textVagas","Cadastro de Vagas","btnVagas")
createTextProjects("textLogin","Pagina de Login","btnLoginFront")
createTextProjects("textPageCadastro","Pagina de Cadastro","btnCadastroFront")
createTextProjects("textPortfolio","Pagina do portfolio","btnPortfolio")
createTextProjects("textPicpay","Desafio Picpay(concluindo)","btnPicpay")

function createDivProjects(id,idDestinoDiv){
    const divProjetos = document.createElement('div')
    divProjetos.id = id
    const insideDiv = document.getElementById(idDestinoDiv)
    insideDiv.appendChild(divProjetos)
}
createDivProjects("divUsuarios","btnUsuarios")
createDivProjects("divEmpresa","btnEmpresa")
createDivProjects("divProdutos","btnProdutos")
createDivProjects("divVagas","btnVagas")
createDivProjects("divLogin","btnLoginFront")
createDivProjects("divPageCadastro","btnCadastroFront")
createDivProjects("divPortfolio","btnPortfolio")
createDivProjects("divPicpay","btnPicpay")


function createiconsProjects(id,src,idIconDestino){
    const iconProjetos = document.createElement('img')
    iconProjetos.id = id
    iconProjetos.src = src
    const insideIcon = document.getElementById(idIconDestino)
    insideIcon.appendChild(iconProjetos)

}
// primeiro
createiconsProjects("javaUsuarios","assets/principal-page/icons8-java-150.png","divUsuarios")
createiconsProjects("springUsuarios","assets/principal-page/icons8-spring-boot-150.png","divUsuarios")
createiconsProjects("swaggerUsuarios","assets/principal-page/swagger-icon-256x256-5u6jd5q7.png","divUsuarios")
createiconsProjects("mysqlUsuarios","assets/principal-page/icons8-mysql-logo-150.png","divUsuarios")
createiconsProjects("dockerUsuarios","assets/principal-page/icons8-docker-150.png","divUsuarios")
// segundo
createiconsProjects("javaEmpresa","assets/principal-page/icons8-java-150.png","divEmpresa")
createiconsProjects("springEmpresa","assets/principal-page/icons8-spring-boot-150.png","divEmpresa")
createiconsProjects("swaggerEmpresa","assets/principal-page/swagger-icon-256x256-5u6jd5q7.png","divEmpresa")
createiconsProjects("mysqlEmpresa","assets/principal-page/icons8-mysql-logo-150.png","divEmpresa")
createiconsProjects("dockerEmpresa","assets/principal-page/icons8-docker-150.png","divEmpresa")
// terceiro
createiconsProjects("javaProdutos","assets/principal-page/icons8-java-150.png","divProdutos")
createiconsProjects("springProdutos","assets/principal-page/icons8-spring-boot-150.png","divProdutos")
createiconsProjects("swaggerProdutos","assets/principal-page/swagger-icon-256x256-5u6jd5q7.png","divProdutos")
createiconsProjects("mysqlProdutos","assets/principal-page/icons8-mysql-logo-150.png","divProdutos")
createiconsProjects("dockerProdutos","assets/principal-page/icons8-docker-150.png","divProdutos")
// quarto
createiconsProjects("javaVagas","assets/principal-page/icons8-java-150.png","divVagas")
createiconsProjects("springVagas","assets/principal-page/icons8-spring-boot-150.png","divVagas")
createiconsProjects("postmanVagas","assets/principal-page/free-postman-3628404-3032239.png","divVagas")
createiconsProjects("mysqlVagas","assets/principal-page/icons8-mysql-logo-150.png","divVagas")
createiconsProjects("dockerVagas","assets/principal-page/icons8-docker-150.png","divVagas")
// quinto
createiconsProjects("htmlLogin","assets/principal-page/icons8-html-5-150.png","divLogin")
createiconsProjects("cssLogin","assets/principal-page/icons8-css3-150.png","divLogin")
createiconsProjects("jsLogin","assets/principal-page/icons8-javascript-150.png","divLogin")
// sexto
createiconsProjects("htmlLogin","assets/principal-page/icons8-html-5-150.png","divPageCadastro")
createiconsProjects("cssLogin","assets/principal-page/icons8-css3-150.png","divPageCadastro")
createiconsProjects("jsLogin","assets/principal-page/icons8-javascript-150.png","divPageCadastro")
// setimo
createiconsProjects("htmlLogin","assets/principal-page/icons8-html-5-150.png","divPortfolio")
createiconsProjects("cssLogin","assets/principal-page/icons8-css3-150.png","divPortfolio")
createiconsProjects("jsLogin","assets/principal-page/icons8-javascript-150.png","divPortfolio")
// oitavo
createiconsProjects("javaPicpay","assets/principal-page/icons8-java-150.png","divPicpay")
createiconsProjects("springPicpay","assets/principal-page/icons8-spring-boot-150.png","divPicpay")
createiconsProjects("swaggerPicpay","assets/principal-page/swagger-icon-256x256-5u6jd5q7.png","divPicpay")
createiconsProjects("postgresqlPicpay","assets/principal-page/icons8-postgresql-150.png","divPicpay")
createiconsProjects("dockerPicpay","assets/principal-page/icons8-docker-150.png","divPicpay")
createiconsProjects("maisPicpay","assets/principal-page/icons8-plus-math-100.png","divPicpay")


btnUsuarios.addEventListener('click', fctUsuarios);
btnEmpresa.addEventListener('click', fctEmpresa);
btnProdutos.addEventListener('click', fctProdutos);
btnVagas.addEventListener('click', fctVagas);
btnLoginFront.addEventListener('click', fctLoginFront);
btnCadastroFront.addEventListener('click', fctCadastroFront);
btnPortfolio.addEventListener('click', fctPortfolio);
btnPicpay.addEventListener('click', fctPicpay);

function fctUsuarios(){
    window.location.assign("https://github.com/erikXavier122/spring-boot-api-cadastro");
}

function fctEmpresa(){
    window.location.assign("https://github.com/erikXavier122/spring-boot-api-empresa");
}

function fctProdutos(){
    window.location.assign("https://github.com/erikXavier122/spring-boot-api-product");
}

function fctVagas(){
    window.location.assign("https://github.com/erikXavier122/spring-boot-api-register");
}

function fctLoginFront(){
    window.location.assign("https://github.com/erikXavier122/pagina-de-login");
}

function fctCadastroFront(){
    window.location.assign("https://github.com/erikXavier122/Cadastro_de_usuarios");
}

function fctPortfolio(){
    window.location.assign("https://github.com/erikXavier122/portfolio");
}

function fctPicpay(){
    window.location.assign("https://github.com/erikXavier122/picpay");
}
