function firstNonRepeatedChar(str) {
 // Write your code here

	for(let i=0; i<str.length; i++){
		let fc=str.indexOf(str.charAt(i));
		let lc=str.lastIndexOf(str.charAt(i));
		if(fc==lc){
			return str.charAt(i);
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
