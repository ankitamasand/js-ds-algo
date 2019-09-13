/* Given a rope of length n, you need to find maximum number of pieces you can make such that the length of every piece is in set {a, b, c} for given values of a, b and c

I/P n = 5, a = 2, b = 5, c = 1
O/P 5 (5 cuts of length 1)

I/p n = 23, a = 12, b = 9, c = 11
O/P 2 (12 and 1)

I/P n = 5, a = 4, b = 2, c = 6
O/P -1 (no possible cuts are possible with these values of a, b and c.
If we cut a rope of length of 4, then the remaining rope of length 1 is not present in the set. )
*/

const maxRopePieces = (n, a, b, c) => {
    if (n === 0) return 0
    if (n < 0) return -1

    let result = Math.max(maxRopePieces(n-a, a, b, c), maxRopePieces(n-b, a, b, c), maxRopePieces(n-c, a, b, c))

    if (result === -1) return -1
    return result + 1
}

/* Time complexity of this problem using recursion is O(3^n). It can be done in O(n) using DP */
