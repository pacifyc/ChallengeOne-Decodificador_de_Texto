const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


closeModalButton.addEventListener("click", function () {

  modal.classList.toggle("hide");
  fade.classList.toggle("hide");

})


const btn = document.querySelector("#codificar");
document.querySelector("#recebe").value = " ";
document.getElementById("recebe").focus();
//var name = document.querySelector("#recebe");

const valor = document.querySelector("#recebe").value;
console.log(valor.length);

btn.addEventListener("click", function () {

  //document.getElementById("recebe").focus();

  const valor = document.querySelector("#recebe").value;

  //const valor = name.value;

  if (valor.length < 3) {

    console.log(typeof(valor));
    console.log(valor.length);

    console.log("valor vazio");
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");


  } else {


    console.log(valor.length);

    console.log("esse é o valor", valor);

    document.querySelector("#exibe").value = valor;


  }



  document.querySelector("#recebe").value = " ";

});


let btnCopia = document.querySelector('#copiar');

btnCopia.addEventListener('click', function () {

  let textArea = document.querySelector('#exibe');

  textArea.select();

  document.execCommand('copy');

});