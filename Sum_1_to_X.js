//  Write a function that takes an argument n, and prints the sum of the numbers 1 to n.
var sum=0;

function numSum(x){
	// CLASSIC LOOP 
	
for (var i = 1; i <= x; i++) {
 sum=sum+i;
	
	}
console.log("the sum of the numbers 1 to" +x+" = "+sum)

}

function numSum_2(x){
	// Aryphmetic progression
	console.log("x=" +x)

sum_2=(x*(x+1))/2;
console.log("The sum of the numbers 1 to" +x+" = "+sum_2)

}





numSum(10);
numSum_2(10)