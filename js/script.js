/*================================================ typing animation =======================================*/
var typed = new Typed(".typing",{
    strings:["","Web Developer","Web Designer"],
    typeSpeed:200,
    BackSpeed:100,
    loop:true
})
/* ===================================================================== */
var typed = new Typed(".typinga",{
    strings:["","Web Developer","Web Designer"],
    typeSpeed:200,
    BackSpeed:100,
    loop:true
})
/* ===========================menu====================== */
let menu = document.querySelector("#menu-bars");
let aside = document.querySelector(".aside");

menu.onclick = () =>{
  menu.classList.toggle("fa-times");
  aside.classList.toggle("active");
}
window.onscroll = () =>{
    menu.classList.remove("fa-times");
    aside.classList.remove("active");
  }