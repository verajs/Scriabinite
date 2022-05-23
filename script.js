document.addEventListener('DOMContentLoaded', function() {

let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#img1');
btn1.addEventListener("mouseover", () => {
img1.src = "images/steps/stair1hover.png"
})

btn1.addEventListener("mouseout", () => {
img1.src = "images/steps/stair1.png"
})


let btn2 = document.querySelector('#btn2');
let img2 = document.querySelector('#img2');
btn2.addEventListener("mouseover", () => {
img2.src = "images/steps/stair2hover.png"
})

btn2.addEventListener("mouseout", () => {
img2.src = "images/steps/stair2.png"
})

let btn3 = document.querySelector('#btn3');
let img3 = document.querySelector('#img3');
btn3.addEventListener("mouseover", () => {
img3.src = "images/steps/stair3hover.png"
})

btn3.addEventListener("mouseout", () => {
img3.src = "images/steps/stair3.png"
})




let btn4 = document.querySelector('#btn4');
let img4 = document.querySelector('#img4');
btn4.addEventListener("mouseover", () => {
img4.src = "images/steps/stair4hover.png"
})

btn4.addEventListener("mouseout", () => {
img4.src = "images/steps/stair4.png"
})

});



