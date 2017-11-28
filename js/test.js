const input = $('.js-my-input');
console.log(input.val())

const onClicked = function() {
	input.val('LOL clicked!')
}

input.click(onClicked)