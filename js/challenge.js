const counterElement = document.getElementById("counter");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const heartBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
let counter = 0;
let intervalID;
let isTimerPaused = false;

document.addEventListener("DOMContentLoaded", () => {
  // See the timer increment every second once the page has loaded.
  counterIncrementBySecond();
  // Manually increment and decrement the counter using the plus and minus buttons.
  minusAndPlusCounter();
  // "Like" an individual number of the counter.
  // I should see the count of the number of "likes" associated with that number displayed.
  likeTheNumberCounter();

  pauseAndResume();

  leaveComment();
});

function counterIncrementBySecond() {
  intervalID = setInterval(() => {
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
  });
}
// "Like" an individual number of the counter.
// I should see the count of the number of "likes" associated with that number displayed.
function likeTheNumberCounter() {
  let likeCounter = {};

  heartBtn.addEventListener("click", (e) => {
    if (!likeCounter[counter]) {
      likeCounter[counter] = 1;
    } else {
      likeCounter[counter]++;
    }
    const likesList = document.querySelector(".likes");
    const existingLike = likesList.querySelector(
      `li[data-count = "${counter}"]`
    );

    if (existingLike) {
      existingLike.textContent = `${counter} has been liked ${likeCounter[counter]} time`;
    } else {
      const newLike = document.createElement("li");
      newLike.textContent = `${counter} has been liked 1 time`;
      newLike.dataset.count = counter;
      likesList.appendChild(newLike);
    }
  });
}

/* Pause the counter, which should:
pause the counter
disable all buttons except the pause button
switch the label on the button from "pause" to "resume" */
function pauseAndResume() {
  pauseBtn.addEventListener("click", () => {
    if (isTimerPaused) {
      // Resume timer
      counterIncrementBySecond();
      minusBtn.disabled = false;
      plusBtn.disabled = false;
      heartBtn.disabled = false;
      pauseBtn.textContent = "Pause";
      isTimerPaused = false;
    } else {
      // Pause timer
      clearInterval(intervalID);
      minusBtn.disabled = true;
      plusBtn.disabled = true;
      heartBtn.disabled = true;
      pauseBtn.textContent = "Resume";
      isTimerPaused = true;
    }
  });
}

function leaveComment() {
  const commentList = document.querySelector(".comments");
  const form = document.getElementById("comment-form");
  const formBtn = document.getElementById("submit");

  formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputComment = document.getElementById("comment-input").value;
    console.log(inputComment);
    const li = document.createElement("li");
    li.textContent = inputComment;
    commentList.append(li);
  });
}
