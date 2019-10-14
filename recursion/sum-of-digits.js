export const sumOfDigits = (n) => {
    if (n < 10) return Math.floor(n)
    return Math.floor(n % 10) + sumOfDigits(Math.floor(n / 10))
}
