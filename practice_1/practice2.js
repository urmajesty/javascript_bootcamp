const movieReviews = {
	alien: 9,
	'men in black': 8,
	"there's something about mary": 10,
	Big: 5,
	Madeline: 7
};

for (let movie of Object.keys(movieReviews)) console.log(movie, movieReviews[movie]);

const ratings = Object.values(movieReviews);
let total = 0;
for (let score of ratings) {
	total += score;
}

// total /= ratings.length;
// console.log(total);

let avg = total / ratings.length;
console.log(avg);
