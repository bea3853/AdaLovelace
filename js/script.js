document.getElementById ("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
if(document.getElementById("nome").value  != "" && document.getElementById("email").value != ""){
  alert("Prontinho! você receberá as novidades por e-mail.")
} else {
   alert("Please, preeencha os campos, nome e e-mail.")

 }
}
