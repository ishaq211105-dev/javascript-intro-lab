console.dir(document)

document.getElementById("myHeading").innerHTML="ishaq"

document.querySelector("nav ul li").setAttribute("class","currentPage")

document.querySelector("nav ul li a").setAttribute("href", "")

// const myHeading = document.getElementById("myHeading")

// myHeading.innerHTML = "Ishaq"

// const myLink = document.querySelector("nav ul li")
// myLink.setAttribute("class",)

// let colourButtons = document.querySelectorAll(".colPicker");
// console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'

// for (let i = 0; i < colourButtons.length; i++) {
//     colourButtons[i].style.backgroundColor = "green";
// }

document.getElementById("myTestBtn").addEventListener("click", function(ev){
    console.info(ev.target)
})

const redBtn = document.querySelector(".red")
redBtn.addEventListener("click", function (){
    console.info("Red button Clicked")
    document.body.setAttribute("class", "redBack")
})

const greenBtn = document.querySelector(".green")
greenBtn.addEventListener("click", function (){
    console.info("Green button Clicked")
    document.body.setAttribute("class", "greenBack")
})

const blueBtn = document.querySelector(".blue")
blueBtn.addEventListener("click", function (){
    console.info("Blue button Clicked")
    document.body.setAttribute("class", "blueBack")
})

const purpBtn = document.querySelector(".purple")
purpBtn.addEventListener("click", function (){
    console.info("Purple button Clicked")
    document.body.setAttribute("class", "purpleBack")
})

const defaultBtn = document.querySelector(".reset")
defaultBtn.addEventListener("click", function (){
    console.info("Default button Clicked")
    document.body.removeAttribute("class")
})