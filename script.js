const gridContainer = document.querySelector("#container")
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
        for (let i=0; i<numberOfSquares; i++) {
            createSquares(i)
        }
        console.log(gridContainer)

    }
}

//
function createSquares(position) {
    const content = document.createElement("div")
    content.classList.add("squares")
    //We append the div with the class label.
    gridContainer.appendChild(content)

    const squares = document.querySelector(".squares")

    const squaresNode = document.querySelectorAll(".squares")
    let size = 800 / Math.sqrt(numberOfSquares)
    squaresNode[position].style.height = size + "px"
    squaresNode[position].style.width = size + "px"
}


function isPerfectSquare(number) {
    return (Number.isInteger(Math.sqrt(number)))
}