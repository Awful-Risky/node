
var fs = require('fs');

var sourceFile = process.argv[2];
var destinationFile = process.argv[3];

var inputCSV = fs.readFileSync(sourceFile, 'utf-8');

console.log(inputCSV)
console.log(typeof (inputCSV))

var array = inputCSV.split('\n')
array.pop()

console.log(array)


var newArray = []
for (var i = 0; i<array.length; i++) {	
	var now = array[i].split(',');
	newArray.push(now)
} 
console.log('newArray: ', newArray)




fs.writeFileSync(destinationFile, inputCSV);

