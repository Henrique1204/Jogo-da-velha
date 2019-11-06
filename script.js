const blocos = document.querySelectorAll(".blocos");
const vencedor = document.querySelector("#resultado");
const parabens = document.querySelector("body>div:nth-child(3)");
const jogarDeNovo = document.querySelector("body>div:nth-child(4)");
let contaCliques = 0;

function clicar (evento){

    if(parabens.style.visibility !== "visible") {
        if(evento.target.innerHTML == ""){
            if(contaCliques % 2 === 0 ){
                evento.target.innerHTML = "X";
                evento.target.style.animation = "none";
            }
            else if(contaCliques % 2 === 1){
                evento.target.innerHTML = "O";
                evento.target.style.animation = "none";
            }
            contaCliques++;
            verificar(evento.target.innerHTML);
        };
    };
};

function verificar(resultado){
    
    if(blocos[0].innerHTML == blocos[1].innerHTML && blocos[1].innerHTML == blocos[2].innerHTML && blocos[0].innerHTML !== "" ||
    blocos[3].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[5].innerHTML && blocos[3].innerHTML !== "" ||
    blocos[6].innerHTML == blocos[7].innerHTML && blocos[7].innerHTML == blocos[8].innerHTML && blocos[6].innerHTML !== "" ||
    blocos[0].innerHTML == blocos[3].innerHTML && blocos[3].innerHTML == blocos[6].innerHTML && blocos[0].innerHTML !== "" ||
    blocos[1].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[7].innerHTML && blocos[1].innerHTML !== "" ||
    blocos[2].innerHTML == blocos[5].innerHTML && blocos[5].innerHTML == blocos[8].innerHTML && blocos[2].innerHTML !== "" ||
    blocos[0].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[8].innerHTML && blocos[0].innerHTML !== "" ||
    blocos[2].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[6].innerHTML && blocos[2].innerHTML !== ""){
        vencedor.innerHTML = `${resultado} VENCEU !!!`;
        parabens.style.visibility = "visible";
        jogarDeNovo.style.visibility = "visible";
    }
    else if(contaCliques == 9){
        vencedor.innerHTML = "Deu velha !!!";
        parabens.style.visibility = "visible";
        jogarDeNovo.style.visibility = "visible";
    };
};

function jogarOutraVez(){
    contaCliques = 0;
    parabens.style.visibility = "hidden";
    jogarDeNovo.style.visibility = "hidden";
    for(bloco of blocos){
        bloco.innerHTML = "";
        bloco.style.animation = "coresDoBloco 2s linear infinite";
    };
};

for(let bloco of blocos){
    bloco.onclick = clicar;
};

jogarDeNovo.onclick = jogarOutraVez;