const btnAbrirPost1 = document.querySelector(".abrirPost1");
const btnAbrirPost2 = document.querySelector(".abrirPost2");
const btnAbrirPost3 = document.querySelector(".abrirPost3");
const body = document.querySelector("body");

btnAbrirPost1.addEventListener("click", (event) => {
  event.preventDefault();
  const background = document.createElement("section")
  const modalContainer = document.createElement("section");
  const contentContainer = document.createElement("div");
  const closeModal = document.createElement("button");
  const divPessoa = document.createElement("div");
  const divPerfil = document.createElement("div");
  const img = document.createElement("img");
  const divBio = document.createElement("div");
  const nomePessoa = document.createElement ("p")
  const funcao = document.createElement("h5");
  const divNoticias = document.createElement("div");
  const tituloNoticia = document.createElement("h3");
  const descNoticia = document.createElement("h4");

  background.className = "background" 
  modalContainer.classList = "modal-wrapper modalContainer modal modal-body";
  divPessoa.className = "modal-header";
  closeModal.className = " modal-close";
  tituloNoticia.className = " tituloNoticia";
  descNoticia.className = "descNoticia";

 nomePessoa.innerText = "Samuel Persuhn";
  funcao.innerText = "Front end Engineer";
  img.src = "../../assets/img/samuel.svg";
  tituloNoticia.innerText =
    "Empresa de Tecnologia da Informação abre vagas para programa de estágio";
  descNoticia.innerText =
    " A Generic Digital, empresa natalence especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 10 e 28 de agosto.";
  closeModal.innerText = "X";

  closeModal.addEventListener("click", (event) => {
   background.remove();
  });

  divPerfil.append(img, divBio);
  divBio.append(nomePessoa, funcao);
  divNoticias.append(tituloNoticia, descNoticia);
  divPessoa.append(divPerfil, divBio, closeModal);
  modalContainer.append(contentContainer, divPessoa, divNoticias);
  background.append(modalContainer);
  body.append(background);
});
///////////

btnAbrirPost2.addEventListener("click", (event) => {
  event.preventDefault();
  const background = document.createElement("section")
  const modalContainer = document.createElement("section");
  const contentContainer = document.createElement("div");
  const closeModal = document.createElement("button");
  const divPessoa = document.createElement("div");
  const divPerfil = document.createElement("div");
  const img = document.createElement("img");
  const divBio = document.createElement("div");
  const nomePessoa = document.createElement ("p")
  const funcao = document.createElement("h5");
  const divNoticias = document.createElement("div");
  const tituloNoticia = document.createElement("h3");
  const descNoticia = document.createElement("h4");

  background.className = "background" 
  modalContainer.classList = "modal-wrapper modalContainer modal modal-body";
  divPessoa.className = "modal-header";
  closeModal.className = " modal-close";
  tituloNoticia.className = " tituloNoticia";
  descNoticia.className = "descNoticia";

  nomePessoa.innerText = "Carla Maria";
  funcao.innerText = "Back end Engineer";
  img.src = "../../assets/img/carla.svg";
  tituloNoticia.innerText =
  "Como melhorar sua lógica de programação? Desenvolvemos 5 passos para te ajudar"
  descNoticia.innerText =
    "Para quem está começando na área de T.I, em pleno século 21 este conceito pode parecer um grande desafio, pois requer muitas habilidades em diversas áreas de estudo, principalmente...";
  
    closeModal.innerText = "X";

  closeModal.addEventListener("click", (event) => {
   background.remove();
  });

  divPerfil.append(img, divBio);
  divBio.append(nomePessoa, funcao);
  divNoticias.append(tituloNoticia, descNoticia);
  divPessoa.append(divPerfil, divBio, closeModal);
  modalContainer.append(contentContainer, divPessoa, divNoticias);
  background.append(modalContainer);
  body.append(background);
});
////////////

btnAbrirPost3.addEventListener("click", (event) => {
    event.preventDefault();
    const background = document.createElement("section")
    const modalContainer = document.createElement("section");
    const contentContainer = document.createElement("div");
    const closeModal = document.createElement("button");
    const divPessoa = document.createElement("div");
    const divPerfil = document.createElement("div");
    const img = document.createElement("img");
    const divBio = document.createElement("div");
    const nomePessoa = document.createElement ("p")
    const funcao = document.createElement("h5");
    const divNoticias = document.createElement("div");
    const tituloNoticia = document.createElement("h3");
    const descNoticia = document.createElement("h4");
  
    background.className = "background" 
    modalContainer.classList = "modal-wrapper modalContainer modal modal-body";
    divPerfil.className = "divPerfil"
    divPessoa.className = "modal-header";
    closeModal.className = " modal-close";
    tituloNoticia.className = " tituloNoticia";
    descNoticia.className = "descNoticia"; 
   nomePessoa.innerText = "Júlia Martins"
  funcao.innerText = "Devop's";
  img.src = "../../assets/img/julia.svg";
  tituloNoticia.innerText =
    "NextJS como essa ferramenta revolucionou a maneira de desenvolver sites";
  
  descNoticia.innerText =
    " Provavelmente, você já ouviu falar do Next.js, considerado o framework mais popular do mercado. Com a expansão do mercado de tecnologia e sua influência em serviços de diver....";
  
  closeModal.innerText = "X";
  
    closeModal.addEventListener("click", (event) => {
     background.remove();
    });
  
    divPerfil.append(img, divBio);
    divBio.append(nomePessoa, funcao);
    divNoticias.append(tituloNoticia, descNoticia);
    divPessoa.append(divPerfil, divBio, closeModal);
    modalContainer.append(contentContainer, divPessoa, divNoticias);
    background.append(modalContainer);
    body.append(background);
});






 
