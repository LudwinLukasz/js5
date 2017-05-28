var a = 0,
	b = 0,
	value;

a = prompt('Enter a');
b = prompt('Enter b');
value =	(a * a) + (2 * a * b) - (b * b);
console.log('Delta value for a:' + a + 'b: ' + b + ' is equal to: ' + value);
if (value > 0) {
	console.log("Wartość jest dodatnia")
} else if (value < 0) {
	console.log("Wartość jest ujemna")
} else if (value == 0) {
	console.log("Wartość jest równa 0")
} else {
	console.log("coś nie tak")
}