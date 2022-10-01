const loginBtn = document.querySelector(".loginBtn")
const modalzinho = document.querySelector (".modalzinho")

loginBtn.addEventListener ("click", (event) => {
    event.preventDefault()
    const  modalWrapper = document.createElement ("div")
    const modalBody = document.createElement ("div")
    const divAvisos = document.createElement ("div")
    const titulo = document.createElement("h3")
    const descricao = document.createElement("h5")
    const btnEntendi = document.createElement ("button")

    modalWrapper.className = "modal-wrapper"
    modalBody.className = "modal"
    divAvisos.className = "divAvisos" 
    titulo.className = "titulo"
    descricao.className= "descricao"
    btnEntendi.className = "btnModal"

titulo.innerText = "Acesso não autorizado"
descricao.innerText = "Essa conta não existe, logo não pode acessar a página dos posts"
btnEntendi.innerText = "Entendi"



    modalzinho.append(modalWrapper)
    modalWrapper.append(modalBody)
    modalBody.append(divAvisos)
    divAvisos.append(titulo, descricao)
    modalBody.append(btnEntendi)

    btnEntendi.addEventListener("click", (event) => {
        modalWrapper.remove() })
    })
