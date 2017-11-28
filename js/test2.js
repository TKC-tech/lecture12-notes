console.log('here')

const myInput = $('.js-my-input');
const myInputKeyPressedLOL = function() {
	const currentValue = myInput.val();

	if (currentValue.length === 0) {
		console.log(currentValue, 'empty')
		myInput.removeClass('my-input--invalid my-input--valid')
	}
	else if (currentValue.length < 5) {
		console.log(currentValue, 'invalid')
		myInput.removeClass('my-input--valid')
		myInput.addClass('my-input--invalid ')
	}
	else {
		console.log(currentValue, 'valid')
		myInput.removeClass('my-input--invalid')
		myInput.addClass('my-input--valid ')
	}
};

myInput.keyup(myInputKeyPressedLOL)
console.log(myInput)

// $('.js-my-input').removeClass();