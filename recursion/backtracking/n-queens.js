/* https://www.youtube.com/watch?v=jFwREev_yvU */

const isSafePlace = (board, i, j, n) => {
    // Checking in the same column
    for (let row = 0; row < i; row++) {
        if (board[row][j] === 1) {
            return false
        }
    }

    // Checking in the left diagonal
    let x = i
    let y = j
    while (x >= 0 && y >= 0) {
        if (board[x][y] === 1) {
            return false
        }
        x -= 1
        y -= 1
    }

    // Checking in the right diagonal
    x = i
    y = j
    while (x >= 0 && y < n) {
        if (board[x][y] === 1) {
            return false
        }
        x -= 1
        y += 1
    }

    return true
}

/* This is a recursive function. It takes in the nxn board array, row number and n is the number of queens */

const solveNQueens = (board, i, n, output) => {
    // Base case -- All the queens are successfully placed
    if (i === n) {
        /* Printing the positions of all the queens */
        let outputLen = output.length
        output[outputLen] = []
        for (let row = 0; row < n; row++) {
            let str = ''
            for (let col = 0; col < n; col++) {
                if (board[row][col] === 1) {
                    str = str.concat('Q')
                } else {
                    str = str.concat('.')
                }
            }
            output[outputLen].push(str)
        }
        return false
    }

    /* Finding the place for a queen in a row */
    for (let j = 0; j < n; j++) {
        if (isSafePlace(board, i, j, n)) {
            board[i][j] = 1
            let nextQueenPos = solveNQueens(board, i+1, n, output)
            if (nextQueenPos === true) {
                return true
            }

            board[i][j] = 0 // backtracking since we were not able to place the next queen so this is not the right position
        }
    }

    // you have tried all the positions in this row but were not able to find a correct place for this queen.
    return false
}

const nQueens = (n) => {
    let board = []

    /* Initializing the board array. 0 means there is no queen at that position. */
    for (let i = 0; i < n; i++) {
        board[i] = []
        for (let j = 0; j < n; j++) {
            board[i][j] = 0
        }
    }
    let output = []
    solveNQueens(board, 0, n, output)
    return output
}

export default nQueens
