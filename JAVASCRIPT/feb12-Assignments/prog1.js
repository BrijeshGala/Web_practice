// Define an array
const numbers = [1,2,10,20];

// Initialize variables to store sum, largest, and smallest
let sum = 0;
let largest = numbers[0];
let smallest = numbers[0];

// Loop through each element of the array
for (let i = 0; i < numbers.length; i++) {
    // Add current element to the sum
    sum += numbers[i];

    // Update largest if the current element is larger
    if (numbers[i] > largest) {
        largest = numbers[i];
    }

    // Update smallest if the current element is smaller
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

// Display the sum, largest, and smallest
console.log("The sum of all elements is:", sum);//33
console.log("The largest element is:", largest);//20
console.log("The smallest element is:", smallest);//1