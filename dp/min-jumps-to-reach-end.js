/* Approach 1 using Dynamic Programming*/

const minJumpsToReachEnd = (arr) => {
    let n = arr.length

    /* noOfJumps array holds the number of jumps required to reach position i from start */
    const noOfJumps = new Array(n)

    /* It is possible to reach position 0 with 0 jumps */
    noOfJumps[0] = 0

    for (let i = 1; i < n; i++) {
        let minJumpsCount = noOfJumps[i-1] + 1
        for (let j = 0; j < i; j++) {
            /* Is it possible to reach ith position with the value at index j?
                Comparing with i-j since we've already reached j
            */
            if (arr[j] >= i-j) {
                let jumpsRequired = noOfJumps[j] + 1
                if (jumpsRequired < minJumpsCount) {
                    minJumpsCount = jumpsRequired
                }
            }
        }
        noOfJumps[i] = minJumpsCount
    }

    return noOfJumps[n-1]
}

/* Approach 2 in linear approach */

const minJumpsToReachEndLinear = (arr) => {
    let n = arr.length
    
}

export default minJumpsToReachEnd
