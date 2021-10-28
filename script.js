const btn =document.querySelector(".contact .btn")
const msg = document.querySelector(".mmsg")
btn.addEventListener("click",function(e){
    e.preventDefault()
const messages="Thank you for contacting us . Bye"
msg.innerHTML=messages

})