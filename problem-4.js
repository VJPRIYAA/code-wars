function arrayDiff(a, b) {
	for (var j = 0; j < a.length; j++) {
		for (var i = 0; i < b.length; i++) {
			if (a[j] == b[i]) {
				delete a[j];
			}
		}
	}
	console.log(a.filter(Boolean));
	return a.filter(Boolean);
}
arrayDiff([1, 2], [1]);
arrayDiff([1, 2, 2, 2, 3], [2]);
