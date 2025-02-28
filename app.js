const grid = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
];
const playerimg1 = "./assets/player1.svg"
const playerimg2 = "./assets/player2.svg"
let winningArray = [
	[0, 1, 2, 3],
	[41, 40, 39, 38],
	[7, 8, 9, 10],
	[34, 33, 32, 31],
	[14, 15, 16, 17],
	[27, 26, 25, 24],
	[21, 22, 23, 24],
	[20, 19, 18, 17],
	[28, 29, 30, 31],
	[13, 12, 11, 10],
	[35, 36, 37, 38],
	[6, 5, 4, 3],
	[0, 7, 14, 21],
	[41, 34, 27, 20],
	[1, 8, 15, 22],
	[40, 33, 26, 19],
	[2, 9, 16, 23],
	[39, 32, 25, 18],
	[3, 10, 17, 24],
	[38, 31, 24, 17],
	[4, 11, 18, 25],
	[37, 30, 23, 16],
	[5, 12, 19, 26],
	[36, 29, 22, 15],
	[6, 13, 20, 27],
	[35, 28, 21, 14],
	[0, 8, 16, 24],
	[41, 33, 25, 17],
	[7, 15, 23, 31],
	[34, 26, 18, 10],
	[14, 22, 30, 38],
	[27, 19, 11, 3],
	[35, 29, 23, 17],
	[6, 12, 18, 24],
	[28, 22, 16, 10],
	[13, 19, 25, 31],
	[21, 15, 9, 3],
	[20, 26, 32, 38],
	[36, 30, 24, 18],
	[5, 11, 17, 23],
	[37, 31, 25, 19],
	[4, 10, 16, 22],
	[2, 10, 18, 26],
	[39, 31, 23, 15],
	[1, 9, 17, 25],
	[40, 32, 24, 16],
	[9, 7, 25, 33],
	[8, 16, 24, 32],
	[11, 7, 23, 29],
	[12, 18, 24, 30],
	[1, 2, 3, 4],
	[5, 4, 3, 2],
	[8, 9, 10, 11],
	[12, 11, 10, 9],
	[15, 16, 17, 18],
	[19, 18, 17, 16],
	[22, 23, 24, 25],
	[26, 25, 24, 23],
	[29, 30, 31, 32],
	[33, 32, 31, 30],
	[36, 37, 38, 39],
	[40, 39, 38, 37],
	[7, 14, 21, 28],
	[8, 15, 22, 29],
	[9, 16, 23, 30],
	[10, 17, 24, 31],
	[11, 18, 25, 32],
	[12, 19, 26, 33],
	[13, 20, 27, 34],
];
const gridCase = document.querySelector(".grid-btn");

let playerOneScore = 0;
let playerTwoScore = 0;
let tourPlayer = "";

const grilleColumns = document.querySelectorAll(".grid-col");
const backgroundChangeWin = document.querySelector(".background-raduis");
const ruleBtn = document.querySelector(".rules-btn");
const imgFourGame1 = "./assets/player1.svg";
const imgFourGame2 = "./assets/player2.svg";
const playerVsPlayer = document.querySelector(".playervs");
const menuPrinc = document.querySelector(".first-menu");
const btnMenu = document.querySelector(".nav-button");
const body = document.body;



let count = 15;
let rotatePlayerTurn = 0;
let timer = null;
let isRunning = false; 
const textcompteur = document.getElementById('textcompteur');
const menubtn = document.getElementById('menubtn');
textcompteur.textContent = count;
const turnplayer = document.getElementById("pchange");
const gridfour = document.querySelectorAll(".grid-btn");
const jspimg = document.getElementById("jspimg");
const selectimg = document.querySelector(".select")
gridfour.forEach((cell, i) => {
    cell.addEventListener("keydown", (e) => {
        if (e.code !== "Space") return; 
        const img = cell.querySelector("img"); 
        if (!img || img.alt) return;
        if (rotatePlayerTurn % 2 === 0) {
            img.src = "./assets/red-rond.svg";
            img.alt = "red";
            grid[i] = "red";
			jspimg.src = "./assets/yellow-counter.svg"
			count = 16
            turnplayer.textContent = "PLAYER 2'S TURN";
        } else {
            img.src = "./assets/yellow-rond.svg";
            img.alt = "yellow";
            grid[i] = "yellow";
			jspimg.src = "./assets/red-counter.svg"
			count = 16
            turnplayer.textContent = "PLAYER 1'S TURN";
        }
        rotatePlayerTurn++;
        console.log(grid);
    });
});
function compteurgame() {
	if (!isRunning) {
		clearInterval(timer)
			isRunning = true;
		let turnColor = 0
			timer = setInterval(() => {
				if (count <= 0) {
					turnColor++
					if (turnColor % 2 == 0) {
					jspimg.src = "./assets/red-counter.svg"
					turnplayer.textContent = "PLAYER 1'S TURN";
					selectimg.src = "./assets/rec-yel.svg"
					}else {
					jspimg.src = "./assets/yellow-counter.svg"
					turnplayer.textContent = "PLAYER 2'S TURN";
					selectimg.src = "./assets/colonne-select.svg"
					}
					count = 15;
					textcompteur.textContent = count;
					

				} else {
					count--; 
					textcompteur.textContent = count;
				}
			}, 1000);
		}

}
console.log(grilleColumns);

