const boxes=document.querySelectorAll(".box");
const reset=document.getElementById("reset");
const winnero=document.getElementById('winnero');
const winnerx=document.getElementById('winnerx');
const tie=document.getElementById("tie");
const conatiner=document.getElementById("container")

let check=true;

let winnerrules=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
let tie_check=0;
Array.from(boxes).forEach((box)=>{
    box.addEventListener("click",(x)=>{
        if (check=="true"){
            box.innerHTML="X";
            check=false;
            ++tie_check
        }
        else{
            box.innerHTML="O";
            check="true";
            ++tie_check
        }
        box.disabled=true;
        winnercheck()
    })
})
const disable=()=>{
    for(let disable_box of boxes){
        disable_box.disabled="true";
    }
}

let check_tie_situtation=true;
const winnercheck=()=>{
    for(let rule of winnerrules){
        let pos1=boxes[rule[0]].innerText;
        let pos2=boxes[rule[1]].innerText;
        let pos3=boxes[rule[2]].innerText;
        if(pos1=="O"&&pos2=="O"&&pos3=="O"){
            winnero.style.display="inline";
            conatiner.style.display="none";
            reset.value="New Game";
            check_tie_situtation=false;
        }
        else if(pos1=="X"&&pos2=="X"&&pos3=="X"){
            winnerx.style.display="inline";
            conatiner.style.display="none";
            reset.value="New Game";
            check_tie_situtation=false
            }
        }
        if (tie_check==9){
            if (check_tie_situtation==true){
                tie.style.display="inline";
                conatiner.style.display="none";
                reset.value="New Game";
            }
        }
        
    }

reset.addEventListener("click",()=>{
    location.reload()
})

