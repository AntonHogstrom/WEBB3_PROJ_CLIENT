"use strict";

//variables for targetting elements
const menuEl = document.querySelector("#menu_div");
const menuIcon = document.querySelector(".menu_icon");
const menuUl : HTMLDivElement = document.querySelector("#menu_ul");
const closeMenu = document.querySelector("#closeMenu");


//menuUl.style.display = "none";

//switch display of menu list on click
menuEl.addEventListener("click", () => {
    if(menuUl.style.display !== "none") {
        menuUl.style.display = "none";
    } else {
        menuUl.style.display = "block";
    }
});

closeMenu.addEventListener("click", () => {
    menuUl.style.display = "none";
})