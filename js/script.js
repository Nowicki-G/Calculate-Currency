let formElement = document.querySelector('.js-form')
let amountElement = document.querySelector('.js-amount')
let currencyElement = document.querySelector('.js-currency')
let resultElement = document.querySelector('.js-result')

formElement.addEventListener("submit", (event) => {
	event.preventDefault()

	let exchangeRateEUR = 4.2903
	let exchangeRateUSD = 3.9672
	let exchangeRateGBP = 5.0525

	let amount = +amountElement.value
	let currency = currencyElement.value

	switch (currency) {
		case '€':
			result = amount / exchangeRateEUR
			break

		case '$':
			result = amount / exchangeRateUSD
			break
		case '£':
			result = amount / exchangeRateGBP
			break
	}

	resultElement.innerHTML = `${amount.toFixed(2)}, Pln = ${result.toFixed(2)}, ${currency}`
});
