import Game from "./Game.js";
import GameView from "./GameView.js";


let game = new Game(); 
let gameView = new GameView();

document.querySelector(".btn").addEventListener("click", () => {
    starNewGame();
})

let tiles = document.querySelectorAll(".body-item")
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
       onTileClick(tile.dataset.index);
    } )
})

function onTileClick(i){
    game.makeMove(i)
    gameView.updateBoard(game);
    game.nexTurn()

}

function starNewGame(){
    game = new Game();
    gameView.updateBoard(game);
}


