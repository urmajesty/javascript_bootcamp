// for (let i = 1; i <= 10; i++) {
// 	console.log('loop1', i);
// 	for (let j = 10; j >= 0; j--) {
// 		console.log('loop2', j);
// 	}
// }

const gameboard = [ [ 4, 22, 8, 9 ], [ 34, 93, 2, 10 ], [ 9, 34, 22, 23 ], [ 33, 4, 2, 4 ] ];

let totalScore = 0;
for (let i = 0; i < gameboard.length; i++) {
	let row = gameboard[i];
	for (let j = 0; j < row.length; j++) {
		totalScore += row[j];
	}
}
