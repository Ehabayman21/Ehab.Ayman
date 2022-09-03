/*=========================================== toggle style swicher===========================*/
const styelSwitcherToggel = document.querySelector(".styel-switcher-toggler");
styelSwitcherToggel.addEventListener("click", () => {
    document.querySelector(".styel-switcher").classList.toggle("open");
})
//hide styel - swicher onscroll 
window.addEventListener("scroll", () => {
    if(document.querySelector(".styel-switcher").classList.contains("open"))
    {
        document.querySelector(".styel-switcher").classList.remove("open");
    }
})
/*================================================them color============================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");           
        }
    })
}
/*================================================them light and dark============================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})