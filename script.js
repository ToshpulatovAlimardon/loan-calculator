function calculateLoan() {
  const loanAmountValue = document.querySelector("#loan-amount").value;

  const interestRateValue = document.querySelector("#interest-rate").value;

  const monthsToPayValue = document.querySelector("#months-to-pay").value;

  const interest =
    (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

  const monthlyPayment = (
    loanAmountValue / monthsToPayValue +
    interest
  ).toFixed(2);

  document.querySelector(
    "#payment"
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
