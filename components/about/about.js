const tituloDoSobre = document.createElement('h1')
tituloDoSobre.className = "tituloDoSobre"
tituloDoSobre.innerText = "Sobre"

const paragrafoDoSobre = document.createElement('p')
paragrafoDoSobre.className = "paragrafoDoSobre"
paragrafoDoSobre.innerText = "Olá, me chamo Erik, tenho 18 anos, sou um profissional qualificado com um amplo conhecimento de habilidades em desenvolvimento de software e gerenciamento de infraestrutura. com foco especial em ambientes de microservices e containers eu domino o uso de tecnologias como kubernetes e docker para criação de sistemas escalaveis e eficientes. Além disso possuo um amplo conhecimento em em implementação de pipeline CI/CD ultilizando o GitHub Action. Como experiência em infraestrutura como código (IaC), eu sou  proficiente no uso do Terraform para automatizar a provisionamento e gerenciamento de infraestrutura.alem disso possuo conhecimento em plataformas de computação em nuvem, AWS e Azure.Eu tambem possuo conhecimento em monitoramento de aplicativos, ultilizando o kibana para rastrear e analizar o desempenho do sistema. Com uma experiencia em banco de dados relacionais (MySql e PostgreSQL). Com um conhecimento em SO (sistema Operacional) Linux e Windows, sou proficiente no uso da linguagem Java e no uso do Spring Framework para a criação de APIs REST, permitindo o desenvolvimento de aplicativos robustos e escaláveis."


sobreGetById.appendChild(tituloDoSobre)
sobreGetById.appendChild(paragrafoDoSobre)

// const buttonSobre = document.createElement("button")
// buttonSobre.className = "sobre"
// buttonSobre.innerText = "Sobre"

// // buttons close here

// navbarGetElement.appendChild(buttonSobre)