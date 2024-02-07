
let boxes=document.querySelectorAll(".box");
let Resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newgamebtn");
let Msgcontainer=document.querySelector(".message-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPtterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    Msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if (turnO) {
            box.innerText="0"
            box.classList.add("clr");
            turnO=false;
        }
        else{
            box.innerText="X";
            box.classList.remove("clr");
            turnO=true;
        }
        box.disabled=true;

        checkwinner()
        
    });
});


const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""
    }
}
const showwinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    Msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner = () =>{
    let isDraw=true;
    for ( let pattern of winPtterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;


        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner",pos1val);
                showwinner(pos1val);
                return;
            }
        }
        else{
            isDraw = false;
        }
    }
    if (isDraw) {
        msg.innerText = "It's a draw!";
        Msgcontainer.classList.remove("hide");
        disableboxes();
    }
}
newgamebtn.addEventListener("click", resetGame);
Resetbtn.addEventListener("click", resetGame);
