"use strict";

//variables for targetting elements
const menuEl = document.querySelector("#menu_div");
const menuIcon = document.querySelector(".menu_icon");
const menuUl : HTMLDivElement = document.querySelector("#menu_ul");
const closeMenu = document.querySelector("#closeMenu");
const hamburger = document.getElementById("hamburger");
const topButton = document.getElementById("topButton");


if(menuUl) {
    menuUl.style.display = "none";
}

//switch display of menu list on click
menuEl.addEventListener("click", () => {
    if(menuUl.style.display !== "none") {
        menuUl.style.display = "none";
        hamburger.classList.remove("fa-times");
        hamburger.classList.add("fa-bars");
    } else {
        menuUl.style.display = "block";
        hamburger.classList.add("fa-times");
        hamburger.classList.remove("fa-bars");
    }
});

//Close menu on X icon on absolute menu
closeMenu.addEventListener("click", () => {
    menuUl.style.display = "none";
    hamburger.classList.remove("fa-times");
    hamburger.classList.add("fa-bars");
})


//Show topButton when not in top of page
if(topButton) {
    topButton.style.display = "none";
}
window.addEventListener("scroll", () => {
    if(topButton) {
        topButton.style.display = "none";
        if(window.scrollY < 300) {
            topButton.style.display = "none";
        } else {
            topButton.style.display = "grid";
        }
    }
})