const canConvert = (str1, str2) => {
    let n = str1.length // Both the strings are of same length
    let map = new Map()

    for (let i = 0; i < n; i++) {
        let char1 = str1.charAt(i)
        let char2 = str2.charAt(i)
        if (char1 !== char2) {
            if (map.has(char1)) {
                if (map.get(char1) !== char2) return false
            } else {
                map.set(char1, char2)
            }
        }
    }

    console.log('map', map)
    return true
}

export default canConvert
