function fib(n, memo={}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n]
}

function fibNeg(n, memo={}) {
    n = BigInt(n)
    if (n in memo) return BigInt(memo[n]);
    if (n === 1n || n === -1n) return 1n;
    if (n === 0n) return 0n;
    if (n < 0n) {
        memo[n] = fibNeg(n * -1n, memo) * -1n;
    } else {
        memo[n] = fibNeg(n-1n, memo) + fibNeg(n-2n, memo);
    }
    return memo[n];
  }

// console.log(fib(7))
// console.log(fib(10))
// console.log(fib(50))

console.log(fibNeg(-7))
console.log(fibNeg(-6))
console.log(fibNeg(-50))