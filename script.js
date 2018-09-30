const blocos = document.querySelectorAll(".blocos");
const vencedor = document.querySelector("#resultado");
const parabens = document.querySelector("body>div:nth-child(2)");
let contaCliques = 0;

function clicar (evento){
    
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
    }
}

function verificar(resultado){
    
    if(blocos[0].innerHTML == blocos[1].innerHTML && blocos[1].innerHTML == blocos.innerHTML[2] && blocos[0].innerHTML !== "" ||
    blocos[3].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[5].innerHTML && blocos[3].innerHTML !== "" ||
    blocos[6].innerHTML == blocos[7].innerHTML && blocos[7].innerHTML == blocos[8].innerHTML && blocos[6].innerHTML !== "" ||
    blocos[0].innerHTML == blocos[3].innerHTML && blocos[3].innerHTML == blocos[6].innerHTML && blocos[0].innerHTML !== "" ||
    blocos[1].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[7].innerHTML && blocos[1].innerHTML !== "" ||
    blocos[2].innerHTML == blocos[5].innerHTML && blocos[5].innerHTML == blocos[8].innerHTML && blocos[2].innerHTML !== "" ||
    blocos[0].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[8].innerHTML && blocos[0].innerHTML !== "" ||
    blocos[2].innerHTML == blocos[4].innerHTML && blocos[4].innerHTML == blocos[6].innerHTML && blocos[2].innerHTML !== ""){
        vencedor.innerHTML = `${resultado} VENCEU !!!`;
        parabens.style.visibility = "visible";
    }
    else if(contaCliques == 9){
        vencedor.innerHTML = "Deu velha !!!";
        parabens.style.visibility = "visible";
    }
}

for(let bloco of blocos){
    bloco.onclick = clicar;
}