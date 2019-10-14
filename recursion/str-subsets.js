/* Generate subsets of a string */

export const subsetsOfStr = (str) => {
    let output = []
    helper(str, "", 0, output)
    return output
}

const helper = (str, currentStr, i, output = []) => {
    if (i === str.length) {
        output.push(currentStr)
        return
    }

    /* Not taking char at i */
    helper(str, currentStr, i+1, output)
    /* Taking char at i */
    helper(str, currentStr+str.charAt(i), i+1, output)
}
