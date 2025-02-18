const game = [
	[0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
];

const grilleColumns = document.querySelectorAll(".grid-col");

console.log(grilleColumns   );

for (let i = 0; i < grilleColumns.length; i++) {
	const grilleCol = grilleColumns[i];
	const numCol = grilleCol.getAttribute("data-col");

	grilleCol.addEventListener("click", () => {
		console.log(game[numCol]);
	});
}
