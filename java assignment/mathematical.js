//Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
    // Base case: if n is 0 or 1, factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: factorial(n) = n * factorial(n - 1)
        return n * factorial(n - 1);
    }
}


let number = 5;
let result = factorial(number);
console.log("Factorial of", number, "is:", result); // Output will be 120

//Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }
    // Iterate from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible evenly by any integer in this range, it's not prime
        if (number % i === 0) {
            return false;
        }
    }
    // If the number is not divisible evenly by any integer in the range, it's prime
    return true;
}

let num = 17;
if (isPrime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms

function generateFibonacci(n) {
    let fibonacciSequence = []; 
    if (n === 1) {
        fibonacciSequence.push(0);
    } else if (n >= 2) {
        fibonacciSequence.push(0, 1);
        for (let i = 2; i < n; i++) {
            fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
        }
    }
    return fibonacciSequence;
}

let numTerms = 10;
let fibonacci = generateFibonacci(numTerms);
console.log("Fibonacci sequence:", fibonacci);


