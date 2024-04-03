document.addEventListener('DOMContentLoaded', function () {
  const textField = document.querySelector("input-field#firstName");
  const button = document.querySelector("button");
  
  
  if (textField) {
    const inputElement = textField.shadowRoot.querySelector('div.input-field-wrapper input');
    inputElement.addEventListener('input', (event)=> {
      textField.value = event.target.value;
      // console.log("EVENT: ", event.target.value);
    });
  }

  button.addEventListener("click", function () {
    console.log("Submitting... ", textField.value);
  });
});