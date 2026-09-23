const container = document.querySelector("#container");

function createGrid(size) {

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        
        square.style.width = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;

        square.addEventListener ("mouseenter", () => {
        square.style.backgroundColor = "pink";
    })
    }
}

const button = document.querySelector("#button");
button.addEventListener ("click", () => {
    let gridSize = prompt("Enter grid size:");
    if (gridSize > 100) {
        alert ("Enter a smaller number")
    } else {
    container.innerHTML = "";
    createGrid(gridSize);
}})

createGrid(16);