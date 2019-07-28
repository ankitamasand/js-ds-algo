const trappingRainWater = (arr) => {

    if (!arr.length) return []
    let waterLts = 0
    let n = arr.length
    let leftMax = [ arr[0] ]
    let rightMax = [ arr[n - 1] ]
    let lm = arr[0]
    let rm = arr[n - 1]

    for (let i = 1; i < n; i++) {
        if (lm < arr[i]) {
            lm = arr[i]
        }
        leftMax[i] = lm
    }

    for (let i = n - 1; i >= 0; i--) {
        if (rm < arr[i]) {
            rm = arr[i]
        }
        rightMax[i] = rm
    }

    for (let i = 0; i < n; i++) {
        waterLts += (Math.min(leftMax[i], rightMax[i]) - arr[i])
    }

    console.log('waterLts', waterLts)
    return waterLts
}

export default trappingRainWater
