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
let box = document.querySelector(".box");
import { data } from "./data.js";
const CategorySec = () => {
    if (box) {
        for (let i = 1; i <= 10; i++) {
            let categ = document.createElement("div");
            categ.classList.add("categ");
            box.appendChild(categ);
            let a = document.createElement("a");
            ;
            a.href = "/demo.html";
            categ.appendChild(a);
            let img = document.createElement("img");
            img.src = data.buttons[`button${i}`].img;
            img.alt = "category";
            a.appendChild(img);
            let h5 = document.createElement("h5");
            h5.innerHTML = data.buttons[`button${i}`].name;
            a.appendChild(h5);
        }
    }
};
CategorySec();
// Best Deals On SmartPhone Section
const BestDealMobileSec = () => {
    let mobilesBox = document.querySelector(".mobilesBox");
    if (mobilesBox) {
        for (let i = 1; i < 7; i++) {
            let a = document.createElement("a");
            a.href = "/demo.html";
            a.classList.add("sm");
            mobilesBox.appendChild(a);
            let img = document.createElement("img");
            img.alt = "sm";
            img.src = data.bestDealsOnSmartPhones[`mobile${i}`].img;
            a.appendChild(img);
            let span = document.createElement("span");
            span.innerHTML = data.bestDealsOnSmartPhones[`mobile${i}`].name;
            a.appendChild(span);
            let h5 = document.createElement("h5");
            h5.innerHTML = data.bestDealsOnSmartPhones[`mobile${i}`].price;
            a.appendChild(h5);
        }
    }
};
BestDealMobileSec();
// Scroll Mechanism
const ScrollMech1 = () => {
    let scrollContainer = document.querySelector(".mobilesBox");
    let leftScroll = document.querySelector(".leftScroll");
    let rightScroll = document.querySelector(".rightScroll");
    let turn = 0;
    if (turn == 0) {
        rightScroll.addEventListener("click", () => {
            scrollContainer.scrollTo({ left: scrollContainer.scrollWidth, behavior: "smooth" });
            leftScroll.style.display = "block";
            rightScroll.style.display = "none";
            turn = 1;
        });
    }
    leftScroll.addEventListener("click", () => {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        turn = 0;
        leftScroll.style.display = "none";
        rightScroll.style.display = "block";
    });
};
ScrollMech1();
// Best Deals On Furniture Section
const BestDealFurnSec = () => {
    let furnitureBox = document.querySelector(".furnitureBox");
    if (furnitureBox) {
        for (let i = 1; i < 9; i++) {
            let a = document.createElement("a");
            a.href = "/demo.html";
            a.classList.add("sm");
            furnitureBox.appendChild(a);
            let img = document.createElement("img");
            img.alt = "sm";
            img.src = data.furnitureTopDeals[`furniture${i}`].img;
            img.id = `furniture${i}`;
            a.appendChild(img);
            let span = document.createElement("span");
            span.innerHTML = data.furnitureTopDeals[`furniture${i}`].name;
            a.appendChild(span);
            let h5 = document.createElement("h5");
            h5.innerHTML = data.furnitureTopDeals[`furniture${i}`].price;
            a.appendChild(h5);
        }
    }
};
BestDealFurnSec();
// Scroll Mechanism2
const ScrollMech2 = () => {
    let scrollContainer2 = document.querySelector(".furnitureBox");
    let leftScroll2 = document.querySelector(".leftScroll2");
    let rightScroll2 = document.querySelector(".rightScroll2");
    let turn2 = 0;
    if (turn2 == 0) {
        rightScroll2.addEventListener("click", () => {
            scrollContainer2.scrollTo({ left: scrollContainer2.scrollWidth, behavior: "smooth" });
            leftScroll2.style.display = "block";
            rightScroll2.style.display = "none";
            turn2 = 1;
        });
    }
    leftScroll2.addEventListener("click", () => {
        scrollContainer2.scrollTo({ left: 0, behavior: "smooth" });
        turn2 = 0;
        leftScroll2.style.display = "none";
        rightScroll2.style.display = "block";
    });
};
ScrollMech2();
// Banners Container
const BannersSec = () => {
    let bannersContainer = document.querySelector(".bannersContainer");
    let bannerIndex = 1;
    for (let i = 0; i < 3; i++) {
        const banner = document.createElement("a");
        banner.href = "/demo.html";
        banner.classList.add("banners", "box");
        bannersContainer.appendChild(banner);
        for (let a = 0; a < 3; a++) {
            const img = document.createElement("img");
            img.alt = "banner";
            img.src = data.normalBannerPart1[`banner${bannerIndex}`];
            banner.appendChild(img);
            bannerIndex++;
        }
        ;
    }
    ;
};
BannersSec();
// Best Deals On Furniture Section
const FeaturdBrands = () => {
    let featuredBox = document.querySelector(".featuredBox");
    if (featuredBox) {
        for (let i = 1; i < 11; i++) {
            let a = document.createElement("a");
            a.href = "/demo.html";
            a.classList.add("sm");
            featuredBox.appendChild(a);
            let img = document.createElement("img");
            img.alt = "sm";
            img.src = data.featuredBrands[`brand${i}`];
            a.appendChild(img);
        }
        ;
    }
    ;
};
FeaturdBrands();
// Scroll Mechanism
const scrollContainer3 = () => {
    let scrollContainer3 = document.querySelector(".featuredBox");
    let leftScroll3 = document.querySelector(".leftScroll3");
    let rightScroll3 = document.querySelector(".rightScroll3");
    let turn3 = 0;
    if (turn3 == 0) {
        rightScroll3.addEventListener("click", () => {
            scrollContainer3.scrollBy({ left: 800, behavior: "smooth" });
            leftScroll3.style.display = "block";
        });
    }
    ;
    leftScroll3.addEventListener("click", () => {
        scrollContainer3.scrollBy({ left: -800, behavior: "smooth" });
        turn3 = 1;
        rightScroll3.style.display = "block";
    });
};
scrollContainer3();
