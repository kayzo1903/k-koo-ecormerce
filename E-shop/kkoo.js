//===NAVIGATION BAR

const nav = document.querySelector(".nav-menu")
const humbergerMenu = document.querySelector(".humberger")
const linksMenu = document.querySelectorAll(".links-menu")

humbergerMenu.addEventListener("click", ()=>{
    humbergerMenu.classList.toggle("active")
    nav.classList.toggle("active")
})

window.addEventListener("scroll",()=>{
    humbergerMenu.classList.remove("active")
    nav.classList.remove("active")
})

linksMenu.forEach((e)=>{
    e.addEventListener("click", ()=>{
        humbergerMenu.classList.remove("active")
        nav.classList.remove("active")
    })
})