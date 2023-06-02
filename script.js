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

    
    let height = gridContainer.clientHeight / Math.sqrt(numberOfSquares)
    let width = gridContainer.clientWidth / Math.sqrt(numberOfSquares)

    console.log(height)

    squaresNode[position].style.height = height + "px"
    squaresNode[position].style.width = width + "px"
}


function isPerfectSquare(number) {
    return (Number.isInteger(Math.sqrt(number)))
}