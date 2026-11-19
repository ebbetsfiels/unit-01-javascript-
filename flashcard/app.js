"use strict";
const EXAM_DATE= new Date("2026,11,25")

function checkScreen(){
    if (window.innerwidth < 600){
        document.getElementById("scrrenMsg").textContent="small screen:turn your device sideways for a bigger card."
     } else{
        document.getElementById("screenMsg").textContent="window width:"+ window.innerwidth + "px"
     }
}
function startApp(){
    checkScreen();
}