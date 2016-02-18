
var fs = require('fs');

var sourceFile = process.argv[2];
var destinationFile = process.argv[3];

var inputCSV = fs.readFileSync(sourceFile, 'utf-8');
var array = inputCSV.split('\n')
array.pop()

var newArray = []
for (var i = 0; i<array.length; i++) {	
	var now = array[i].split(',');
	newArray.push(now)
} 

var makeObj = function(newArray) {
	var workArray = [] 
	for (var j = 1; j<=newArray[0].length; j++) {  //Assumes the first row are the column titles		
		for (var i = 0; i<newArray[0].length; i++) {			
			var key = newArray[0][i]
			var value = newArray[j][i]
			workArray.push(key + ' : ' + value)
		}
		console.log(workArray)	
	}
	return workArray;
}

var json = JSON.stringify(makeObj(newArray));
// console.log(objForJSON);



fs.writeFileSync(destinationFile, json);

// [
// {
// 	"name": "Rene", 
// 	"age": "35", 
// 	"city": "Vancouver" 
// },
// {
// 	"name": "Thomas", 
// 	"age": "29", 
// 	"city": "Portland" 
// },
// {
// 	"name": "Lexi", 
// 	"age": "28", 
// 	"city": "Seattle" 
// }]

