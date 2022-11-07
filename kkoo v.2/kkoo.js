//computer data

const laptopStore = [
   {
      name:'Dell Inspiron 3583 15',
      id : 'Dell3583',
      category: 'store',
      description: 'Dell Inspiron 3583 15” Laptop Intel Celeron 128GB SSD  4GB DDR4  1.6GHz - Intel UHD Graphics 610 Windows 10 Home - Inspiron 15 3000',
      image: [
'https://m.media-amazon.com/images/I/7150w5ZxZ9L._AC_SL1293_.jpg',
'https://m.media-amazon.com/images/I/31dpd57JMrL._AC_.jpg',
'https://m.media-amazon.com/images/I/41zxWMThXwL._AC_.jpg',
'https://m.media-amazon.com/images/I/61wyZf5ttcL._AC_SL1092_.jpg',
'https://m.media-amazon.com/images/I/3100bBh1z5L._AC_US40_AA50_.jpg'
      ],
      price: '650,000Tsh',
   },
{
   name:'2022 Apple MacBook Air',
   id : 'MacBook-512gb',
   category: 'New-arrival',
   description: '2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera',
   image: [
'https://m.media-amazon.com/images/I/710TJuHTMhL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81REQ3YltZL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61XufEFo1dL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61N2OpMjEHL._AC_SL1500_.jpg'
   ],
   price: '1,750,000Tsh'
},
{
   name:'2022 Apple MacBook Air',
   id : 'MacBook-256gb',
   category: 'New-arrival',
   description: '2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera.',
   image: [
'https://m.media-amazon.com/images/I/719C6bJv8jL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61XufEFo1dL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61HS4BY-4rL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61GAbMHjeYL._AC_SL1500_.jpg'
   ],
   price: '1,650,000Tsh'
},
{
   name:'2022 Apple MacBook Pro',
   id : 'MacBook-pro-2021-256gb',
   category: 'Trending',
   description: '2022 Apple MacBook Pro Laptop with M2 chip: 13-inch Retina Display, 8GB RAM, 256GB ​​​​​​​SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD',
   image: [
'https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71K+bhq9bZL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/91RIJBLfEzL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/616IvCxxIpL._AC_SL1500_.jpg'
   ],
   price: '1,550,000Tsh'
},
{
   name:'2021 Apple MacBook Pro',
   id : 'MacBook-pro-2021-516gb',
   category: 'Trending',
   description: '2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Gray',
   image: [
'https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71ooAuqn7sL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/818mB1ifjfL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61R8bADaJOL._AC_SL1500_.jpg'
   ],
   price: '1,650,000Tsh'
},
{
   name:'2020 Apple MacBook Air Laptop',
   id : 'MacBook-air-2020-256',
   category: 'store',
   description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID',
   image: [
'https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/719BHaUQ46L._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/6155Fp7yaSL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71KpoUmtlqL._AC_SL1500_.jpg'
   ],
   price: '1.450,000Tsh'
},
{
   name:'2019 Apple MacBook Pro',
   id : 'MacBook-pro-2019-512',
   category: 'Trending',
   description: '2019 Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray',
   image: [
      'https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81aot0jAfFL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81mJ-Mdc-OL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/718Pz9bYxWL._AC_SL1500_.jpg'
   ],
   price: '1,350,000Tsh'
},
{
   name:'HP Laptop',
   id : 'HP-11-i5-256gb',
   category: 'store',
   description: 'HP 15.6-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (15-dy2024nr, Natural silver)',
   image: [
'https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71JL+uEoftL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71EHAHrIh9L._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/91yGKfgzCmL._AC_SL1500_.jpg'
   ],
   price: '1,050,000Tsh'
},
{
   name:'HP Laptop',
   id : 'HP-rayzen-256gb',
   category: 'Trending',
   description: 'hP 14 Laptop, AMD Ryzen 5 5500U, 8 GB RAM, 256 GB SSD Storage, 14-inch Full HD Display, Windows 10 Home, Thin & Portable, Micro-edge',
   image: [
'https://m.media-amazon.com/images/I/81BnABO7qiS._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81bcFYIG7nS._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71ZKlP8tJjS._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81d7CEkiULS._AC_SL1500_.jpg'
   ],
   price: '950,000Tsh'
},
{
   name:'HP Pavilion x360',
   id : 'HP-pavilion-11-i5-256gb',
   category: 'New-arrival',
   description: 'HP Pavilion x360 Convertible 14-inch Laptop, 11th Generation Intel Core i5-1135G7 processor, Intel Iris Xe Graphics, 8GB RAM, 256 GB SSD, Windows 11 Home',
   image: [
"https://m.media-amazon.com/images/I/81dRvbhb+wL._AC_SL1500_.jpg",
'https://m.media-amazon.com/images/I/81DgMOBlgbL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81eB4ehP-0L._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81nD-5D0iLL._AC_SL1500_.jpg'
   ],
      price: '1,050,000Tsh'
},
{
   name:'HP Laptop',
   id : 'HP-rayzen-7-256gb-5700U',
   category: 'store',
   description: 'HP 15.6-inch Laptop, AMD Ryzen 7 5700U, 8 GB RAM, 256 GB SSD, HD Micro-Edge Display, Windows 11 Home, Thin & Portable, Long-Lasting Battery',
   image: [
'https://m.media-amazon.com/images/I/718NhVMS0YL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81T79HU4mnL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81+Dt2NcZSL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81oz9u7cJPL._AC_SL1500_.jpg'
   ],
   price: '1,000,000Tsh'
},
{
   name:'HP Laptop',
   id : 'HP-i5-11-1135G7-256gb',
   category: 'High-rated',
   description: 'HP 17-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (17-cn0025nr,Natural Silver)',
   image: [
'https://m.media-amazon.com/images/I/71Jsnu1EdrL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81Q3Z6NTGUL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71gw1C6k8AL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81mNnxrOHaL._AC_SL1500_.jpg'
   ],
   price: '1,250,000Tsh'
},
{
   name:'HP Laptop',
   id : 'HP-11-i5-35g7-256',
   category: 'High-rated',
   description: 'HP 15 Laptop, 11th Gen Intel Core i5-1135G7 Processor, 8 GB RAM, 256 GB SSD Storage, 15.6” Full HD IPS Display, Windows 10 Home, HP Fast Charge, Lightweight',
   image: [
'https://m.media-amazon.com/images/I/81skV7BufjL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81YWu8ohvbL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81xWpvGSfNL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81ikM81zLlS._AC_SL1500_.jpg'
   ],
   price: '1,050,000Tsh'
},
{
   name:'Lenovo IdeaPad',
   id : 'Lenovo-2022-ideapad-i3-11-15G4',
   category: 'New-arrival',
   description: 'Lenovo - 2022 - IdeaPad Flex 5i - 2-in-1 Chromebook Laptop Computer - Intel Core i3-1115G4 - 13.3" FHD Touch Display - 8GB Memory - 128GB Storage',
   image: [
'https://m.media-amazon.com/images/I/71pieIAvqQL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81DT7MjtjXL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/81wnjM+URIL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71mJHnH-2rL._AC_SL1500_.jpg'
   ],
   price: '850,000Tsh'
},
{
   name:'Lenovo IdeaPad ',
   id : 'Lenovo-2022-i5-12-512gb',
   category: 'High-rated',
   description: 'Lenovo - 2022 - IdeaPad 3i - Essential Laptop Computer - Intel Core i5 12th Gen - 15.6" FHD Display - 8GB Memory - 512GB Storage - Windows 11 Pro',
   image: [
'https://m.media-amazon.com/images/I/71LsYu32caL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71ja+kNsb8L._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71WP11BABKL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61gb4XvLt6L._AC_SL1500_.jpg'
],
price: '750,000Tsh'
},
{
   name:'Lenovo IdeaPad',
   id : 'Lenovo-2022-ideaPad3-rayzen-512gb',
   category: 'store',
   description: 'Lenovo - 2022 - IdeaPad 3 - Travel Laptop Computer - AMD Ryzen 5 - 17.3" FHD Display - 8GB Memory - 512GB Storage - Windows 11 Home',
   image: [
  'https://m.media-amazon.com/images/I/714zwulp9QL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71Ny6i3CPFL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61Jb-jgZRLL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61bc9WRfnNL._AC_SL1500_.jpg'
   ],
   price: '650,000Tsh'
},
{
   name:'Lenovo Legion',
   id : 'Lenovo-gaming-i7-11-800H',
   category: 'store',
   description: 'Lenovo - Legion 5i - Gaming Laptop - Intel Core i7-11800H - 8GB DDR4 RAM - 1TB NVMe TLC SSD - NVIDIA GeForce RTX 3050 Ti Graphics - 17.3" FHD 144Hz - Windows 11 Home - Phantom Blue ',
   image: [
'https://m.media-amazon.com/images/I/713khoto9IL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71Sp9rirCIL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71P7tL3qONL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/71dVzfKa8oL._AC_SL1500_.jpg'
   ],
   price: '1,050,000Tsh'
},
{
   name:'Dell Inspiron',
   id : 'Dell-rayzen-radion-vega',
   category: 'store',
   description: 'Dell Inspiron 15.6" Laptop, AMD Ryzen 5 Processor (up to 3.5 GHz), AMD Radeon Vega 8 Graphics, 8GB DDR4 RAM, 256GB PCIe SSD, Full Keyboard, Webcam, HDMI',
   image: [
'https://m.media-amazon.com/images/I/81StA+2xVOL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61paYE0cK+L._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/719oSvYCJIL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/51k8gCoyOwL._AC_SL1500_.jpg'
   ],
   price: '850,000Tsh'
},
{
   name:'Dell Inspiron',
   id : 'Dell-2022-i5-10-35G1',
   category: 'High-rated',
   description: '2022 Newest Dell Inspiron 15.6" FHD Touchscreen Laptop, Intel 10th Generation Core i5-1035G1(Up to 3.60GHz, Beat i7-8550U), 16GB Memory, 512GB PCIe SSD',
   image: [
'https://m.media-amazon.com/images/I/71uYuacK8PL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/51+Z4mtDMdL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/41IEpjTZRVL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/41vTHdTGBbL._AC_SL1500_.jpg'
   ],
   price: '900,000Tsh'
},
{
   name:'Dell Latitude',
   id : 'Dell-7490-i7-8-8650U-512GB',
   category: 'store',
   description: 'Dell Latitude 7490 Intel Core i7-8650U 16GB DDR4 RAM, 512GB SSD 14" FHD Windows 10 Pro Laptop',
   image: [
'https://m.media-amazon.com/images/I/71zkzCckCYL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61qmsmfI0vL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61b5jSfJ5mL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/51LyDVO7XYL._AC_SL1500_.jpg'
   ],
   price: '980,000Tsh'
},
{
   name:'Dell Latitude',
   id : 'Dell-5480-i5-6-300U',
   category: 'store',
   description: 'Dell Latitude 5480 | 14 inch Business Laptop | Intel i5-6300U | 8GB DDR4 | 256GB SSD | Backlit Keyboard | Win 10 Pro ',
   image: [
'https://m.media-amazon.com/images/I/61R5Jq+v-pL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61CinvvNkcL._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/618VagDqc8L._AC_SL1500_.jpg',
'https://m.media-amazon.com/images/I/61sD3xbccdS._AC_SL1500_.jpg'
   ],
   price: '850,000Tsh'
},
]



