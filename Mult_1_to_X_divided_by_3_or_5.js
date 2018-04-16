//  Modify the previous function
// such that only multiples of three or five are considered in the sum,
// e.g. 3, 5, 6, 9, 10, 12, 15 for n=17.

var mult=1;

function multNums(x){
	// CLASSIC LOOP 
	
for (var i = 1; i <= x; i++) {
	if (i % 3 == 0 || i % 5 == 0 ){
		mult=mult * i;
		}
	
	}
console.log("Result om myltyplying numbers from 1 to " +x+", which divided by 3 or 5 = "+mult)

}



multNums(17);
