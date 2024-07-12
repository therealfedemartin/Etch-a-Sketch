
const container = document.querySelector("#container");
const askButton = document.querySelector("#askButton");


function createGrid (info) {

    if (info >= 1 && info <= 100) {
        let amount = Number(info);
        for(let i = 0; i < amount; i++) {
            const lines = document.createElement("div");
            lines.classList.add("lines");
            container.appendChild(lines);
            for (let j = 0; j < amount;j++){
                const squares = document.createElement("div");
                squares.classList.add("squares");
                squares.style.opacity = 1;
                lines.appendChild(squares);

                squares.addEventListener('mouseover', function() {
                
                    squares.style.backgroundColor = "#efb810";
                });

                squares.addEventListener('click', function () {

                    let opacity = parseFloat(squares.style.opacity);
                    if (opacity > 0 ) {

                    squares.style.opacity = (opacity - 0.1).toFixed(1);
                    
                    }
                
                });


                
            }
        }      
    } else {
        alert("Invalid number");
    }    
}

function removeGrid () {
    
   const lines = container.querySelectorAll(".lines")
   lines.forEach(item => {
        container.removeChild(item);
   });
}

askButton.addEventListener('click', function() {
    
    removeGrid();  

    let info = prompt("How many squares per side ? (max 100) ");
    createGrid(info);
});




