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
    colorName = "Scarlet Red",
    rgbaValue = "12,12,12,1",
    hexValue = "#ff4400"
]

/* Connecting new colors to DOM */
mainColorEl.textContent = color[0]
colorNameEl.textContent = color[1]
rgbaValueEl.textContent = "RGBA: " + color[2]
hexValueEl.textContent = "HEX: " + color[3]

/* Local Storage */
function setColorsLocal() {
    localStorage.clear()
    localStorage.setItem("Main Color", color[0])
    localStorage.setItem("Color Name", color[1])
    localStorage.setItem("RGBA Value", color[2])
    localStorage.setItem("HEX Value", color[3])
}

/* Generating a new color */
color[0] = "1,1,1,1"
color[1] = "Purple"
color[2] = "1,1,1,1"
color[3] = "#00000"



/* Store to Local Storage - Must run after colors have been set */
setColorsLocal()

