// Write function that translates a text to Pig Latin
// and back. 
// English is translated to Pig Latin by taking the first letter of every word, 
// moving it to the end of the word and adding ‘ay’. 
// “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.


function pigLatin(message){
	// check: does its a a Pig latin phrase or not
	// 1. select the first word
	// 2. select the 2 last letter of first word
	// 3. check the 2 last letter of first word - if its a "ay" - its a pig Latin and we need to decrypt it

	var firstSpace=message.indexOf(" ")
	var firstWord=message.substring(0,firstSpace)
	var pigLatinCheckMark =firstWord.substring(firstWord.length-2,firstWord.length)

	if (pigLatinCheckMark=="ay"){
		console.log("Yes " + message + " is the Pig Latin message: Decryption process is started")
		// Yes, the message is a pig Latin
		decryptPigLatin(message)
	} else {
		console.log(message + " is an English message: encryption process is started")
		// No, the message is ordinary English
		encryptPigLatin(message)
	}
	
		

}

function encryptPigLatin(message){
	// 1. split the message by the words
	// 2. make an array from the words
	// 3. call wordToPigLatin function with (word array element)
	// 4. put the encrypted word into encrypted array
	// 4. if all frace encrypted - print the array, transformed to phrase
	var encryptedMesssage=""
	var allWords = message.split(" ")
	for (i =0; i<allWords.length; i++){
		encryptedMesssage = encryptedMesssage + " "+wordToPigLatin(allWords[i])
	}
	console.log ("---------------------")
	console.log (" ")
	console.log ("Latin Pig message = "+encryptedMesssage)
	console.log (" ")
	console.log ("---------------------")


}


function wordToPigLatin(message) {
	// 1. select the first letter of message.
	// 2. add this letter to the end of message
	// 3. cut the first letter of message
	// 4. add AY to th end of message
	// 5. return encrypted Word
	
	var firstLetter = message.substring(0,1)
	var encryptedWord = message.substring(1,message.length)+firstLetter+"ay"
	return encryptedWord
	}

function decryptPigLatin(message){
	var decryptedMessage=[];
	var allWords="";
	// 1. split message to the array of words
	// 2. take message.length-3 text - it will by the root of decrypted word
	// 3. take third from the end of word letter and make it first
	// 4. cut the AY - the last 2 letters of word
	// 5. add the decrypted word to the new Array
	// 6. Print the Array
	var allWords = message.split(" ")
	var decryptedWord = "";
	var decryptedMessage = [];
	var decryptedText = "";
	for (i=0; i < allWords.length; i++){
			var rootWord = allWords[i].substring(0,allWords[i].length-3);
			var firstLetter =  allWords[i].charAt(allWords[i].length-3); 
			var decryptedWord = firstLetter + rootWord
			var decryptedText = decryptedText + decryptedWord + " ";
	}
	console.log ("---------------------")
	console.log (" ")
	console.log("Decrypted message is: "+decryptedText)
	console.log (" ")
	console.log ("---------------------")
	
}




pigLatin("Hetay uickqay rownbay oxfay")
pigLatin("The quick brown fox")
