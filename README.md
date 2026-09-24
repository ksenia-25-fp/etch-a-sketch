# Etch-a-Sketch

A browser version of the classic sketchpad toy, built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## Project Description

This project demonstrates DOM manipulation skills using Vanilla JavaScript. The drawing grid is generated dynamically, with its dimensions calculated on the fly using JS math and passed directly to CSS.

## Features

* **Dynamic Grid:** Users can set a custom canvas size (up to 100x100). Includes input validation to prevent browser crashes from excessively large grid sizes.
* **Three Drawing Modes:**
  * **Pink (Default):** Standard solid color drawing.
  * **Rainbow (RGB):** Each hover generates a new, randomized RGB color.
  * **Shader (Progressive Darkening):** Each pass of the mouse increases the square's opacity by 10%, resulting in a fully black square after 10 interactions.
* **Clear and Rebuild:** When a new grid size is entered, the old board is completely wiped from the DOM tree, and a new grid is rendered in its place.

## Technologies

* HTML5
* CSS3 (Flexbox)
* JavaScript (ES6+)

## What I Learned

* Creating and removing HTML elements dynamically (`document.createElement`, `appendChild`, clearing nodes via `innerHTML`).
* Working with event listeners (`addEventListener` for `click` and `mouseenter`).
* Manipulating inline element styles directly through JavaScript.
* Using Template Literals to dynamically apply CSS properties (like `width` and `height` with `calc()`).
* Managing global application states (mode toggling).
* Extracting CSS properties (such as `opacity`), parsing them from strings to numbers using `Number()`, and performing mathematical operations on them.

## How to Run

1. Clone this repository to your local machine.
2. Open the `index.html` file in any modern web browser.