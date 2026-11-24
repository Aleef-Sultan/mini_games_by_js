let headingg=document.querySelector("h2");
headingg.innerText=headingg.innerText+" Aleef";
console.log(document.body.innerHTML);
console.log("SCRIPT IS RUNNING");
let divi=document.querySelectorAll(".x");
console.log(typeof headingg.tagName);
let idx=1;
for (let div of divi){
    div.innerText=idx;
    idx++;
}
let elem=document.createElement("button");
elem.setAttribute("style","background-color:white;color:red;");
elem.innerText="Click here"
document.querySelector("body").append(elem);
let p=document.querySelector("p");
p.className="pera";
p.classList.add("newClass");
let body=document.querySelectorAll("body");
console.log(body);
