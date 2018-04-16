// Write a function that combines two lists
// by alternatingly taking elements,
// e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var nums=[1,2,3,4,5,6,7,8,9,];
var letters=["a","b","c","d","i","f","g","h","i"];

function arrCombined(arr_1,arr_2){
	var combinedArray =[];
	var i=0;

	if (arr_1.length != arr_2.length){
		console.log("Arrays has non equal length! ")
		
	}else{
		while( i <arr_1.length){
			var pushed = combinedArray.push(arr_1[i]);
			var pushed = combinedArray.push(arr_2[i]);
			i++;

		}


console.log("New Array item " + combinedArray)


	}
}

arrCombined(nums, letters);