const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const result = 4;

function solution(board, moves) {
    // condition
    if (board.length < 5 || board.length > 30) return;
    if (moves.length < 1 || moves.length > 1000) return;

    const basket = [];
    let explodedDoll = 0;

    // construct movement of the crane
    moves.forEach(move => {  
        for (let i = 0; i < board.length; i++) {
            const cellToPass = board[i][move - 1];
            if (cellToPass !== 0) {
                // put dolls in a basket
                if (basket[basket.length - 1] === cellToPass) {
                    basket.pop();
                    explodedDoll += 2;
                } else {
                    basket.push(cellToPass);
                }
                // remove doll from board
                board[i][move - 1] = 0;
                break; // exit the loop after picking the doll
            }
        }
    });

    return explodedDoll;
}

solution(board, moves);