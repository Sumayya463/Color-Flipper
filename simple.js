const colors=["pink", "blue", "green" ,"red" , "orange", "purple","violet","yellow","turquoise","aqua"];
 
const button = document.getElementById("btn");
const color = document.querySelector(".color");
button.addEventListener("click", function() {
    const randomValue = getRandomValue();
    document.body.style.backgroundColor = colors[randomValue];
    color.textContent = colors[randomValue];
})

function getRandomValue(){
    return Math.floor(Math.random() * colors.length);
   }