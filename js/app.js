function generatePin() {
  const randomPin = Math.round(Math.random() * 10000);
  return randomPin;
}

function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

document
  .getElementById("btn-generate-pin")
  .addEventListener("click", function () {
    const generatePinInputField = document.getElementById("generate-pin-input");
    generatePinInputField.value = getPin();
  });
