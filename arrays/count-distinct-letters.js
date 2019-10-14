const calcSubstr = (n) => {
    return (n * (n + 1)) / 2
}

const countLetters = (S) => {
    let n = S.length
    let count = 0
    let subStrLength = 1
    for (let i = 0; i < n-1; i++) {
        if (S[i] === S[i+1]) {
            subStrLength++
        } else {
            count = count + calcSubstr(subStrLength)
            subStrLength = 1
        }
    }
    return count + calcSubstr(subStrLength)
}

export default countLetters
