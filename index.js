function num_of_digits(num) {
	
	const num2 = String(num);
	let digit = num2.length
	
	if (num2 < 0 ){
		digit -= 1
	}
	
	return digit
}