// variable 

const bars = document.getElementById("bars")
const nav = document.querySelector(".nav-menu")
const searchIcon = document.getElementById("search-icon")
const searchMenu = document.querySelector(".search-menu")
const closeSearch = document.getElementById("close-search")
const listMenu = document.querySelector(".list-menu")
const links = document.querySelectorAll(".links")
const viewMoreProduct = document.querySelectorAll(".laptop-category-name")
const newArrival = document.getElementById("new")
const trending = document.getElementById("Trending")
const topRated = document.getElementById("top-rated")
const storeLoader = document.getElementById("store") //store conatiner product loader
const store = document.querySelector('.store')
const storeModal =document.querySelector('.store') // modal open  & close
const productDetails = document.querySelectorAll(".laptop-container") // for open the productModal
const modalProduct = document.querySelector(".modal-product")
const closeModal = document.getElementById("close-modal") 
const moreDetail = document.querySelector('.product-details') //PRODUCT Modal document
const closeStoreModal = document.getElementById('close-Store-Modal')
const cart= document.getElementById('open-cart')
const cartModal = document.querySelector('.cart')
const closeCart = document.querySelector('.close-cart')

//DOM loader 
window.addEventListener('DOMContentLoaded', ()=>{
   categoryDisplayer(newArrival, 'New-arrival')
   categoryDisplayer(trending, 'Trending')
   categoryDisplayer(topRated, 'High-rated')
   openStore()
})
//DOM FILTER METHOD

