var btn1 = document.getElementsByTagName("li")[0];
var btn2 = document.getElementsByClassName("liClass")[0];
var btn3 = document.getElementById("liId");
var btn4 = document.querySelector(".liQuery");
var btn5 = document.querySelectorAll(".liQuery")[1];

function firstFunction(){
    btn1.classList.toggle("li1");
}

function secondFunction(){
    btn2.classList.toggle("li2");
}

function thirdFunction(){
    btn3.classList.toggle("li3");
}

function fourthFunction(){
    btn4.classList.toggle("li4");
}

function fifthFunction(){
    btn5.classList.toggle("li5");
}