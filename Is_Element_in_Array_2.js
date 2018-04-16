// Write a function that checks whether an element occurs in an array.

var dogs = {};
dogs.big = "thibetian mastiff";
dogs.hunter = "pincher";
dogs.funny = "pug";
checkedArray = [1, "bob", 72, 627, "Green", "two", dogs];



function checkArray(item){
	var itemExistFlag=false;
	for (i=0; i<checkedArray.length;i++){
		if (checkedArray[i]==item){
			console.log("The item " + item + " is in array on position "+i);
			var itemExistFlag=true;
			break;
			} 

		}

		if (itemExistFlag==false){
			console.log("Sorry no " +item+ " in this array")	
			} 
	}


checkArray (72)
checkArray (13)
checkArray ("bob")
checkArray ("Gvadelupa")
checkArray ("Bob")
