const num = 125;
const expandedForm = num => {
	   const numStr = String(num);
	   let res = '';
	   for(let i = 0; i < numStr.length; i++){
		         const placeValue = +(numStr[i]) * Math.pow(10, (numStr.length - 1 - i));
		         if(numStr.length - i > 1){
					          res += `${placeValue}+`
					       }else{
							            res += placeValue;
							         };
		      };
	   return res;
};
console.log(expandedForm(num));

