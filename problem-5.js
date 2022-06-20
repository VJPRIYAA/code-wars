function isprime(num) {
	if (num < 2) {
		return false;
	}
	for (let i = 2; i < num / 2 + 1; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
console.log(isprime(1));
