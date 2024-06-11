export default class GameView {

    
    constructor(){
       
    }

    updateBoard(game){
        this.updateTurn(game);
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.body-item[data-index='${i}']`);
            tile.textContent = game.board[i];
        }
         
    }

    updateTurn(game){
        let playerX = document.querySelector("player-one")
        let playerO = document.querySelector("player-two")
    }
   
}