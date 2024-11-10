let roundProgress = document.querySelector(".round-progress");
let progressValue = document.querySelector(".progress-value");

let progressStartValue = 0;
let progressEndValue = 90;
let speed = 10;

let progress = setInterval(() => {

    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    roundProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue === progressEndValue) {
        clearInterval(progress);
    }
}, speed);