// BACKGROUND
const green = document.getElementById("green")
const pink = document.getElementById("pink")
const blue = document.getElementById("blue")
const black = document.getElementById("black")
const yellow = document.getElementById("yellow")

const circleBackground = document.getElementById("circleBackground")
const imgPhone = document.getElementById("imgPhone")

green.addEventListener("click", function() {
    imgPhone.src = "assets/img/green.png"
    circleBackground.style.background = "#D9EFD8"
})

pink.addEventListener("click", function() {
    imgPhone.src = "assets/img/pink.png"
    circleBackground.style.background = "#FAE1DC"
})

blue.addEventListener("click", function() {
    imgPhone.src = "assets/img/blue.png"
    circleBackground.style.background = "#10476D"
})

black.addEventListener("click", function() {
    imgPhone.src = "assets/img/black.png"
    circleBackground.style.background = "#302F37"
})

yellow.addEventListener("click", function() {
    imgPhone.src = "assets/img/yellow.png"
    circleBackground.style.background = "#FFE681"
})

// MENU RESPONSIVO
const menu = document.querySelector("#menu")
const nav = document.querySelector("nav ul")
const menuImg = document.querySelector("#menu img")

menu.addEventListener("click", () => {
    nav.classList.toggle("active")

    if(menuImg.getAttribute("src") === "assets/img/menu/open.svg") {
        menuImg.setAttribute("src", "assets/img/menu/close.svg")
    }
    else {
        menuImg.setAttribute("src", "assets/img/menu/open.svg")
    }
})