let seuvoto = document.querySelector('.d1-1');
let cargo = document.querySelector('.d1-2');
let numero = document.querySelector('.d1-3');
let descrição = document.querySelector('.d1-4');
let lateral = document.querySelector('.d1-right');

etapaAtual = 0;
etapa = etapas[etapaAtual];
valores = '';
function começar(){
    seuvoto.innerHTML = 'Aperte para votar...';
    cargo.innerHTML = "";
    numero.innerHTML = "";
    descrição.innerHTML = "";
    lateral.innerHTML="";
    for (i=0;i<etapas[etapaAtual].numeros;i++){
        if(i==0){
            numero.innerHTML+= "<div class='numero pisca'></div>";
        }else{
            numero.innerHTML+= "<div class='numero'></div>";
        }
    }
}

function atualizar(){
    let etapa = etapas[etapaAtual]
    for(i in valores.length){
        numero.innerHTML =`<div class='numero'>${valores[i]}</div>`
    }
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero == valores){
            return true;
        }else{
            return false;
        }
    });
    candidato = candidato[0];
    seuvoto.innerHTML = "Seu Voto Para"
    let foto = ''
    for(i=0;i<candidato.fotos.length;i++){
        foto += `<img src="${candidato.fotos[i].url}" alt="">`
    }
    lateral.innerHTML = foto;
    descrição.innerHTML = `Nome: ${candidato.nome}<br/> Partido: ${candidato.partido}`
}


function clicar(n){
    let num = document.querySelector('.pisca');
    if(num !== null){
            num.innerHTML = n;
            valores += n;
            num.classList.remove('pisca');
        if(num.nextElementSibling !== null){
            num.nextElementSibling.classList.add('pisca');
        }else{
            atualizar();
        }
    }
}
function confirma(){
    valores = '';
    etapaAtual = 1;
    começar();
}
começar();