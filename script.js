const gridContainer = document.querySelector(".grid-container")

gridContainer.style.height = "800px"
gridContainer.style.width = "800px"
gridContainer.style.border = "solid black"

console.log(isPerfectSquare(64))

function populateGrid(numberOfSquares) {
    numberOfSquares = 64

    if (!isPerfectSquare) {
        alert("Must enter a perfect square (e.g. 64, 81, 100")
    } else {
        
    }
}

function isPerfectSquare(number) {
    return (Number.isInteger(Math.sqrt(number)))
}