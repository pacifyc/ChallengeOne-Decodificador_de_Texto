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




btn_codificar.addEventListener("click", function () {

  let frase = "";
  let resultado = "";
  let ativo = 0;

  //document.getElementById("recebe").focus();

  const valor = document.querySelector("#recebe").value;

  frase = valor;

  //const valor = name.value;

  if (valor.length < 3) {

    console.log(typeof (valor));
    console.log(valor.length);

    console.log("valor vazio");
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


    console.log(valor.length);

    console.log("esse é o valor", valor);

    document.querySelector("#exibe").value = resultado;


    console.log(resultado);

    console.log(frase.length);


  }



  document.querySelector("#recebe").value = " ";

});




/*------------------------------------------------------------------------*/




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




    


    console.log(valor.length);

    console.log("esse é o valor", valor);

    document.querySelector("#exibe").value = resultado;


    console.log(resultado);

    console.log(frase.length);


  }


  document.querySelector("#recebe").value = " ";

});


/*------------------------------------------------------------------------*/


let btnCopia = document.querySelector('#copiar');

btnCopia.addEventListener('click', function () {

  let textArea = document.querySelector('#exibe');

  textArea.select();

  document.execCommand('copy');

  document.querySelector("#exibe").value = " ";

});