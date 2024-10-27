const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

const numerator = document.getElementById("dividend").value;
const denominator = document.getElementById("divider").value;
  
if (numerator === "" || denominator === "") {
result.textContent = "Division not performed. Both values are required in inputs. Try again";
return;
}

const num1 = parseFloat(numerator);
const num2 = parseFloat(denominator);

if (num2 === 0) {
result.innerText = "Division not performed. Invalid number provided. Try again";
console.error(new Error("Division by 0 is invalid!"));
return;
}


if (isNaN(num1)|| isNaN(num2)){
  document.body.innerHTML = "Something critical went wrong. Please reload the page";
  console.error(new Error("All inputs must be numbers"));
}

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(dividend / divider);

});