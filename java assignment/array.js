//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    let max = arr[0]; // Assume the first element is the maximum
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger element is found
        }
    }
    return max;
}

function findMin(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    let min = arr[0]; // Assume the first element is the minimum
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if a smaller element is found
        }
    }
    return min;
}

let numbers = [5, 3, 9, 1, 7];
let max = findMax(numbers);
let min = findMin(numbers);
console.log("Maximum value:", max); // Output will be 9
console.log("Minimum value:", min); // Output will be 1


//Sum of Array: Create a function that calculates the sum of all elements in an array.
function calculateSum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let totalSum = calculateSum(numbers);
console.log("Sum of all elements:", totalSum); // Output will be 15



//Filter Array: Implement a function that filters out elements from an array based on a given condition


function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = filterArray(numbers, function(num) {
    return num % 2 === 0; // Filter even numbers
});
console.log("Filtered array (even numbers):", evenNumbers); // Output will be [2, 4]







