export const exponent = (base, power) => {
    if (power === 0) {
        return 1
    }
    let halfPower = exponent(base, Math.floor(power / 2))
    let fullPower = halfPower * halfPower

    /* handling the odd power */
    if (power % 2 !== 0) {
        return fullPower * base
    }

    return fullPower
}
