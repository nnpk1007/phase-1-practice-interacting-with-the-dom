const counterElement = document.getElementById("counter");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const heartBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause")
let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
    // See the timer increment every second once the page has loaded.
    counterIncrementBySecond();
    // Manually increment and decrement the counter using the plus and minus buttons.
    minusAndPlusCounter();
    // "Like" an individual number of the counter. 
    // I should see the count of the number of "likes" associated with that number displayed.


})

function counterIncrementBySecond() {
    
    setInterval(() => {
        counter++;
        counterElement.textContent = counter;
    }, 1000);
}

function minusAndPlusCounter() {
    minusBtn.addEventListener("click", () => {
        counter = counter - 1;
        counterElement.textContent = counter;
    });

    plusBtn.addEventListener("click", () => {
        counter = counter + 1;
        counterElement.textContent = counter;
    } )
}