function categoryDisplayer(contentsLoader, category) {
   let filtrates = laptopStore.filter( laptop =>{
      if (laptop.category === category) {
            return laptop
      }
   })
   // console.log(filtrates);
   function laptopLoder(laptops) {
      let displayLaptop = laptops.map(items =>{
       return `
       <div class="laptop-product center">
         <div class="laptop-img">
            <img src=${items.image[0]} alt=${items.name}>
         </div>
          <div class="laptop-descriptions">
             <p>${items.name}</p>
             <p>${items.price}</p>
            <div class="laptop-rates row">
               <div class="rates">
                   <i class="fa fa-star"></i>
                   <i class="fa fa-star"></i>
                   <i class="fa fa-star"></i>
                   <i class="fa fa-star"></i>
                   <i class="fa fa-star-half"></i>
                </div>
               <div class="buy-icon">
                   <i class="fa fa-cart-plus" data-id=${items.id}></i>
               </div>
            </div>
            <button class="addToCart buy" data-id=${items.id}>
              Shop Now
            </button>
            <button class="addToCart details" data-id=${items.id}> 
                more details .....
             </button>
             </div>
             <div class="like">
                <i class="fa fa-heart"></i>
             </div>
         </div>`
      })
     displayLaptop = displayLaptop.join('')
     contentsLoader.innerHTML = displayLaptop
   }
   laptopLoder(filtrates)
}

