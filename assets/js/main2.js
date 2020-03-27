var rightAnswer = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
var wrong1 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
var wrong2 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
var wrong3 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
var wrong4 = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`

console.log(rightAnswer)
console.log(wrong1)
console.log(wrong2)
console.log(wrong3)
console.log(wrong4)

var p = document.createElement("p")
p.textContent = `Guess what color ${rightAnswer} is:`
p.style.fontFamily = "Arial"
document.body.before(p)


document.getElementById("one").style.backgroundColor = `${rightAnswer}`
document.getElementById("two").style.backgroundColor = `${wrong1}`
document.getElementById("three").style.backgroundColor = `${wrong2}`
document.getElementById("four").style.backgroundColor = `${wrong3}`
document.getElementById("five").style.backgroundColor = `${wrong4}`


function game() {
    if(rightAnswer = true) {
        document.getElementById("right").style.display = "block"
    } 
    else if(wrong1 = true) {
        document.getElementById("wrong").style.display = "block"
    }
}

