const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", onTextBlur);

const refs = {
    length: 6,
};

function onTextBlur(event) {
    if (refs.length === event.currentTarget.value.length) {
        textInput.classList = "valid";
    } else {
        textInput.classList = "invalid";
    }
}