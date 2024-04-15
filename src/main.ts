// Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
const numbers: number[] = [1,2,3,4,5,6,7,8];
const doubledNumbers: number[] = numbers.map((number: number) => number * 2);
console.log(doubledNumbers);

// Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const words: string[] = ["hello", "beautiful", "world"];
const filteredWords: string[] = words.filter((word: string) => word.length > 5)
console.log(filteredWords);

// Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
const numbers1: number[] = [1,2,3,4,5,6,7,8];
const reducedNumbers: number = numbers1.reduce((accumulator: number, currentValue: number) => accumulator + currentValue);
console.log(reducedNumbers);

// Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
const numbers2: number[] = [1,2,3,4,5,6,7,8,20];
const checkedNumbers: boolean = numbers2.some((number: number) => number > 10);
console.log(checkedNumbers)


// BONUS

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

// Sort these numbers in descending order.
const sortedList: number[] = list.sort((a: number, b: number) => (a > b ? -1 : 0));
console.log(sortedList);
// Square these numbers.

const squaredList: number[] = sortedList.map((number: number) => Math.pow(number, 2));
console.log(squaredList);

// Remove the lowest two numbers and the highest 4 numbers from the list.
squaredList.splice(0, 4);
console.log(squaredList);
const unsortedList: number[] = squaredList.sort((a: number, b: number) => (a > b ? 0 : -1));
console.log(unsortedList);
unsortedList.splice(0, 2);
console.log(unsortedList);

// Remove all numbers that are divisible by 4.
const undivisibleNumbersList: number[] = unsortedList.filter((number: number) => number % 4 == 0);
console.log(undivisibleNumbersList);

// Add up all the numbers.
let sum = 0;
const sumAllNumbers = undivisibleNumbersList.forEach((num: number) => sum += num);
console.log(sum);

// What is the result?
// 72412