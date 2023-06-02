const gridContainer = document.querySelector("#container")
const gridButton = document.querySelector("#grid-button")

populateGrid(64)

gridButton.addEventListener("click", () => {
    let promptText = prompt("Enter one of the following: 25, 36, 49, 64, 81, or 100")

    if (promptText === "25" || promptText === "36" || promptText === "49" || promptText === "64" || promptText === "81" || promptText === 100) {
        populateGrid(promptText)
    } else {
        promptText = prompt("NO!")
    }
})

function populateGrid(squareCount) {
    numberOfSquares = squareCount

    if (!isPerfectSquare) {
        alert("Must enter a perfect square (e.g. 64, 81, 100)")
    } else {
        for (let i=0; i<numberOfSquares; i++) {
            createSquares(i)
        }
    }
}

function createSquares(position) {
    const content = document.createElement("div")
    content.classList.add("squares")
    //We append the div with the class label.
    gridContainer.appendChild(content)
    
    let height = gridContainer.clientHeight / Math.sqrt(numberOfSquares)
    let width = gridContainer.clientWidth / Math.sqrt(numberOfSquares)

    const squaresNode = document.querySelectorAll(".squares")
    squaresNode[position].style.height = height + "px"
    squaresNode[position].style.width = width + "px"

    setSquareEventListener(squaresNode[position], position)
}

function setSquareEventListener(element, position) {
    element.addEventListener("mouseover", () => {
        console.log("over position " + position)
        element.style.backgroundColor = "blue"
    })
}

function isPerfectSquare(number) {
    return (Number.isInteger(Math.sqrt(number)))
}