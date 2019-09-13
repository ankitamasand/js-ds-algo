export const uniquePaths = (m, n) => {
   let board = new Array(n).fill(new Array(m))
   let visited = new Array(n).fill(new Array(m))
   visited[0][0] = true
   let result = []
   findRoboPaths(board, visited, 0, 0, n-1, m-1, result)
   return result.length
}

const canRobotMove = (newRowPos, newColPos, visited, destRow, destCol) => {
   if (newRowPos <= destRow && newColPos <= destCol && !visited[newRowPos][newColPos]) {
       return true
   }
   return false
}

const findRoboPaths = (board, visited, currRow, currCol, destRow, destCol, result) => {

   /* Base Case */
   if (currRow === destRow && currCol === destCol) {
       /* We have found one path */
       result.push(1)
       return false // returning false because we have to find more paths. false will iterate over the for loop of cols
   }

   /* Recursive Case - Only down & right positions are allowed */
   let validRowPositions = [0, 1]
   let validColPositions = [1, 0]

   validRowPositions.forEach((row, index) => {
       let newRowPos = currRow + row
       let newColPos = currCol + validColPositions[index]

       if (canRobotMove(newRowPos, newColPos, visited, destRow, destCol)) {
           visited[newRowPos][newColPos] = true
           let canRobotTakeNextMove = findRoboPaths(board, visited, newRowPos, newColPos, destRow, destCol, result)
           if (canRobotTakeNextMove === true) {
               return true
           }
           /* It is not possible for robot to take next moves with this as the current move.
               So, our choice of currRow and currCol is wrong. Backtracking from this position by making visited as false */
           visited[newRowPos][newColPos] = false
       }
   })

   return false
}