//to get uNIque content



//Dom listener 

bars.addEventListener("click", slider) 
window.addEventListener("scroll", close)
searchIcon.addEventListener("click", searchPannel)
closeSearch.addEventListener("click", search)
listMenu.addEventListener("click", activate)
viewMoreProduct.forEach(element => {
   element.addEventListener("mouseover", viewMore)
   element.addEventListener("mouseleave", removeViewMore)
   element.addEventListener("click", openStoreModal)
});
closeModal.addEventListener("click", closeProductModal )

productDetails.forEach(element =>{
   element.addEventListener('click', openProductModal)
   // console.log(element);
})

closeStoreModal.addEventListener('click', closeStore) //close store


//functions
function slider() {
   nav.classList.toggle("active")
   bars.classList.toggle("fa-xmark")
}
function search() {
   searchMenu.classList.remove("active")
}
function close() {
   nav.classList.remove("active")
   bars.classList.remove("fa-xmark")
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

function viewMore() {
  viewMoreProduct.forEach(e =>{
   e.textContent = "view more"
  }) 
  }
    

function removeViewMore() {
   feature = ['New arrival', 'Trending' , 'Top rated']
   for (let i = 0; i < viewMoreProduct.length; i++) {
      viewMoreProduct[i].textContent = feature[i]     
   }
}

function openStoreModal() {
   store.classList.add('open')
   // console.log("hey");
}
function  closeStore() {
   store.classList.remove('open')
   // console.log("hey")
}

function openStore() {
  let ourStore = laptopStore.map(items =>{
   return `
   <div class="laptop-product center">
     <div class="laptop-img">
        <img src=${items.image[0]} alt=${items.name}>
     </div>
      <div class="laptop-descriptions">
         <p>${items.name}</p>
         <p>${items.price}</p>
        <div class="laptop-rates row">
           <div class="rates">
               <i class="fa fa-star"></i>
               <i class="fa fa-star"></i>
               <i class="fa fa-star"></i>
               <i class="fa fa-star"></i>
               <i class="fa fa-star-half"></i>
            </div>
           <div class="buy-icon">
               <i class="fa fa-cart-plus"  data-id=${items.id}></i>
           </div>
        </div>
        <button class="addToCart buy" data-id=${items.id}>
          Shop Now
        </button>
        <button class="addToCart details" data-id=${items.id}> 
            more details . . . . .
         </button>
         </div>
         <div class="like">
            <i class="fa fa-heart"></i>
         </div>
     </div>`
  })
 ourStore = ourStore.join('')
 storeLoader.innerHTML = ourStore
}

function  getTheLaptop(unIqueId) {
   let filtrates = laptopStore.filter( uniqueLaptop =>{
      if (uniqueLaptop.id === unIqueId) {
           return uniqueLaptop;
      }
   })
   function productDetailsLoader(UniqueLaptop) {
      let uniqueProduct = UniqueLaptop.map(item =>{
         return `
         <div class="product-image-details">
            <div class="main-product-image active-slide">
                <img src=${item.image[0]} alt=${item.name}>
            </div>
            <div class="main-product-image">
                <img src=${item.image[1]} alt=${item.name}>
            </div>
            <div class="main-product-image">
                <img src=${item.image[2]} alt=${item.name}>
            </div>
            <div class="main-product-image">
                <img src=${item.image[3]} alt=${item.name}>
            </div>
            <div class="btn-left-right center">
               <i class="fa fa-chevron-left" data-id='fa-chevron-left'></i>
               <i class="fa fa-chevron-right" data-id='fa-chevron-right'></i>
             </div> 
         </div>
         <div class="product-infomation center">
            <div class="more-details">
               <p>${item.description}</p>
               <p>${item.price}</p>
               <button class="addToCart cartDetails" data-id=${item.id}>
                  add to cart
               </button>
               <button class="addToCart buy">
                  Shop Now
               </button>
             </div>
         </div>`
      })
      uniqueProduct = uniqueProduct.join('')
      moreDetail.innerHTML = uniqueProduct
   }
   productDetailsLoader(filtrates)
}

function openProductModal(e) {
   let getid = e.target.dataset.id 
   if (e.target.classList.contains('details')) {
      modalProduct.classList.add('open')
      getTheLaptop(getid)
   }
   else if (e.target.classList.contains('fa-cart-plus')){
     addToMyCart(getid)
   }
}

function closeProductModal() {
   modalProduct.classList.remove('open')
}

//IMAGE SLIDER
const prevBtn = document.querySelector(".fa-chevron-left")
const nextBtn = document.querySelector(".fa-chevron-right")
const imageSlider =document.getElementsByClassName('main-product-image')
let n = 0

//LISTENER
moreDetail.addEventListener('click', sliderImage)
function sliderImage(event) {
  let btnClicked = event.target.dataset.id 
   if(btnClicked === 'fa-chevron-left'){
      // console.log(btnClicked);
      prev()
   }
   if(btnClicked === 'fa-chevron-right'){
      // console.log(btnClicked);
      next()
   }
}
//function

function prev() {
    n--
    if ( n > -1) {
        imageSlider[n+1].classList.remove("active-slide")
        imageSlider[n].classList.add("active-slide")
        // console.log(n)
    }
    else{
    //  console.log(n)
    imageSlider[0].classList.remove("active-slide")
    imageSlider[imageSlider.length - 1].classList.add("active-slide")
    n = imageSlider.length - 1
    }
}
function next() {
//    console.log(imageSlider.length)
   n++
   if (n < imageSlider.length) {
    imageSlider[n-1].classList.remove("active-slide")
    imageSlider[n].classList.add("active-slide")
    // console.log(n);
   }
   else{
    imageSlider[imageSlider.length - 1].classList.remove("active-slide")
    imageSlider[0].classList.add("active-slide")
    n = 0
    // console.log(n);
   }
}
//LOGIN FORM

const openLoginForm = document.getElementById("open-login-form")
const closeLoginForm = document.getElementById("close-login-form")
const  loginform = document.querySelector('.userAccount')

openLoginForm.addEventListener('click', userAccoundOpen)
closeLoginForm.addEventListener('click', userAccoundOpen)

function userAccoundOpen() {
   loginform.classList.toggle('openLogIN')

}

//Cart
const itemNumber = document.querySelector('.item-number')
let itemQuantity = 0

const itemAdd = () =>{
   itemQuantity++
   itemNumber.innerHTML = itemQuantity
   localStorage.setItem('itemNumber', itemQuantity)
}

const itemRemoved = () =>{
   if(itemQuantity > 0){
   itemQuantity-- }
   itemNumber.innerHTML = itemQuantity
   localStorage.setItem('itemNumber', itemQuantity)
}

const cartItemsQuantityLoader = () => {
   if(localStorage.getItem('itemNumber')){itemNumber.innerHTML = localStorage.getItem('itemNumber')}
   else {
      itemNumber.innerHTML = 0
   }
}
cart.addEventListener('click', ()=>{
    cartModal.classList.toggle('open')
})
closeCart.addEventListener('click', ()=>{
   cartModal.classList.toggle('open')
})

const cartContainer = document.querySelector('.cart-items-container')
const deleteCartList = document.querySelector('.delete-cart-list')

function addToMyCart(value){
   let filtrates = laptopStore.filter( items =>{
      if (items.id === value) {
          return items;
      }  
})
    let laptop = filtrates.map(items=>{
     return addThis(items)
    })
}


function addThis(values) {
   const barcode = new Date().getTime().toString()
   totalSpent(values)
   const element = document.createElement('div')
   element.classList.add('cart-items')
   const attr = document.createAttribute('data-id')
   attr.value = barcode
   element.setAttributeNode(attr)
   element.innerHTML = `
                                <div class="cart-product-image">
                                   <img src=${values.image[0]} alt=${values.name}>
                                </div>
                                  <div class="cart-product-name">
                                     <p>${values.name}</p>
                                     <p>${values.price}</p>
                                     <button class ='remove'> <i class="fa fa-trash-can"></i></button>
                                  </div>
                                  <div class="cart-product-Totalprice">
                                    <p>${values.price}</p>
                                  </div>`
   cartContainer.appendChild(element)
   deleteCartList.classList.add('visible')
   //cart button
   element.querySelector('.remove').addEventListener('click', remove)
   // element.querySelector('.increment').addEventListener('click', increment)
   // element.querySelector('.decrement').addEventListener('click', decrement)
   addToLocalStorage(barcode, values)
   itemAdd()
}

moreDetail.addEventListener("click", moreDetailCart)
function moreDetailCart(e) {
   let addToCart = e.target.dataset.id
   if (e.target.classList.contains('cartDetails')){
      addToMyCart(addToCart)
   }
}

//cart Activity-remove items
const cartItems = document.querySelectorAll('.cart-items')
function remove(e) {
   const element = e.currentTarget.parentElement.parentElement
   const id = element.dataset.id
   cartContainer.removeChild(element)
   let priceRemoved = element.children[1].children[1].innerHTML
   priceRemoved = Number((priceRemoved.replace(/\D/g, '')))
   priceDecrement(priceRemoved)
   if (cartContainer.children.length === 0) {
      deleteCartList.classList.remove('visible')
   }
   removeFromLocalStorage(id)
   itemRemoved()
}
 //delete all 
 const ClearAll = document.getElementById('ClearAll').addEventListener('click', ()=>{
   const itemsToClear = document.getElementsByClassName('cart-items')    
   if ( itemsToClear.length > 0) {
      Array.from(itemsToClear).forEach(element => {
         cartContainer.removeChild(element)
         deleteCartList.classList.remove('visible')
         totalSpent()
         localStorage.clear('list')
       })
         }
      itemQuantity = 0
      itemNumber.innerHTML = itemQuantity   
      localStorage.clear('itemNumber')
     })

//sum of total used
let totalCost = []
const totalCash = document.getElementById('totalCash')
function totalSpent(values) {
   if(values){
   totalCost.push(Number((values.price.replace(/\D/g, '')))) 
   sumAll = totalCost.reduce((a,b)=> { return a + b }, 0)
   totalCash.textContent = sumAll +' Tsh'}
   else {
      totalCost = []
      totalCash.textContent = '0000' +' Tsh'}
}

//price reduction
function priceDecrement(price){
   totalCost = totalCost.filter(items =>{
      if (items != price) {
         return items
      }
   })
   sumAll = totalCost.reduce((a,b)=> { return a + b }, 0)
   totalCash.textContent = sumAll + ' Tsh'
}

//local-storage
function getLocalStorage() {
   return  localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]
}
//add to local storage setup
function addToLocalStorage(id, values) {
   const grocery = {id, values}
   let items = getLocalStorage()
   items.push(grocery)
   localStorage.setItem('list', JSON.stringify(items))
}

