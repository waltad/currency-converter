let plnValueElement = document.querySelector(".js-plnValue");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let plnValueEnteredElement = document.querySelector(".js-plnValueEntered")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let plnValue = plnValueElement.value;
    let exchangeRate = exchangeRateElement.value;

    let result = plnValue / exchangeRate;

    resultElement.innerText = result.toFixed(2);
    plnValueEnteredElement.innerText = plnValue;
});