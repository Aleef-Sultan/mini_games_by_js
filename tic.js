const pass=[[1,2,3],[1,4,7],[1,5,9],[3,5,7],[2,5,8],[4,5,6],[3,6,9]];
let turnO=true;
let active=[false,false,false,false,false,false,false,false,false];
let boxers=document.querySelectorAll(".box");
console.log(boxers);
let boxes=Array.from(boxers);
let winneFound=false;
function checkWinner(boxes){
    let bul=true;
    for (let elem of pass){
        bul=true;
        for (let indx of elem){
            if(turnO===true && boxes[indx-1].innerText!=="O"){
                 bul=false;
            }else if(turnO===false && boxes[indx-1].innerText!=="X"){
                  bul=false;
            }else if(active[indx-1]===false){
                 bul=false;
            }
        }
        if(bul===true){
            return bul;
        }
    }
     return bul;
}
boxes.forEach((box) => {
     box.addEventListener("click",()=>{
     if (winneFound===false){
            if (active[boxes.indexOf(box)]===false){
                if(turnO===true){
                    box.innerText="O";
                    active[boxes.indexOf(box)]=true;
                    winneFound=checkWinner(boxes)
                    turnO=false;
                }else{
                    box.innerText="X";
                    active[boxes.indexOf(box)]=true;
                    winneFound=checkWinner(boxes);
                    turnO=true;
                }
        if(winneFound===true){
             if(turnO===true){
                console.log("X won");
            }else{
                console.log("O Won");
            }
    }}
            }
    });
});



