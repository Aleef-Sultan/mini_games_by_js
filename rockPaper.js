let options=document.querySelectorAll(".box");
let paraScores=document.querySelectorAll("p");
let myParaScore=parseInt(paraScores[1].innerText);
let botParaScore=parseInt(paraScores[3].innerText);
let selected=-1;
let myScore=0;
let botScore=0;
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
options.forEach((option) => {
    option.addEventListener("click",()=>{
        if(option===options[0]){
           selected=0;
        }else if(option===options[1]){
            selected=1;
        }else{
            selected=2;
        }
        let bot=getRandomInteger(0,2);
        if(selected==0 && bot!=selected){
            if(bot==1){
                botParaScore++;
            }else{
                myParaScore++;
            }
        }else if(selected==1 && bot!=selected){
             if(bot==2){
                botParaScore++;
            }else{
                myParaScore++;
            }
        }else{
             if(bot!=selected){
                 if(bot==0){
                botParaScore++;
            }else{
                myParaScore++;
            }
             }
            
        }
        paraScores[1].innerText=myParaScore;
        paraScores[3].innerText=botParaScore;
        if(bot===0){
            alert("Bot selected rock");
        }else if(bot===1){
            alert("Bot selected paper");
        }else{
             alert("Bot selected scissors");
        }
    });    
});