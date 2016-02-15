
//NODE1: Node Colors
var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]

var luminosity = (0.2126*r + 0.7152*g + 0.0722*b)
var isLight = function () {
	if (luminosity > 155) {
		console.log('light')
	}
	else {
		console.log('dark')
	}
}

var darken = function() {
	var rDark = r-(r*0.2);
	var gDark = g-(g*0.2);
	var bDark = b-(b*0.2);
	console.log(rDark + ', ' + gDark + ', ' + bDark)
}

module.exports = {
	lumos : isLight,
	dark  : darken,
};


