// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")

// Add event listener
button.addEventListener("click", Altaviata)

// Define function
function Altaviata() {
            nume.innerHTML ="Certified Software Engineer"
            prenume.innerHTML= "Microsoft"

educatie.innerHTML = "Experiente"
asteptari.innerHTML = "<ul><li>Libertarte financiara</li><li>Educatie superioara</li><ul>"

img.src = "images/download.jpg"
img.style.opacity = "70%"
img.style.width = "200px"
img.style.height = "300px"
img.style.border = "3px solid black"


body.style.backgroundImage = "url('images/OIP.jpg')"
body.style.backgroundSize= "cover"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundPosition = "center"
body.style.backgroundAttachment= "fixed"
body.style.color = "purple"
body.style.fontFamily = " Montserrat"

}