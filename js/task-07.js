





const fontSizeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");


function onfontSize(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}

fontSizeInput.addEventListener("input", onfontSize);