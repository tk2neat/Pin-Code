let enteredPin = '';

function handleButtonClick(value) {
  enteredPin += value;
  updateDisplay();
}

function clearPin() {
  enteredPin = '';
  updateDisplay();
}

function submitPin() {
  const correctPin = '5581';
  if (enteredPin === correctPin) {
    alert('Correct code gangy');
  } else {
    alert('Try again man');
    clearPin();
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = `Entered PIN: ${enteredPin}`;
}
