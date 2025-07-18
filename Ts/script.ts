// Types
type Anchor = HTMLAnchorElement;
type Image = HTMLImageElement;
type Div = HTMLDivElement;
type Heading = HTMLHeadingElement;
type Span = HTMLSpanElement;
type Btn = HTMLButtonElement;

// Swiper Js
declare var Swiper: any;

new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".custom-button-next",
        prevEl: ".custom-button-prev",
    },
});

// Category Section
let box = document.querySelector(".box") as Div;
import { data } from "./data.js";
const CategorySec = (): void =>{
if(box) {
    for(let i:number = 1; i<=10; i++) {
        let categ = document.createElement("div") as Div;
        categ.classList.add("categ");
        box.appendChild(categ);

        let a = document.createElement("a") as Anchor;;
        a.href = "/demo.html"
        categ.appendChild(a);

        let img = document.createElement("img") as Image;
        img.src = data.buttons[`button${i}`].img;
        img.alt = "category";
        a.appendChild(img);

        let h5 = document.createElement("h5") as Heading;
        h5.innerHTML = data.buttons[`button${i}`].name;
        a.appendChild(h5)
    }
}
}
CategorySec();

// Best Deals On SmartPhone Section
const BestDealMobileSec = (): void =>{
let mobilesBox = document.querySelector(".mobilesBox") as Div;

if(mobilesBox) {
    for(let i: number = 1; i<7; i++) {
    let a = document.createElement("a")  as Anchor;
    a.href = "/demo.html";
    a.classList.add("sm");
    mobilesBox.appendChild(a);

    let img = document.createElement("img") as Image;
    img.alt = "sm";
    img.src = data.bestDealsOnSmartPhones[`mobile${i}`].img;
    a.appendChild(img);

    let span = document.createElement("span") as Span;
    span.innerHTML = data.bestDealsOnSmartPhones[`mobile${i}`].name;
    a.appendChild(span);

    let h5 = document.createElement("h5") as Heading;
    h5.innerHTML = data.bestDealsOnSmartPhones[`mobile${i}`].price;
    a.appendChild(h5);
}
}
}
BestDealMobileSec();


// Scroll Mechanism
const ScrollMech1 = (): void =>{
let scrollContainer = document.querySelector(".mobilesBox") as Div;
let leftScroll = document.querySelector(".leftScroll") as Btn;
let rightScroll = document.querySelector(".rightScroll") as Btn;
let turn: number = 0;
if(turn == 0) {
rightScroll.addEventListener("click",(): void =>{
    scrollContainer.scrollTo({left: scrollContainer.scrollWidth, behavior: "smooth"});
    leftScroll.style.display = "block"
    rightScroll.style.display = "none"
    turn = 1;
})
}
leftScroll.addEventListener("click",(): void =>{
    scrollContainer.scrollTo({left: 0, behavior: "smooth"})
    turn = 0;
    leftScroll.style.display = "none";
    rightScroll.style.display = "block"
});
}
ScrollMech1();

// Best Deals On Furniture Section
const BestDealFurnSec = (): void =>{
let furnitureBox = document.querySelector(".furnitureBox") as Div;
if(furnitureBox) {
    for(let i: number = 1; i<9; i++) {
    let a = document.createElement("a") as Anchor;
    a.href = "/demo.html";
    a.classList.add("sm");
    furnitureBox.appendChild(a);

    let img = document.createElement("img") as Image;
    img.alt = "sm";
    img.src = data.furnitureTopDeals[`furniture${i}`].img;
    img.id = `furniture${i}`
    a.appendChild(img);

    let span = document.createElement("span") as Span;
    span.innerHTML = data.furnitureTopDeals[`furniture${i}`].name;
    a.appendChild(span);

    let h5 = document.createElement("h5") as Heading;
    h5.innerHTML = data.furnitureTopDeals[`furniture${i}`].price;
    a.appendChild(h5);
}
}
}
BestDealFurnSec();

// Scroll Mechanism2
const ScrollMech2 = (): void =>{
let scrollContainer2 = document.querySelector(".furnitureBox") as Div;
let leftScroll2 = document.querySelector(".leftScroll2") as Btn;
let rightScroll2 = document.querySelector(".rightScroll2") as Btn;
let turn2: number = 0;

if(turn2 == 0) {
rightScroll2.addEventListener("click",()=>{
    scrollContainer2.scrollTo({left: scrollContainer2.scrollWidth, behavior: "smooth"});
    leftScroll2.style.display = "block";
    rightScroll2.style.display = "none";
    turn2 = 1;
})
}
leftScroll2.addEventListener("click",()=>{
    scrollContainer2.scrollTo({left: 0, behavior: "smooth"})
    turn2 = 0;
    leftScroll2.style.display = "none";
    rightScroll2.style.display = "block"
});
}
ScrollMech2();

// Banners Container
const BannersSec = (): void =>{
let bannersContainer = document.querySelector(".bannersContainer") as Div;
let bannerIndex: number = 1;
for (let i: number = 0; i < 3; i++) {
    const banner = document.createElement("a") as Anchor;
    banner.href = "/demo.html"
    banner.classList.add("banners","box");
    bannersContainer.appendChild(banner);
    for(let a: number = 0; a < 3; a++) {
    const img = document.createElement("img") as Image;
    img.alt = "banner";
    img.src = data.normalBannerPart1[`banner${bannerIndex}`];
    banner.appendChild(img);
    bannerIndex++;
};};};
BannersSec();

// Best Deals On Furniture Section
const FeaturdBrands = (): void =>{
let featuredBox = document.querySelector(".featuredBox") as Div;
if(featuredBox) {
    for(let i: number = 1; i < 11; i++) {
    let a = document.createElement("a") as Anchor;
    a.href = "/demo.html";
    a.classList.add("sm");
    featuredBox.appendChild(a);

    let img = document.createElement("img") as Image;
    img.alt = "sm";
    img.src = data.featuredBrands[`brand${i}`];
    a.appendChild(img);
};};};
FeaturdBrands();

// Scroll Mechanism
const scrollContainer3 = (): void =>{
let scrollContainer3 = document.querySelector(".featuredBox") as Div;
let leftScroll3 = document.querySelector(".leftScroll3") as Btn;
let rightScroll3 = document.querySelector(".rightScroll3") as Btn;
let turn3: number = 0;
if(turn3 == 0) {
rightScroll3.addEventListener("click",()=>{
    scrollContainer3.scrollBy({left: 800, behavior: "smooth"});
    leftScroll3.style.display = "block";
});};
leftScroll3.addEventListener("click",()=>{
    scrollContainer3.scrollBy({left: -800, behavior: "smooth"})
    turn3 = 1;
    rightScroll3.style.display = "block"
});
}
scrollContainer3();

