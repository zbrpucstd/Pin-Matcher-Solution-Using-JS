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

document
  .getElementById("input-number")
  .addEventListener("click", function (event) {
    const inputNumber = event.target.innerText;

    const inputField = document.getElementById("input-field");
    previousTypedNumber = inputField.value;

    if (isNaN(inputNumber)) {
      if (inputNumber === "C") {
        inputField.value = "";
      } else if (inputNumber === "<") {
        const numberSlice = previousTypedNumber.split("");
        numberSlice.pop();
        const remainingNo = numberSlice.join("");
        inputField.value = remainingNo;
      }
    } else {
      const updatedValue = previousTypedNumber + inputNumber;
      inputField.value = updatedValue;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const generatePinInputField = document.getElementById("generate-pin-input");
  const generatePinValue = generatePinInputField.value;

  const inputField = document.getElementById("input-field");
  const inputFieldValue = inputField.value;

  const pinSuccess = document.getElementById("pin-success");
  const pinFailure = document.getElementById("pin-failure");

  let count = 0;

  const countDownField = document.getElementById("count-down");
  const countDownString = countDownField.innerText;
  const countDownValue = parseInt(countDownString);

  if (generatePinValue === inputFieldValue) {
    pinSuccess.style.display = "block";
    pinFailure.style.display = "none";
  } else {
    pinFailure.style.display = "block";
    pinSuccess.style.display = "none";

    count += 1;
  }

  const countUpdatedValue = countDownValue - count;

  if (countUpdatedValue >= 0) {
    countDownField.innerText = countUpdatedValue;
  } else {
    alert("You entered wrong pin 3 times!!");
    countDownField.innerText = 3;
  }
});
