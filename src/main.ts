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