//remove local storage
function removeFromLocalStorage(id) {
   let items = getLocalStorage()
   items = items.filter(item=>{
      if (item.id !== id) {
         return item
      }
   })
   localStorage.setItem('list', JSON.stringify(items))
 }


//window loader

window.addEventListener('DOMContentLoaded', ()=>{
   let items = getLocalStorage()
     items.map(item=>{
      itemLoader(item.id ,item.values)
})
    cartItemsQuantityLoader()
})

function itemLoader(id,values) {
      totalSpent(values)
      const element = document.createElement('div')
      element.classList.add('cart-items')
      const attr = document.createAttribute('data-id')
      attr.value = id
      element.setAttributeNode(attr)
      element.innerHTML = `
                                   <div class="cart-product-image">
                                      <img src=${values.image[0]} alt=${values.name}>
                                   </div>
                                     <div class="cart-product-name">
                                        <p>${values.name}</p>
                                        <p>${values.price}</p>
                                        <button class ='remove'> <i class="fa fa-trash-can"></i></button>
                                     </div>
                                     <div class="cart-product-Totalprice">
                                       <p>${values.price}</p>
                                     </div>`
      cartContainer.appendChild(element)
      deleteCartList.classList.add('visible')
      //cart button
      element.querySelector('.remove').addEventListener('click', remove)
}
