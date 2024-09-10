const nome= document.querySelector("#name")
const email= document.querySelector("#email")
const number= document.querySelector("#number")
const submit = document.querySelector("#submit")

submit.addEventListener("click",(event)=>{
event.preventDefault();

if (nome.value!= "") {

 let confirmacao= confirm("Seus dados estão corretos?")
  if (confirmacao===true) {
    window.location.href = "thanks.html"
    
  }else{
    alert("conta não cadastrada")
  }
  
  
}else{
  alert("erro ao cadastrar!\npreencha todos os campos abaixo");
  
}


return;

})





