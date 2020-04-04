var div1 = document.getElementById("one")
var div2 = document.getElementById("two")
var div3 = document.getElementById("three")
var div4 = document.getElementById("four")
var div5 = document.getElementById("five")
var randomDiv = [div1, div2, div3, div4, div5]

// Show every div in the console
randomDiv.forEach(e => {
    console.log(e)
})

// Generate the colorToBeGuessed and show in Console
var colorToBeGuessed = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
console.log(colorToBeGuessed)

// Create the p Element to display the colorToBeGuessed in UI
var p = document.createElement("p")
p.textContent = `Guess what color ${colorToBeGuessed} is:`
p.style.fontFamily = "Arial"
document.body.before(p)

// Assign a randomColor to a randomDiv (FOR LOOP VERSION):
for (let i=0; i<randomDiv.length; i++) {
    randomDiv[i].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    
    randomDiv[i].addEventListener("click", () => {
        let clickedColor = randomDiv[i].style.backgroundColor

        if(clickedColor == colorToBeGuessed) {
        document.getElementById("right").style.display = "block"
        return
    } 
    else {
        document.getElementById("wrong").style.display = "block"
        return
    } 
    })
}

// Assign the colorToBeGuessed to a randomDiv:
randomDiv[Math.floor(Math.random()*5)].style.backgroundColor = colorToBeGuessed