const isPalindrome (str, start, end) => {
    if (start === end) return true
    if (start > end) return true
    if (str[start] !== str[end]) return false
    return isPalindrome(str, start+1, end-1)
}

let str = "aabaa"
isPalindrome(str, 0, str.length - 1)

/* There will be no more recursive calls once we reach the condition where characters at positions start and end do not match. So, our function will return false for all the recursive calls that were called before this function. */
