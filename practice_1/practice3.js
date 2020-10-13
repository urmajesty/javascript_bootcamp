// function rollDie() {
// 	let roll = Math.floor(Math.random() * 6) + 1;
// 	console.log(`rolled: ${roll}`);
// }

// function throwDice() {
// 	rollDie();
// 	rollDie();
// 	rollDie();
// 	rollDie();
// }

// function throwDice(num) {
// 	for (let i = 0; i < num; i++) {
// 		rollDie();
// 	}
// }
// function sum(x, y) {
//     console.log(x + y);

// }

// function isGrey(color) {
// 	return color.toLowerCase() === 'grey';
// }

function containsGrey(arr) {
	for (let color of arr) {
		if (color === 'grey') {
			return true;
		}
	}
}
