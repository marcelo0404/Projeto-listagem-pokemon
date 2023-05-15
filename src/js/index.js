//alert("olá!"); /*mesma função do print()*/
/*
   O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

   - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
       - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
       - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
       - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
       - passo 4 - adicionar a classe modo-escuro no body
       - passo 5 - trocar a imagem do botão de alterar tema pra lua
   
   - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
       - passo 6 - verificar se o body já tem a classe modo-escuro
       - passo 7 - remover a classe do modo-escuro do body
       - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/
//objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
//       - passo 1 - pegar no JS o elemento HTML       correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema"); //getElementById pega pelo id 

//- passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body

const body = document.querySelector("body") //querySelector busca logo uma tag

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {

    //bjetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol

    //passo 6 - verificar se o body já tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")


    //ao ives de usar as linhas de body remove e add, podeira usar uma função que reduzia o codigo, que e a (body.classList.toggle("modo-escuro")), essa função alterna em tirar e colocar class, no caso se estiver modo escuro ativo ela desliga e visse e vessa, e tem que ser antes do if e else.

    if (modoEscuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do body       
        body.classList.remove("modo-escuro");

        // - passo 8 - trocar a imagem do botão de alterar tema pra sol

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")


    } //o contains procura a class "modo-escuro" no body e retorna true quando ele esta dentro do body e false caso não esteja
    else {// se não o modo escuro é ligado

        //passo 4 - adicionar a classe modo-escuro no body

        body.classList.add("modo-escuro");//adicionar o modo escuro no body

        //passo 5 - trocar a imagem do botão de alterar tema pra lua

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }



});// isso é uma arrow function 
//refatorar o codigo no final

