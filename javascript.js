const boxes=document.querySelectorAll(".box");
const resetbtn=document.getElementById("reset");
const playerturn=document.getElementById("player-turn");
let turnO=true;
let winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
function checkwinner(){
    for(let pattern of winpatterns){
let pos1=boxes [pattern[0]].innerText;
let pos2=boxes [pattern[1]].innerText;
let pos3=boxes [pattern[2]].innerText;

   if(pos1 !==""&& pos1==pos2 && pos2==pos3){
    boxes[pattern[0]].classList.add("winner");
boxes[pattern[1]].classList.add("winner");
boxes[pattern[2]].classList.add("winner");
playerturn.textContent= `${pos1} is the winner!`;
 boxes.forEach((box)=>{
    box.disabled=true;

 })
 return;
    }}


    let isdraw=Array.from(boxes).every((box)=>{
return box.innerText !== "";
})
if(isdraw){
    playerturn.textContent="Its a draw";
}

}
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
if(turnO){
    box.textContent="O";
    box.classList.add("clicked");
}else{
    box.textContent="X";
    box.classList.add("clicked2");
}
turnO = !turnO;
box.disabled=true;
checkwinner();

})
})



resetbtn.addEventListener("click",()=>{
boxes.forEach((box) => {
    box.textContent="";
    box.disabled=false;
   
    box.classList.remove("clicked");
    box.classList.remove("clicked2");
    box.classList.remove("winner");
});

playerturn.textContent = "Player O's Turn";
});
