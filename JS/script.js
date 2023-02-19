const plnAmountElement = document.querySelector(".js-plnAmount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const formElement = document.querySelector(".js-form");
const plnAmountEnteredElement = document.querySelector(".js-plnAmountEntered");
const currencyEnteredElement = document.querySelector(".js-currencyEntered");

const rateEUR = 4.77;
const rateUSD = 4.45;
const rateGBP = 5.36;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const plnAmout = +plnAmountElement.value;
    const currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = plnAmout / rateEUR;
            break;
            
        case "USD":
            result = plnAmout / rateUSD;
            break;

        case "GBP":
            result = plnAmout / rateGBP;
            break;

    }

    resultElement.innerText = result.toFixed(2);
    plnAmountEnteredElement.innerText = plnAmountElement.value;
    currencyEnteredElement.innerText = currencyElement.value;
});