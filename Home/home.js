const menu = document.getElementById("menu"); //pegando o elemento pelo ID

const navMenu = document.querySelector(".navegacao"); //pegando o elemento de forma genérica - pode ser classe (precisa trar o ponto) ou pode ser ID (precisa trazer a hashtag)

menu.addEventListener("click", function() {

    if(navMenu.className == "navegacao") {
        navMenu.className = "navegacao ativo";
    }
    else {
        navMenu.className = "navegacao";
    }
})

console.log(menu)
console.log(navMenu)