let boxes = document.querySelectorAll(".box");
let reset_Btn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg_container = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX , playerO

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () =>{
  turnO = true;
  enableBoxes();
  msg_container.classList.add("hide");
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turnO) {
      box.innerText = " O ";
      turnO = false;
    } else {
      box.innerText = " X ";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const enableBoxes = () =>{
  for (let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const disableBoxes = () => {
   for(let box of boxes){
    box.disabled = true;
   }
};

const showWinner = (Winner) => {
    msg.innerText = `congratulations , winner is ${Winner}`;
    msg_container.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
  for (pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner", pos1val);
            showWinner(pos1val);
        }
    }

    
  }
};

newGameBtn.addEventListener("click" ,  resetGame);
reset_Btn.addEventListener("click", resetGame);
