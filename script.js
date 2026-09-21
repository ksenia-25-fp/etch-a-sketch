const container = document.querySelector("#container");

const square = document.createElement("div");
container.appendChild(square);

for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    container.appendChild(square);
    square.addEventListener ("mouseenter", () => {
    square.style.backgroundColor = "pink";
})
}