//your code here
const prices = document.querySelectorAll('[data-ns-test="price"]');
const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');

let total = 0;

prices.forEach(price => {
  total += parseInt(price.textContent);
});

grandTotal.textContent = total.toFixed(2);
