// function rollDie() {
// 	let roll = Math.floor(Math.random() * 6) + 1;
// 	console.log(`rolled: ${roll}`);
// }

function throwDice() {
	rollDie();
	rollDie();
	rollDie();
	rollDie();
}

function throwDice(num) {
	for (let i = 0; i < num; i++) {
		rollDie();
	}
}
