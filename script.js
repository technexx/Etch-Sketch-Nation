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
        let count = Math.sqrt(numberOfSquares);
        for (let i=0; i<count; i++) {
            createSquares()
            styleSquares(i)
        }
    }
}

//
function createSquares() {
    const content = document.createElement("div")
    content.classList.add("squares")
    //We append the div with the class label.
    gridContainer.appendChild(content)


    console.log(gridContainer)
}

//selectorAll returns nodeList
function styleSquares(position) {
    squareList = document.querySelectorAll(".squares")
    const square = squareList[position]

    let squareSize = 800 / Math.sqrt(numberOfSquares)
    square.style.width = squareSize + "px"
    square.style.height = squareSize + "px"
    square.style.border = "solid black"
}

function isPerfectSquare(number) {
    return (Number.isInteger(Math.sqrt(number)))
}