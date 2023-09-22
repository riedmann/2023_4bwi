console.log("inside");
let amountOfClicks = 0;

document.getElementById("button").addEventListener("click", ()=>{
   amountOfClicks++;
   document.getElementById("output").innerHTML =  amountOfClicks;
});
