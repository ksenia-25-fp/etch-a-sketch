const container = document.querySelector("#container");

let currentMode = "pink";

function createGrid(size) {

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        
        square.style.width = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;

        square.addEventListener ("mouseenter", () => {
        if (currentMode === "pink") {
            square.style.backgroundColor ="pink"; 
            square.style.opacity = "";
        } else if (currentMode === "shader") {
             if (square.style.opacity === "") {
                square.style.backgroundColor ="black";
                square.style.opacity = 0.1;
            } else {
                square.style.opacity = Number(square.style.opacity) + 0.1;
            }
        } else {
            square.style.backgroundColor = getRandomRGB();
            square.style.opacity = "";
        }
        })
    }
}

function getRandomRGB() {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let rgb = `rgb(${r}, ${g}, ${b})`;
return rgb;
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

const pinkButton = document.querySelector("#button-color-pink");
pinkButton.addEventListener ("click", () => {
    currentMode = "pink"
});

const rgbButton = document.querySelector("#button-color-rgb");
rgbButton.addEventListener ("click", () => {
    currentMode = "rgb"
});

const shaderButton = document.querySelector("#button-shader");
shaderButton.addEventListener ("click", () => {
    currentMode = "shader"
});

createGrid(16);