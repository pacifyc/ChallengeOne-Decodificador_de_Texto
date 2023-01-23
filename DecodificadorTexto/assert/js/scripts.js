

let diaNoite = document.querySelector('#claro-escuro');

diaNoite.onclick = () =>{
    diaNoite.classList.toggle('fa-sun');
    if(diaNoite.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}




const vogais = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
}

/*------------------------------------------------------------------------*/

const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


closeModalButton.addEventListener("click", function () {

  modal.classList.toggle("hide");
  fade.classList.toggle("hide");

  document.querySelector("#exibe").value = " ";

})


/*------------------------------------------------------------------------*/

const btn_codificar = document.querySelector("#codificar");
const btn_descodificar = document.querySelector("#descodificar");

document.querySelector("#recebe").value = " ";
document.getElementById("recebe").focus();
//var name = document.querySelector("#recebe");

const valor = document.querySelector("#recebe").value;
console.log(valor.length);


let paragrafo = document.createElement("p");

let modal_mensagem = document.querySelector(".modal-body");


/*------------------------------------------------------------------------*/
/* Botão para CLIPTOGRAFA */

btn_codificar.addEventListener("click", function () {

  let frase = "";
  let resultado = "";
  let ativo = 0;

  //document.getElementById("recebe").focus();  

  const valor = document.querySelector("#recebe").value;

  frase = valor;

  //const valor = name.value;

  if (valor.length < 2) {

    console.log(typeof (valor));
    console.log(valor.length);
    console.log(paragrafo);

    console.log("valor vazio");

    // - Mensagem para exibir no modal

    paragrafo.innerHTML = "Caro usúario informe um texto e depois pressione o botão 'CLIPTOGRAFAR' e na caixa no lado direito será exibido o seu texto codificado"

    modal_mensagem.appendChild(paragrafo);

    //--------------------------------------------------//


    modal.classList.toggle("hide");
    fade.classList.toggle("hide");

    


  } else {

    for (let i = 0; i < frase.length; i++) {

      console.log(frase[i]);

      for (const letra in vogais) {

        if (frase[i] == letra) {

          resultado = resultado + vogais[letra];

          ativo = 1;

        }

      }

      if (ativo != 1) {

        resultado = resultado + frase[i];

      } else {

        ativo = 0;

      }

    }


    //console.log(valor.length);

    //console.log("esse é o valor", valor);

    document.querySelector("#exibe").value = resultado;


    //console.log(resultado);

    //console.log(frase.length);


  }

  document.querySelector("#recebe").value = " ";

});



/*------------------------------------------------------------------------*/
/* Botão para DESCLIPTOGRAFA */

btn_descodificar.addEventListener("click", function () {

  let frase = "";
  let resultado = "";
  let ativo = 0;

  let tamanho = 0;

  //document.getElementById("recebe").focus();

  const valor = document.querySelector("#recebe").value;

  frase = valor;

  //const valor = name.value;

  if (valor.length < 3) {

    console.log(typeof (valor));
    console.log(valor.length);

    console.log("valor vazio");

    // - Mensagem para exibir no modal

    paragrafo.innerHTML = "Caro usúario para 'DESCLIPTOGRAFA' o texto, você deve colar o texto na caixa do lado esquerdo e pressionar o botão 'DESCLIPTOGRAFA' que automaticamnete será exibido na caixa do lado direito o seu texto descliptografado.";

    modal_mensagem.appendChild(paragrafo);

    //--------------------------------------------------//



    modal.classList.toggle("hide");
    fade.classList.toggle("hide");


  } else {


    for(let i = 0; i < frase.length; i++){

      for(const letra in vogais){  

        if(frase[i] == letra){

          resultado = resultado + frase[i];

          tamanho = vogais[letra].length - 1;

          i = i + tamanho;

          ativo = 1;

          break;
          
        }else{

          tamanho = 0;

        }
        
      }

      if(ativo != 1){

        resultado = resultado + frase[i];
        
      }else{

        ativo = 0;
      }    

      
      
    }   


    //onsole.log(valor.length);

    //console.log("esse é o valor", valor);

    document.querySelector("#exibe").value = resultado;

    //console.log(resultado);

    //console.log(frase.length);

  }

  document.querySelector("#recebe").value = " ";

});


/*------------------------------------------------------------------------*/
/* Botão para COPIAR o texto */

let btnCopia = document.querySelector('#copiar');

btnCopia.addEventListener('click', function () {

  let textArea = document.querySelector('#exibe');

  textArea.select();

  document.execCommand('copy');

  document.querySelector("#exibe").value = " ";

});

