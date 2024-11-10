const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".side-bar");
const spans = document.querySelectorAll("span")
const buttonSwitch = document.querySelector(".switch");
const circle = document.querySelector(".circle");
const menu = document.querySelector(".menu");
const main = document.querySelector("main")

menu.addEventListener("click", ()=>{
    barraLateral.classList.toggle("max-side-bar")
    if(barraLateral.classList.contains("max-side-bar")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    } else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }

    if(window.innerWidth <= 320){
        barraLateral.classList.add("min-side-bar");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("hidden");
        })
    }
})

buttonSwitch.addEventListener("click", ()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circle.classList.toggle("on");
})

cloud.addEventListener("click", ()=>{
    barraLateral.classList.toggle("min-side-bar");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("hidden");
    });
});