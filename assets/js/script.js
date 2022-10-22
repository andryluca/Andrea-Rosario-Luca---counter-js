// total -> 0
let total = document.getElementsByClassName("display");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");

let counter = 0;

// 
incrementBtn.addEventListener("click", function (e) {
    counter = counter + 1;
    total[0].innerHTML = counter;
}); 

decrementBtn.addEventListener("click", function (e) {
    counter = counter - 1;

    if (counter >= 0) {
        total[0].innerHTML = counter;
    } else {
        counter = 0
    }
});