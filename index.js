var w = window.innerWidth
var h = window.innerHeight
var timer
timer = setInterval(function() {
    if (w < 1000) {
        document.getElementById("bang_div").style.top = "7vh"
        document.getElementById("bang_div").style.left = "5vw"
        document.getElementById("x_bang").style.left = "28vw"
        document.body.style.width = '60vw';
        document.getElementById("all_bang").style.left = "0vw"
        document.getElementById("all_bang").style.width = "0rem"
    }
}, 100)
