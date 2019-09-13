const lengthOfLongestSubstring = (s) => {
    let n = s.length
    if (!n) return 0
    let start = 0
    let end = 0
    let set = new Set()
    let maxLength = 0

    while (start < n && end < n) {
        if (!set.has(s.charAt(end))) {
            set.add(s.charAt(end))
            end += 1
            maxLength = Math.max(maxLength, end - start)
        } else {
            set.delete(s.charAt(start))
            start += 1
        }
    }

    return maxLength
}

export default lengthOfLongestSubstring
