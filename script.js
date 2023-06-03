const gridContainer = document.querySelector("#container")
const gridButton = document.querySelector("#grid-button")

populateGrid(64)

gridButton.addEventListener("click", () => {
    let promptText = prompt("Enter one of the following: 25, 36, 49, 64, 81, or 100")

    if (promptText === "25" || promptText === "36" || promptText === "49" || promptText === "64" || promptText === "81" || promptText === "100") {
        clearGrid()
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

function clearGrid() {
    const squaresNode = document.querySelectorAll(".squares")
    squaresNode.forEach (square => {
        square.remove();
    });
}

function setSquareEventListener(element) {
    element.addEventListener("mouseover", () => {
        if (!element.hasAttribute("color")) {
            element.setAttribute("color", getRandomColor())
        }

        if (!element.hasAttribute("fadePct")) {
            element.setAttribute("fadePct", 0)
        } else {
            element.setAttribute("fadePct", (parseInt(element.getAttribute("fadePct")) + 10))
            element.style.backgroundColor = darkenColor(element.getAttribute("color"), parseInt(element.getAttribute("fadePct")))
        }

    })
}

function isPerfectSquare(number) {
    return (Number.isInteger(Math.sqrt(number)))
}

function getRandomColor() {
    //This is hex equiv. to 16777215
    let maxVal = 0XFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    //toString() argument defines base of numeral system. "16" is a hexidecimal string.
    randomNumber = randomNumber.toString(16);
    //padStart will enter "0" for every character length short of 6.
    let randomColor = randomNumber.padStart(6,0);
    randomColor = "#" + randomColor.toUpperCase();
    
    return randomColor;
}

//255, 255, 255 = white; 0, 0, 0 = black
function darkenColor(color, percent) {
    let hexOne = parseInt(color.substring(1,3), 16);
    let hexTwo = parseInt(color.substring(4,6), 16);
    let hexThree = parseInt(color.substring(5,7), 16);

    hexOne = convertHex(hexOne, percent)
    hexTwo = convertHex(hexTwo, percent)
    hexThree = convertHex(hexThree, percent)

    let newString = "#" + hexOne + hexTwo + hexThree

    return newString
}

function convertHex(hexInt, percent) {
    if (percent > 100) percent = 100
    hexInt = parseInt(hexInt * (100 - percent) / 100);

    hexInt = Math.round(hexInt);
    hexInt = hexInt.toString(16)
    hexInt = hexInt.padStart(2, 0)

    return hexInt;
}