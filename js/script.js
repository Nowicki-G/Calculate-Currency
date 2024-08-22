{
	const welcome = () => {
		console.log(" Witam wszystkich, którzy tu zaglądają 👍 !!!")
	};

	welcome();

	const calculateResualt = (amount, currency) => {
		const exchangeRateEUR = 4.2903;
		const exchangeRateUSD = 3.9672;
		const exchangeRateGBP = 5.0525;

		switch (currency) {
			case '€':

				return amount / exchangeRateEUR;

			case '$':
				return amount / exchangeRateUSD;

			case '£':
				return amount / exchangeRateGBP;
		}
	};

	const updateResultText = (amount, result, currency) => {
		const resultElement = document.querySelector('.js-result');
		resultElement.innerHTML = `${amount.toFixed(2)} Pln = ${result.toFixed(2)} ${currency}`
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const amountElement = document.querySelector('.js-amount');
		const currencyElement = document.querySelector('.js-currency');

		const amount = +amountElement.value;
		const currency = currencyElement.value;

		const result = calculateResualt(amount, currency);

		updateResultText(amount, result, currency);
	};
	const init = () => {
		const formElement = document.querySelector('.js-form');

		formElement.addEventListener("submit", onFormSubmit);
	};

	init();
};

