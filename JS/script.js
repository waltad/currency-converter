{
    const calculateResult = (plnAmount, currency) => {
        const rateEUR = 4.7689;
        const rateUSD = 4.4494;
        const rateGBP = 5.3588;
    
        switch (currency) {
            case "EUR":
                return plnAmount / rateEUR;
                
            case "USD":
                return plnAmount / rateUSD;
    
            case "GBP":
                return plnAmount / rateGBP;
        }
    }
    
    const updateResultText = (result, plnAmount, currency) => {
        const resultElement = document.querySelector(".js-result");
        const plnAmountEnteredElement = document.querySelector(".js-plnAmountEntered");
        const currencyEnteredElement = document.querySelector(".js-currencyEntered");
        
        resultElement.innerText = result.toFixed(2);
        plnAmountEnteredElement.innerText = plnAmount;
        currencyEnteredElement.innerText = currency;
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const plnAmountElement = document.querySelector(".js-plnAmount");
        const currencyElement = document.querySelector(".js-currency");
    
        const currency = currencyElement.value;
        const plnAmount = plnAmountElement.value;
    
        const result = calculateResult(+plnAmount, currency);
    
        updateResultText(result, plnAmount, currency);
    }
    
    const init = () => {
        const formElement = document.querySelector(".js-form");
    
        formElement.addEventListener("submit", onFormSubmit);
    }
    
    init();
}