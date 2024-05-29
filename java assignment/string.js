//Reverse a String: Write a function that reverses a given string.

var str = "Hello";
//console.log(str);
var output = str.split('').reverse().join('')
console.log(output);
//Count Characters: Create a function that counts the number of characters in a string.

function countCharacters(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

let inputString = "Hello, world!";
let characterCount = countCharacters(inputString);
console.log("Number of characters:", characterCount);

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');
    
    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // Join the words back together into a sentence
    let capitalizedSentence = words.join(' ');
    
    return capitalizedSentence;
}

let inputSentence = "hello world";
let capitalizedSentence = capitalizeFirstLetter(inputSentence);
console.log("Capitalized sentence:", capitalizedSentence); // Output will be "Hello World"
