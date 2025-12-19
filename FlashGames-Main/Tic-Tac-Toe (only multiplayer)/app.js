let boxes = document.querySelectorAll(".box");
let restart = document.querySelector("#restart");
let newGame = document.querySelector("#newGame");
let msgbox = document.querySelector(".msg");
let msg = document.querySelector("#msg");
let turn = true; //true == X false == O ;

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const resetGame = () => {
    turn = true;
    enableBox();
    msgbox.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        // box.innerText = "abcd";
        box.innerText = turn?"X":"O";
        turn = !turn;
        box.disabled = true;
        checkwinner();
    })
});

const disableBox = () =>{
    boxes.forEach((box)=>{
        box.disabled = true;
    });
};

const enableBox = () =>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText= "";
    });
};

const showWinner = (winner) =>{
    msg.innerText =`Player ${winner} is winner`;
    msgbox.classList.remove("hide");
    disableBox();
}

const checkwinner = () => {
    for( let pattern of win){
        console.log(pattern[0],pattern[1],pattern[2]);
        if(boxes[pattern[0]].innerText !="" && boxes[pattern[1]].innerText !="" && boxes[pattern[2]].innerText !=""){
            if((boxes[pattern[0]].innerText===boxes[pattern[1]].innerText)&&(boxes[pattern[0]].innerText===boxes[pattern[2]].innerText)){
                showWinner(boxes[pattern[0]].innerText);
                alert(`Ambuj Wins`);
            }
            
        }
    }
}

restart.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
