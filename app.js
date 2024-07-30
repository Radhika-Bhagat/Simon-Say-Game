let gameSeq = [];
let userSeq = [];
let btns = ["red","green","purple","yellow"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

 document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
 });
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
 function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `LEVEL ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
 }
 function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }    
    }else{
        h2.innerHTML = `Game Over!! Your score was ${level} <br> Press any key to restart`;
        document.querySelector(".btn-container").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector(".btn-container").style.backgroundColor = "rgba(255, 255, 255, 0.51)";
        },150);
        reset();
    }
 }
 function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
 }
 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }
 function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
 }
 