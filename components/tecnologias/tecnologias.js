const textTecnologias = document.createElement('h1')
textTecnologias.className = "textTecnologias"
textTecnologias.innerText = "Tecnologias" 

pageTecnologiasGetId.appendChild(textTecnologias)

const divTecnologias = document.createElement('div')
divTecnologias.id = "divTecnologias"
divTecnologias.className = "divTecnologias"

pageTecnologiasGetId.appendChild(divTecnologias)

const divTecnologiasGetById = document.getElementById("divTecnologias")

const srcBaseImages = "./assets/principal-page/"

function createIconTecnologias(id,src,idDestinoIcon){
    const iconTecnologias = document.createElement('img')
    iconTecnologias.id = id
    iconTecnologias.src = src
    const iconTecnologiasGetById = document.getElementById(idDestinoIcon)
    divTecnologiasGetById.appendChild(iconTecnologias)
}
createIconTecnologias("iconJava",srcBaseImages+"icons8-java-150.png","iconJava")
createIconTecnologias("iconSpring",srcBaseImages+"icons8-spring-boot-150.png","iconSpring")
createIconTecnologias("iconDocker",srcBaseImages+"icons8-docker-150.png","iconDocker")
createIconTecnologias("iconKubernetes",srcBaseImages+"icons8-kubernetes-150.png","iconKubernetes")
createIconTecnologias("iconPostgres",srcBaseImages+"icons8-postgresql-150.png","iconPostgres")
createIconTecnologias("iconMysqlAws",srcBaseImages+"icons8-mysql-logo-150.png","iconMysqlAws")
createIconTecnologias("iconAws",srcBaseImages+"icons8-amazon-web-services-150.png","iconAws")
createIconTecnologias("iconAzure",srcBaseImages+"icons8-azure-150.png","iconAzure")
createIconTecnologias("iconPostman",srcBaseImages+"free-postman-3628404-3032239.png","iconPostman")
createIconTecnologias("iconSwagger",srcBaseImages+"swagger-icon-256x256-5u6jd5q7.png","iconSwagger")
createIconTecnologias("iconJavaScript",srcBaseImages+"icons8-javascript-150.png","iconJavaScript")
createIconTecnologias("iconCss",srcBaseImages+"icons8-css3-150.png","iconCss")
createIconTecnologias("iconHtml",srcBaseImages+"icons8-html-5-150.png","iconHtml")