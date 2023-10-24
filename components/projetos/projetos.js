const tituloProjetos = document.createElement("h1")
tituloProjetos.className = "tituloProjetos"
tituloProjetos.innerText = "Projetos"

pageProjetosGetById.appendChild(tituloProjetos)

function createButtonsprojects(id,text){
    const buttonProjetos = document.createElement('button')
    buttonProjetos.id = id
    buttonProjetos.innerText = text
    pageProjetosGetById.appendChild(buttonProjetos)
}
createButtonsprojects("btnUsuarios", "Cadastro de usuarios")
createButtonsprojects("btnEmpresa", "Cadastro de empresas")
createButtonsprojects("btnProdutos", "Cadastro de produtos")
createButtonsprojects("btnUsers", "Padastro de usuario")
createButtonsprojects("btnlogin", "Página de login")
createButtonsprojects("pageCadastroFront", "Página de usuarios")
createButtonsprojects("btnPortfolio", "Meu portfolio")
createButtonsprojects("btnPicpay","Desafio PicPay")

const picpayGetById = document.getElementById("btnPicpay")

const imgPicPay = document.createElement("img")
imgPicPay.className = "imgPicPay"
imgPicPay.src = "./assets/principal-page/icons8-loading-100.png"

picpayGetById.appendChild(imgPicPay)