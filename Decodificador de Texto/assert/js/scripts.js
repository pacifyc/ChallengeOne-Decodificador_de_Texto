const btn = document.querySelector("#codificar");

btn.addEventListener("click", function(){

    const name = document.querySelector("#recebe");

    const valor = name.value;

    console.log(valor);

    document.querySelector("#exibe").value = valor;
    
    document.querySelector("#recebe").value = " ";

});


let btnCopia = document.querySelector('#copiar');

btnCopia.addEventListener('click', function() {

  let textArea = document.querySelector('#exibe');

  textArea.select();

  document.execCommand('copy');
  
});