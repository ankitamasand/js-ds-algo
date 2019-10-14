## Top Down & Bottom Up approaches to solving different problems

`Recursion` is a top-down approach. In top-down approach, we first start with the big problem and since we don't know solution to this big problem as of yet. We postpone its execution until we get answers to similar smaller problems. Recursion does exactly that. It first reaches to the base sub problems, gets their results and keep solving sub problems on its way back.

What is we can directly start with these sub problems and then build our way up to the actual problem? The actual problem can be solved using the combination of solutions of these sub problems. This is **bottom up dynamic programming**.

We can also use top down dynamic programming, where we start with the actual problem and then move downwards. And while coming back upwards, we keep storing the results of the sub problems. This is how we solve the fibonacci problem using memoization. We start with the actual problem and since we don't know the answer to this problem as of yet. We go to this smaller problems and try finding answers for them and store them somewhere for later use.

Let's consider the example of KnapSack problem -- Here we have a sack of 30kg and some number of items of 1kg, 2kg, 5kg, 8kg, etc. These all items yield some particular profit. We have to maximize our profit while filling the sack.

The top-down approach to this problem will consider the 30Kg bag and take the item that has maximum profit. Let's say we take 5kg item. Now we solve this particular problem with 25kg sack space and proceed.

We can also break this down to smaller sub problems as in bottom up dynamic programming approach. We will start with the 1Kg sack and find solution for that. Then we will consider 2kg, 3kg, 4kg, etc upto 30kg sacks. We'll find solutions to these all sub problems and ultimately reach to the 30kg problems with the help of these sub problems. We'll never go wrong in this approach and we'll always have answers to all of its previous states at any point in time.
