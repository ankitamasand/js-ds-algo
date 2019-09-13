# Dynamic Programming

## Minimum number of jumps to reach the end of the array

Let's say we've an array

|0|1|2|3|4|5|6|7|8|9|
|---|---|---|---|---|---|---|---|---|---|
|2|3|1|1|2|4|2|0|1|1|

Our goal is to reach the end of the array using minimum jumps. At any position in the array, we can make jumps at the most equal to the value at that position.

If you are at position 0, you can make at the most 2 jumps (1 or 2 jumps)

We can also find out the path to reach the end (All the elements that we take into consideration to reach the end)

If you solve it greedily and try to go the next maximum element possible, this approach will fail.

### Approach 1 using Dynamic Programming

[Tushar Roy](https://www.youtube.com/watch?v=cETfFsSTGJI)

We'll make an array to store the `jumps_count` at all the positions.
Mark position 0 of `jumps_count` as 0
Start by traversing the array from position 1.

One pointer will be at position i and we'll start another pointer j from position 0. We'll check if we can reach position i from position j. If it is possible to reach position i with position j, we'll count the number of jumps to reach there.

And we'll increment j and check if it is possible now. We'll find out the minimum jumps to reach position i from all the previous positions.

In the above array, we start i at index 1 and j at index 0. Now, is it possible to reach 3 from 2, yes! Jumps will be 1. Put jumps_count[i] = 1

Next, i will be at 1 and j will again start from position 0.
Is it possible to reach 1 from position 0, yes! jumps will be 1
Now, j will come to 3, is it possible to reach from 3, yes! But this time jumps will be 1 + 1 = 2. Because jumps required to reach 3 itself is 1.
We'll take the minimum of these two values, which is 1 and keep moving forward.

Your jumps_count array will look like:

|0|1|2|3|4|5|6|7|8|9|
|---|---|---|---|---|---|---|---|---|---|
|0|1|1|2|2|3|3|4|4|4|

It is also possible to trace the path to reach end. Make one more array `path`

This array will store the position from where you actually jumped.
So, in above array, first position will have `-1`

To reach 2nd or 3rd position, we'll jump from position 0.
To reach 3rd position we jump from position 1 and so the value at path[3-1] = 1

This array will look like:

|0|1|2|3|4|5|6|7|8|9|
|---|---|---|---|---|---|---|---|---|---|
|-1|0|0|1|1|4|4|5|5|5|

Please note, the value in this array will change only when we make a jump. Otherwise it will remain same as the value at previous index.

```javascript
const minJumpsToReachEnd = (arr) => {
    let n = arr.length

    /* noOfJumps array holds the number of jumps required to reach position i from start */
    const noOfJumps = new Array(n)

    /* It is possible to reach position 0 with 0 jumps */
    noOfJumps[0] = 0

    for (let i = 1; i < n; i++) {
        let minJumpsCount = noOfJumps[i-1] + 1
        for (let j = 0; j < i; j++) {
            /* Is it possible to reach ith position with the value at index j?
                Comparing with i-j since we've already reached j
            */
            if (arr[j] >= i-j) {
                let jumpsRequired = noOfJumps[j] + 1
                if (jumpsRequired < minJumpsCount) {
                    minJumpsCount = jumpsRequired
                }
            }
        }
        noOfJumps[i] = minJumpsCount
    }

    return noOfJumps[n-1]
}
```
This will take O(n^2) time complexity.

### Approach 2 in linear time

[https://www.youtube.com/watch?v=vBdo7wtwlXs](iDeserve)

This will be solved in `O(n)` time and without using any extra array space.




## Longest Common Subsequence

## Longest Common Substring

## Fractional Knapsack

## 0/1 Knapsack

## Coin Change

## Count the number of ways to reach stairs
