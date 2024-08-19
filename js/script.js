{
	const welcome = () => {
		console.log(" Witam wszystkich, którzy tu zaglądają 👍 !!!")
	};
	const onresultElementClick = () => {
		resultElement.innerHTML = `${amount.toFixed(2)}, Pln = ${result.toFixed(2)}, ${currency}`
	};

	welcome();

	
		const formElement = document.querySelector('.js-form')
		const amountElement = document.querySelector('.js-amount')
		const currencyElement = document.querySelector('.js-currency')
		const resultElement = document.querySelector('.js-result')

		formElement.addEventListener("submit", (event) => {
			event.preventDefault()

			const exchangeRateEUR = 4.2903
			const exchangeRateUSD = 3.9672
			const exchangeRateGBP = 5.0525

			const amount = +amountElement.value
			const currency = currencyElement.value

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
		

};