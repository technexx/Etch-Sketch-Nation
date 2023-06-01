const gridContainer = document.querySelector("#container")
gridContainer.style.height = "800px"
gridContainer.style.width = "800px"
gridContainer.style.border = "solid black"

const gridButton = document.querySelector("#grid-button")

let numberOfSquares = 64

gridButton.addEventListener('click', ()=> {
    populateGrid(64)
})

function populateGrid(squareCount) {
    numberOfSquares = squareCount

    if (!isPerfectSquare) {
        alert("Must enter a perfect square (e.g. 64, 81, 100)")
    } else {
        for (let i=0; i<Math.sqrt(numberOfSquares); i++) {
            gridContainer.classlist.add('square')
            console.log(gridContainer.className)
        }
    }
}

function isPerfectSquare(number) {
    return (Number.isInteger(Math.sqrt(number)))
}

//Relies on function to be created
const square = gridContainer.querySelector(".square")
let squareSize = Math.sqrt(numberOfSquares)
square.style.width = "squareSizepx"
square.style.height = "squareSizepx"
square.style.border = "solid black"

gridContainer.appendChild(square)
