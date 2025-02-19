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
const backgroundChangeWin = document.querySelector(".background-raduis");
const ruleBtn = document.querySelector(".rules-btn");
const imgFourGame1 = "./assets/player1.svg";
const imgFourGame2 = "./assets/player2.svg";
const playerVsPlayer = document.querySelector(".playervs");
const menuPrinc = document.querySelector(".first-menu");
const btnMenu = document.querySelector(".menu-back");
const body = document.body;

console.log(grilleColumns);

playerVsPlayer.addEventListener("click", () => {
	menuPrinc.remove();
});

function activeRulesBtn() {
	const body = document.body;
	const divFull = document.createElement("dialog");
	const divRules = document.createElement("div");
	const titleRules = document.createElement("div");
	const titlespan = document.createElement("span");
	const sectionObject = document.createElement("section");
	const textObject = document.createElement("p");
	const spanObject = document.createElement("span");
	const sectoinHowToPlay = document.createElement("section");
	const pHowToPlay = document.createElement("p");
	const olHow = document.createElement("ol");
	const liHow1 = document.createElement("li");
	const liHow2 = document.createElement("li");
	const liHow3 = document.createElement("li");
	const liHow4 = document.createElement("li");
	const imgRule = document.createElement("img");

	divRules.appendChild(titleRules);
	titleRules.appendChild(titlespan);
	sectionObject.appendChild(textObject);
	sectionObject.appendChild(spanObject);
	sectoinHowToPlay.appendChild(pHowToPlay);
	sectoinHowToPlay.appendChild(olHow);
	olHow.appendChild(liHow1);
	olHow.appendChild(liHow2);
	olHow.appendChild(liHow3);
	olHow.appendChild(liHow4);
	divRules.appendChild(imgRule);
	divRules.appendChild(sectionObject);
	divRules.appendChild(sectoinHowToPlay);

	divFull.appendChild(divRules);
	body.appendChild(divFull);

	divFull.classList.add("full-rules");
	divRules.classList.add("rules");
	titleRules.classList.add("title-rules");
	titlespan.classList.add("text-pause");
	sectionObject.classList.add("rules-objective");
	textObject.classList.add("little-rules");
	sectoinHowToPlay.classList.add("how-to-play");
	pHowToPlay.classList.add("little-rules");

	titlespan.textContent = "RULES";
	textObject.textContent = "OBJECTIVE";
	spanObject.textContent =
		"Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).";
	pHowToPlay.textContent = "HOW TO PLAY";
	liHow1.textContent = "Red goes first in the first gmae.";
	liHow2.textContent =
		"Players must alternate turns, and only one disc can be dropped in each turn. ";
	liHow3.textContent =
		"The game ends when there is a 4-in-a-row or a stalemate.";
	liHow4.textContent =
		"The starter of the previous game goes second on the next game.";
	imgRule.src = "./assets/icon-check.svg";

	imgRule.addEventListener("click", () => {
		divFull.remove();
	});
	return;
}

function menuPause() {
	const body = document.body;
	const fullMenu = document.createElement("div");
	const pauseMenu = document.createElement("div");
	const spanPause = document.createElement("span");
}

ruleBtn.addEventListener("click", activeRulesBtn);

btnMenu.addEventListener("click", () => {});

for (let i = 0; i < grilleColumns.length; i++) {
	const grilleCol = grilleColumns[i];
	const numCol = grilleCol.getAttribute("data-col");

	grilleCol.addEventListener("click", () => {
		console.log(game[numCol]);
	});
}
