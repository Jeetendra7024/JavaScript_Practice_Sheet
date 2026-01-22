               // Event.js
// click event
/*let button = document.querySelector("#clickMe");
button.addEventListener("click", function() {
    console.log("Button was clicked!");
});*/

// Mouseover event
/*let hover = document.querySelector("#clickMe");
hover.addEventListener("mouseover", function() {
    console.log("Mouse is over the button!");
});*/

/*let hover = document.querySelectorAll("#hover")[0];
hover.addEventListener("mouseover", function() {
     hover.style.color = "red";
});*/

// Mouseout event
/*let hover = document.getElementById("hover");
hover.addEventListener("mouseover", () => {
     hover.style.color = "blue";
});

hover.addEventListener("mouseout", () => {
     hover.style.color = "black";
});*/

// Mouseup and mouseup event
/*let hover = document.getElementById("hover");
hover.addEventListener("mousedown", () => {
     hover.style.color = "green";
});

hover.addEventListener("mouseup", () => {
     hover.style.color = "black";
});*/


// Double click event
/*let hover = document.getElementById("hover");
hover.addEventListener("dblclick", () => {
     hover.style.color = "orange";
});*/

// Keydown and keyup event
/*let input = document.getElementById("input");
input.addEventListener("keydown", () => {
     input.style.color = "purple";
});

input.addEventListener("keyup", () => {
     input.style.color = "black";
});*/

// Change event
/*let select = document.getElementById("select");
select.addEventListener("change", () => {
    alert("You selected: " + select.value);
});*/

// Submit event
/*let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert("Form submitted!");
});*/

// Load event
/*window.addEventListener("load", () => {
    alert("Page is fully loaded");
});

// Scroll event
window.addEventListener("scroll", () => {
    alert("Page is being scrolled");
});*/

// OnClick event 
/*let btn = document.getElementById("btn");

btn.onclick = () => {
    alert("Button clicked using onclick event");
};*/

// OnMouseOver  and OnMouseOut event 
/*let btn = document.getElementById("btn");
btn.onmouseover = () => {
    btn.style.backgroundColor = "pink";
};
let btn2 = document.getElementById("btn");
btn2.onmouseout = () => {
    btn2.style.backgroundColor = "white";
    btn.style.fontSize = "20px";
};*/

// OnCklick to increase the counter
/*let counter = 0;
btn.onclick = () => {
    counter++;
    console.log(counter);
    let btn = document.getElementById("btn").innerText = "Clicked " + counter + " times";
};*/

// OnCklick with event listeners
/*let btn = document.getElementById("btn");
let counter = 0;
btn.addEventListener("click", () => {
    counter++;
    console.log(counter);
    btn.innerText = "Clicked " + counter + " times";
});*/

// Event Object
/*let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
     console.log(event);
     console.log(event.target);
});*/






















