/* https://leetcode.com/contest/weekly-contest-150/problems/find-words-that-can-be-formed-by-characters/ */

const addInMap = (word, map) => {
    for (let i = 0; i < word.length; i++) {
        let value = word.charAt(i)
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    }

    return map
}

const countCharacters = (words, chars) => {
    let map = new Map()
    let result = 0

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        let isValid = true
        addInMap(chars, map)

        for (let j = 0; j < word.length; j++) {
            if (map.has(word[j]) && map.get(word[j]) >= 1) {
                map.set(word[j], map.get(word[j]) - 1)
            } else {
                isValid = false
                break
            }
        }

        if (isValid) {
            result += word.length
        }

        map.clear()
    }

    return result
}

export default countCharacters
