//your code here
const prices = document.querySelectorAll('[data-ns-test="prices"]');
const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');

let total = 0;

prices.forEach(price => {
  total += parseFloat(price.textContent);
});

grandTotal.textContent = total.toFixed(2);
