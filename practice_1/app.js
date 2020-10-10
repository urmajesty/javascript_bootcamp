// for (let i = 1; i <= 10; i++) {
// 	console.log('loop1', i);
// 	for (let j = 10; j >= 0; j--) {
// 		console.log('loop2', j);
// 	}
// }

// const gameboard = [ [ 4, 22, 8, 9 ], [ 34, 93, 2, 10 ], [ 9, 34, 22, 23 ], [ 33, 4, 2, 4 ] ];

// let totalScore = 0;
// for (let i = 0; i < gameboard.length; i++) {
// 	let row = gameboard[i];
// 	for (let j = 0; j < row.length; j++) {
// 		totalScore += row[j];
// 	}
// }
// let j = 0;
// while (j <= 5) {
// 	console.log(j);
// 	j++;
// }

const num = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== num) {
	console.log(`Num: ${num} guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Num: ${num} guess: ${guess}`);
console.log('CONGRATULATIONS!!! YOU WON!');
