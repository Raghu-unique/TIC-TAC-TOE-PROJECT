
let boxes = document.querySelectorAll(".box");
let gamebtn = document.querySelectorAll("#GAME");
let resetbtn = document.querySelectorAll(".RESET");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector("#msg-container");



let turnA=true; //playerx, playerA;

const winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame = () => {
    turnA =true;
    enableBoxes ();
    
    msgcontainer.classList.add("hide")

};

boxes.forEach((box ) =>  {
    box.addEventListener("click",() =>{
        if (turnA)  { // playerA
box.innerText = "A";
    turnA=false;

    } else { //playerX
        box.innerText = "X";
        turnA = true;
    }
    box.disabled= true;

    CheckWinner();
    }); 
    
});
const enableBoxes = () => {
for(let box of boxes) {
    box.disabled = false;
}
};


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
}
};

const showWinner = (pos1Val) => {
    msg.innerText ='Congratulations, winner is $(pos1val)';
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const CheckWinner = () => {
     for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if (pos1Val !="" && pos2Val !="" && pos3Val !="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }

        }
     }
};
GAME.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame); 
