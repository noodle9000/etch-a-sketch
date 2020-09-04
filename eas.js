
let userNumber = 10;
let originalGridSize = 500; // from CSS

function findElementAfterLoad(event) {
    newGrid();
}
document.addEventListener('DOMContentLoaded', findElementAfterLoad);


function promptReset() {
    const maxSize = 100;
    let rawInput = prompt("Amount of squares per side (up to " + maxSize + "):", "10");
    if (rawInput != null) {
        let input = Math.round(rawInput);
        if (input < (maxSize + 1) && input > 0) {
            userNumber = input;
            newGrid();
        }
        else if (input == 0) {
            alert("Why?");
        }
        else {
            alert("No! Try again.");
        }
    }
}

function newGrid() {
    let container = document.getElementById('grid-container');
    container.innerHTML = ""; // empties before creating new squares

    let numberOfBlocksWithFraction = 500 / userNumber;
    let numberOfBlocks = Math.floor(numberOfBlocksWithFraction);
    let newGridSize = numberOfBlocks * userNumber;
    container.style.height = newGridSize + "px";
    container.style.width = newGridSize + "px";

    let squareSize = calcSquareSize();
    console.log(squareSize);

    for (let squares = 0; squares < userNumber*userNumber; squares++) {
        let newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.style.background = "lightgray";
        newDiv.style.width = squareSize + 'px';
        newDiv.style.height = squareSize + 'px';
        newDiv.style.maxHeight = Math.floor(squareSize) + "px";
        newDiv.style.maxWidth = Math.floor(squareSize) + "px";
        newDiv.addEventListener("mouseenter", function(event) {
            event.target.style.background = "black";
        })

        newDiv.addEventListener("click", function(event) {
            event.target.style.background = "lightgray";
        })
    }
    document.getElementById('grid-size').innerHTML = "Grid Size: " + userNumber + "x" + userNumber;
}

function calcSquareSize() {
    return originalGridSize / userNumber;
}