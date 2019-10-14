const numberOfLines = (widths, S) => {
    let totalLines = 1
    let sentenceCount = 0
    let charsInLastLine = 0

    for (let i = 0; i < S.length; i++) {
        let charWidth = widths[S[i].charCodeAt(0) - 97]
        if (sentenceCount + charWidth > 100) {
            sentenceCount = charWidth
            totalLines += 1
        } else {
            sentenceCount += charWidth
        }
    }

    charsInLastLine = sentenceCount
    return [totalLines, charsInLastLine]
}

export default numberOfLines
