$(document).ready(function () {
	$(".shuffle_btn").click(function () {
		let cardNumbersShuffleArray = [];
		$('.card').each(function () {
			cardNumbersShuffleArray.push(this.innerHTML);
		});
		let cardsLength = cardNumbersShuffleArray.length - 1;
		let cardNumbersSwap;
		let shuffleTempValue;

		for (let i = cardsLength; i > 0; i--) {
			cardNumbersSwap = Math.floor(Math.random() * (i + 1));
			shuffleTempValue = cardNumbersShuffleArray[i];
			cardNumbersShuffleArray[i] = cardNumbersShuffleArray[cardNumbersSwap];
			cardNumbersShuffleArray[cardNumbersSwap] = shuffleTempValue;
		}

		i = 0;

		$('.card').each(function () {
			this.innerHTML = cardNumbersShuffleArray[i];
			i++;
		});
	});

	$(".sort_btn").click(function () {
		let cardNumbersSortingArray = [];

		$('.cardNumber').each(function () {
			cardNumbersSortingArray.push(+this.innerHTML);
		});

		cardNumbersSortingArray.sort();

		i = 0;

		$('.cardNumber').each(function () {
			this.innerHTML = cardNumbersSortingArray[i];
			i++;
		});
	});
});