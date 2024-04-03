document.addEventListener('DOMContentLoaded', function () {
  const textField = document.querySelector("input-field#firstName");
  
  if (textField) {
    const inputElement = textField.shadowRoot.querySelector('div.input-field-wrapper input');
    inputElement.addEventListener('input', (event)=> {
      console.log("EVENT: ", event.target.value);
    });
  }
});