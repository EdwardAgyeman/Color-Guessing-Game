var p = document.createElement("p")
var r = Math.floor(Math.random()*256)
var g = Math.floor(Math.random()*256)
var b = Math.floor(Math.random()*256)
var rgbTrue = `${r}, ${g}, ${b}`
p.textContent = `Guess whatcolor rgb(${rgbTrue}) is:`
p.style.fontFamily = "Arial"
document.body.before(p)

var section = document.createElement("section")
section.style.display = "flex"
section.setAttribute("id", "container")
document.body.before(section)




var div1 = document.createElement("div")
var div2 = document.createElement("div")
var div3 = document.createElement("div")
var div4 = document.createElement("div")
var div5 = document.createElement("div")

div1.style.height = "100px"
div1.style.width = "100px"
div1.style.backgroundColor = `rgb(${rgbTrue})`

div2.style.height = "100px"
div2.style.width = "100px"
div2.style.backgroundColor = "yellow"


div3.style.height = "100px"
div3.style.width = "100px"
div3.style.backgroundColor = "green"


div4.style.height = "100px"
div4.style.width = "100px"
div4.style.backgroundColor = "blue"

div5.style.height = "100px"
div5.style.width = "100px"
div5.style.backgroundColor = `rgb(${rgbTrue})`

document.getElementById("container").appendChild(div1)
document.getElementById("container").appendChild(div2)
document.getElementById("container").appendChild(div3)
document.getElementById("container").appendChild(div4)
document.getElementById("container").appendChild(div5)





