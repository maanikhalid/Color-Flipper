/* Lets & Consts*/
let newColorValue = ""
let color = [
    mainColor = "",
    colorName = "Random Color Generator",
    rgbaValue = mainColor,
    hexValue = "#ff4400"
]

/*Getting DOM's */
let mainColorEl = document.documentElement.style.setProperty('--main-color', color[0])
let mainColorInverseEl = document.documentElement.style.setProperty('--main-color-inverse', color[0])
let colorNameEl = document.getElementById("colorNameEl")
let rgbaValueEl = document.getElementById("rgbaValueEl")
let hexValueEl = document.getElementById("hexValueEl")
const newColorEl = document.querySelector("#newColor")

/* Choose new color on page load */
window.onload = function (){
    generateNewColor()
}

/* Generate a random RGB Value */
function randomRGB(newValue){
    
    newValue = Math.floor(Math.random() * (255 - 1 + 1) + 1) +","+ Math.floor(Math.random() * (255 - 1 + 1) + 1)+","+ Math.floor(Math.random() * (255 - 1 + 1) + 1)
   
    return newValue
}

/* Update with new color */
function generateNewColor(){
    color[0] = randomRGB(color[0])
    color[2] = color[0]
    
    /* Convert RGB to HEX */
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
    
    color[3] = rgb2hex('rgb(' + color[0] + ')')

    color.push(color[0])
    color.push(color[2])
    color.push(color[3])
    
    rgbaValueEl.textContent = "RGB: " + color[2]
    hexValueEl.textContent = "HEX: " + color[3]

    mainColorEl = document.documentElement.style.setProperty('--main-color', color[0])
    mainColorInverseEl = document.documentElement.style.setProperty('--main-color-inverse', color[0])
    
    
    localStorage.clear()
    localStorage.setItem("Main Color", color[0])
    localStorage.setItem("Color Name", color[1])
    localStorage.setItem("RGB Value", color[0])
    localStorage.setItem("HEX Value", color[3])

}

rgbaValueEl.addEventListener("dblclick", function(){
    console.log("Ready to copy")
        rgbaValueEl.innerHTML = "RGB: " + color[2] + "<span>✅</span>"
        navigator.clipboard.writeText(color[2]);
})


hexValueEl.addEventListener("dblclick", function(){
    console.log("Ready to copy")
        hexValueEl.innerHTML = "HEX: " + color[3] + " <span>✅</span>"
        navigator.clipboard.writeText(color[3]);
})
