/* Lets & Consts*/
let newColorValue = ""
let color = [
    mainColor = newColorValue,
    colorName = "Scarlet Red",
    rgbaValue = "12,12,12,1",
    hexValue = "#ff4400"
]
let newColorEl = document.getElementById("newColor")
let genRedValue = ""
let genGreenValue = ""
let genBlueValue = ""


function randomRGBvalue(){
    var returnColor = Math.floor(Math.random() * (255 - 1 + 1) + 1)
    return returnColor
}

function genNewColor(){
genRedValue = randomRGBvalue()
genGreenValue = randomRGBvalue()
genBlueValue = randomRGBvalue()

newColorValue = genRedValue + "," + genGreenValue + "," +genBlueValue

}

newColorEl.addEventListener("click", genNewColor());

console.log(newColorValue)

///* Generating a new color */
//function generateColor(min, max){
//    return Math.floor(Math.random() * (max - min + 1) + min)
//}
//
//
//
///* Listen event for clicks */
//newColorEl.addEventListener("click", function(){
//    console.log("You've clicked the button")
//    genBlueValue = generateColor(1,255)
//    genRedValue = generateColor(1,255)
//    genGreenValue = generateColor(1,255)
//    
//    return newColorValue = genRedValue + "," + genGreenValue + "," +genBlueValue
//})
//






/* Storing new color */
color[0] = newColorValue
color[1] = "Purple Rain"
color[2] = color[0]
color[3] = "#00000"


/*Getting DOM's */
const mainColorEl = document.documentElement.style.setProperty('--main-color', color[0])
const mainColorInverseEl = document.documentElement.style.setProperty('--main-color-inverse', color[0])
const colorNameEl = document.getElementById("colorNameEl")
const rgbaValueEl = document.getElementById("rgbaValueEl")
const hexValueEl = document.getElementById("hexValueEl")


/* Connecting new colors to DOM */
/*mainColorEl.textContent = color[0]*/
colorNameEl.textContent = color[1]
rgbaValueEl.textContent = "RGB: " + color[2]
hexValueEl.textContent = "HEX: " + color[3]

/* Local Storage */
function setColorsLocal() {
    localStorage.clear()
    localStorage.setItem("Main Color", color[0])
    localStorage.setItem("Color Name", color[1])
    localStorage.setItem("RGBA Value", color[2])
    localStorage.setItem("HEX Value", color[3])
}


/* Store to Local Storage - Must run after colors have been set */
setColorsLocal()

