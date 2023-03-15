/*Getting DOM's */
const mainColorEl = document.getElementById("mainColorEl")
const colorNameEl = document.getElementById("colorNameEl")
const rgbaValueEl = document.getElementById("rgbaValueEl")
const hexValueEl = document.getElementById("hexValueEl")

console.log(mainColorEl)
console.log(colorNameEl)
console.log(rgbaValueEl)
console.log(hexValueEl)

/* Lets & Consts*/
let color = [
    mainColor = "12,12,12",
    colorName = "Red",
    rgbaValue = "12,12,12",
    hexValue = "#ff4400"
]

/* Local Storage */
function setColorsLocal() {
    localStorage.clear()
    localStorage.setItem("Main Color", color[0])
    localStorage.setItem("Color Name", color[1])
    localStorage.setItem("RGBA Value", color[2])
    localStorage.setItem("HEX Value", color[3])
}

setColorsLocal()

