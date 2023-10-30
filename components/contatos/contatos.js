const textContatos = document.createElement("h1")
textContatos.id = "textContatos"
textContatos.innerText = "Contatos"

pageContatosGetById.appendChild(textContatos)

function createButtonsContatos(id,href){
    const buttonContatos = document.createElement('a')
    buttonContatos.id = id
    buttonContatos.href = href
    pageContatosGetById.appendChild(buttonContatos)
}
createButtonsContatos("butaoGmail","mailto:erokkater05@gmail.com")
createButtonsContatos("butaoWhatsapp","https://api.whatsapp.com/send?phone=5519992344785")
createButtonsContatos("butaoGithub","https://github.com/erikXavier122")
createButtonsContatos("butaoLinkedin","https://www.linkedin.com/in/erik-kater-8a702027b/")


function createImgContatos(id,src,idDestinoImg){
    const imgContatos = document.createElement('img')
    imgContatos.id = id
    imgContatos.src = src
    const insideImgBtn = document.getElementById(idDestinoImg)
    insideImgBtn.appendChild(imgContatos)

}
createImgContatos("imgLinkedin","assets/principal-page/icons8-linkedin-150.png","butaoLinkedin")
createimgProjects("imgGithub","./assets/principal-page/icons8-github-150.png","butaoGithub")
createimgProjects("imgWhatsapp","./assets/principal-page/icons8-whatsapp-150.png","butaoWhatsapp")
createimgProjects("imgGmal","./assets/principal-page/icons8-email-96.png","butaoGmail")

// function createImgContatos(id,src,idDestinoImg){
//     const imgContatos = document.createElement('img')
//     imgContatos.id = id
//     imgContatos.src = src
//     const insideImgBtn = document.getElementById(idDestinoImg)
//     insideImgBtn.appendChild(imgContatos)

// }
// createImgContatos("imgLinkedin","assets/principal-page/icons8-linkedin-150.png","butaoLinkedin")
// createimgProjects("imgGithub","./assets/principal-page/icons8-github-150.png","butaoGithub")
// createimgProjects("imgWhatsapp","./assets/principal-page/icons8-whatsapp-150.png","butaoWhatsapp")
// createimgProjects("imgGmal","./assets/principal-page/icons8-email-96.png","butaoGmail")