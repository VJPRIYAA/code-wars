function duplicateCount(text){
	  var lower = text.toLowerCase();
	  var count = 0;
	  var used = [];
	  
	  lower.split('').forEach(function(letter) {
		      if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
				        count++;
				        used.push(letter);
				      }
		    });
	  
	  console.log(count);
}
(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
