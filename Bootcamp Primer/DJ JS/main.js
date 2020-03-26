/* DJ JS 
Blue when the mouse hovers over the square
Red when the mouse button is held down over the square
Green when the mouse button is let go over the square
Yellow when the mouse is double clicked in the square
Orange when the mouse scroll is used somewhere in the window (not just over the square).
*/

box.addEventListener("mouseenter", function() {
    document.getElementById("box").style.backgroundColor = "blue"
})

box.addEventListener("mouseout", function() {
    document.getElementById("box").style.backgroundColor = "white"
})

box.addEventListener("mousedown", function() {
    document.getElementById("box").style.backgroundColor = "red"
})

box.addEventListener("mouseup", function() {
    document.getElementById("box").style.backgroundColor = "green"
})

box.addEventListener("dblclick", function() {
    document.getElementById("box").style.backgroundColor = "yellow"
})

window.addEventListener("wheel", function() {
    document.getElementById("box").style.backgroundColor = "orange"
})