playerVsPlayer.addEventListener("click", () => {
	menuPrinc.remove();
});
menubtn.addEventListener("click", () => {
	compteurgame()
});

function startGame() {
	playerOneScore = 0;
	playerTwoScore = 0;
	tourPlayer = "";
	count = 15;
	isRunning = false; 
	timer = null;
	textcompteur.textContent = count
	grid = [
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
		["", "", "", "", "", "", ""],
	];
}


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
	const divBtnPause = document.createElement("div");
	const btnPause1 = document.createElement("button");
	const btnPause2 = document.createElement("button");
	const btnPause3 = document.createElement("button");

	fullMenu.classList.add("full-menu");
	pauseMenu.classList.add("pause");
	spanPause.classList.add("text-pause");
	spanPause.classList.add("pause-white");
	divBtnPause.classList.add("div-btn-pause");
	btnPause1.classList.add("btn-pause");
	btnPause2.classList.add("btn-pause");
	btnPause3.classList.add("btn-pause");
	btnPause3.classList.add("pink-btn");

	spanPause.textContent = "PAUSE";
	btnPause1.textContent = "CONTINUE-GAME";
	btnPause2.textContent = "RESTART";
	btnPause3.textContent = "QUIT GAME";

	pauseMenu.appendChild(spanPause);
	divBtnPause.appendChild(btnPause1);
	divBtnPause.appendChild(btnPause2);
	divBtnPause.appendChild(btnPause3);
	fullMenu.appendChild(pauseMenu);
	pauseMenu.appendChild(divBtnPause);
	body.appendChild(fullMenu);

	btnPause1.addEventListener("click", () => {
		fullMenu.remove();
		compteurgame()
	});

	btnPause2.addEventListener("click", () => {
		fullMenu.remove();
		count = 16
		timer = setInterval(() => {
			if (count <= 0) {
				count = 15;
				textcompteur.textContent = count;

			} else {
				count--; 
				textcompteur.textContent = count;
			}
		}, 1000);
		count = 16
		playerOneScore = 0;
		playerTwoScore = 0;
		tourPlayer = "";
		grid = [
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
			["", "", "", "", "", "", ""],
		];
	})

	btnPause3.addEventListener("click", () => {
		body.appendChild(menuPrinc);

		count = 16;
		isRunning = false; 
		timer = null;
		fullMenu.remove();
		startGame()
	});
	return;
}
ruleBtn.addEventListener("click", activeRulesBtn);

btnMenu.addEventListener("click", () => {
	menuPause();
	clearInterval(timer)
	isRunning = false
});

// for (let i = 0; i < grilleColumns.length; i++) {
// 	const grilleCol = grilleColumns[i];
// 	const numCol = grilleCol.getAttribute("data-col");

// 	grilleCol.addEventListener("click", () => {
// 		console.log(game[numCol]);
// 	});
// }

function winningCheck(gridcheck) {
	for (let i = 0; i < winningArray.length; i++) {
		const element = winningArray[i];
		for (let j = 0; j < element.length; j++) {
			const elementcheck = element[j];
			for (let h = 0; h < grid.length; h++) {
				const gridelement = grid[h];
				for (let a = 0; a < gridelement.length; a++) {
					const littleelementgrid = gridelement[a];
					if (littleelementgrid == elementcheck) {
						console.log("true");
						return true;
					}else if(littleelementgrid !== elementcheck){
						console.log("false");
						return false;
					}
				}
			}
		}
	}
}