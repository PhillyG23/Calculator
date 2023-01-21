function addToDisplay(val) {
    document.getElementById("display").value += val;
  }
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  function calculate() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
  }