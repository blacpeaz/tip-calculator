const BtnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalResult = document.getElementById("total");
function calculateTotal() {
  const billvalue = billInput.value;
  const tipValue = tipInput.value;

  const totalValue = billvalue * (1 + tipValue / 100);
  totalResult.innerHTML = totalValue.toFixed(2);
}

BtnEl.addEventListener("click", calculateTotal);
