
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
console.log('newArray: ', newArray)

// function MakeObj (newArray) {
// 	for (var i = 0; i<newArray.length; i++) {

// 	}
// }
// var newObj = makeObj(newArray);
// console.log(newObj);


// fs.writeFileSync(destinationFile, newArray);

