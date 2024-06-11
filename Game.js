export default class Game {
    constructor(){
        console.log("init game");
        this.turn ="X";
        this.board = new Array(9).fill(null)
    }

    nexTurn(){
        if(this.turn == "X"){
            this.turn = "O";
        } else {
        this.turn = "X"
        }
    }

    makeMove(i){
        if (this.endOfGame()){
            return;
        }
        if(this.board[i]){
            return;
        }
        this.board[i] = this.turn; 
        let wingCombinations = this.findWinningCombinations();  
        console.log("this is the winner", wingCombinations)
    }


    findWinningCombinations(){
        const wingCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [8,4,0],
            [2,4,6]
    
        ]
        for (const combination of wingCombinations){
            const [a,b,c] = combination;
            if (this.board[a] &&
                (this.board[a] === this.board[b] && this.board[a] === this.board[c]) ){
                    return combination;
                
            }    
        }
        return null
    }

    endOfGame(){
        let wingCombinations = this.findWinningCombinations();
        if (wingCombinations){
            return true;
        } else {
            return false;
        }
    }
}


