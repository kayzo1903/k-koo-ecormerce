// variable 

const bars = document.getElementById("bars")
const nav = document.querySelector(".nav-menu")
const searchIcon = document.getElementById("search-icon")
const searchMenu = document.querySelector(".search-menu")
const closeSearch = document.getElementById("close-search")
const listMenu = document.querySelector(".list-menu")
const links = document.querySelectorAll(".links")

//Dom listener 

bars.addEventListener("click", slider) 
window.addEventListener("scroll", close)
searchIcon.addEventListener("click", searchPannel)
closeSearch.addEventListener("click", close)
listMenu.addEventListener("click", activate)

//functions
function slider() {
   nav.classList.toggle("active")
   bars.classList.toggle("fa-xmark")
}

function close() {
   nav.classList.remove("active")
   bars.classList.remove("fa-xmark")
   searchMenu.classList.remove("active")
}

function searchPannel(){
  searchMenu.classList.toggle("active")
}

function activate(e) {
   links.forEach((clicked)=>{
      clicked.classList.remove("activate")
      e.target.classList.add('activate');
   })
}