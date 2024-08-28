// Palindrome Checker:
// Write a function that checks if a given string is a palindrome (a word, phrase, or sequence that reads the same backward as forward, e.g., "madam" or "racecar"). Ignore spaces, punctuation, and case sensitivity.
function palindromeChecker(str) {
  let teststr = str.replaceAll(" ", ""); //remove spaces to ignore spaces
  teststr = teststr.replaceAll(",", ""); //remove , to ingore punctuations
  teststr = teststr.toLowerCase(); //turn all to lower case to ignore case
  for (let i = 0; i < teststr.length / 2; i++) {
    if (teststr[i] !== teststr[teststr.length - 1 - i]) return false;
  }
  return true;
}

// Number Guessing Game:
// Write a program that generates a random number between 1 and 100. The user has to guess the number. For each guess, the program should indicate whether the guess is too high, too low, or correct. Use a loop to allow the user multiple attempts until they guess correctly. Track the number of attempts and display it at the end.
function guessingGame(number) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let numb = number;
  let guesses = 1;
  while (numb != randomNumber) {
    if (numb > randomNumber) console.log("Too high");
    else console.log("Too low");
    numb = prompt("Enter a number");
    guesses++;
  }
  console.log("you guessed it right in " + guesses + " attempts");
  return;
}
// Create a function that checks if a given password is strong enough. A strong password is defined as one that has at least 8 characters, contains both uppercase and lowercase letters, has at least one number, and includes a special character (e.g., !, @, #, $, etc.). Use loops and if-else statements to check each condition.
function isStrongPassword(password) {
  if (password.length < 8) return false;
  if (password.search(/[!@#$%^&*()-+`~{}\\';.,><]/) == -1) return false;
  if (password.search(/[0-9]/) == -1) return false;
  if (password.search(/[a-z]/) == -1 || password.search(/[A-Z]/) == -1)
    return false;
  return true;
}

// Write a function that prints the Collatz sequence for a given number. The sequence is generated as follows: Start with any positive integer n. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The sequence ends when it reaches 1.
function collatzSequence(number) {
  let array = [];
  let j = 0;
  for (let i = number; i != 1; j++) {
    array[j] = i;
    if (i % 2 == 0) i /= 2;
    else i = 3 * i + 1;
  }
  array[j] = 1;
  return array;
}

// Fibonacci Sequence:Ï
// Write a function that generates the first `n` numbers in the Fibonacci sequence. The Fibonacci sequence is characterized by the fact that every number after the first two is the sum of the two preceding ones.
function fibonacciSequence(n) {
  if (n == 0) return [];
  if (n == 1) return [0];
  let array = [0, 1];
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
}
console.log(fibonacciSequence(10));
// Prime Number Checker:
// Write a function that checks if a given number is a prime number. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) 
    if (number % i == 0) return false;
  return true;
}

// Reverse a String:
// Write a function that takes a string as input and returns the string reversed. Do not use the built-in reverse method.
function reverseString(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) string += str[i];
  return string;
}

// Sum of Digits:
// Write a function that takes a positive integer as input and returns the sum of its digits. Use a loop to iterate through each digit.
function sumOfDigits(number) {
  let sum = 0;
  for (let i = number; i > 0; i = Math.floor(i / 10)) sum += i % 10;
  return sum;
}

// Find the Second Largest Number:
// Write a function that takes an array of numbers and returns the second largest number. Use a loop and conditionals to find the result.
function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest)
      secondLargest = arr[i];
  }
  return secondLargest;
}

// Count Occurrences of a Character:
// Write a function that counts the number of times a specific character appears in a given string. Use a loop to iterate through the string and a conditional to count the occurrences.
function countOccurrences(str, char) {
  let numberoftimes = 0;
  for (let i = 0; i < str.length; i++) {
    if (char == str[i]) numberoftimes++;
  }
  return numberoftimes;
}

// Multiplication Table:
// Write a function that prints the multiplication table for numbers 1 through 10. Use nested loops to generate the table.
function multiplicationTable() {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      table += i * j + "\t";
    }
    table += "\n";
  }
  console.log(table);
  return table;
}

// Factorial of a Number (Recursive):
// Write a recursive function that calculates the factorial of a given number `n`.
function factorialRecursive(n) {
  if (n == 0) return 1;
  return n * factorialRecursive(n - 1);
}

// GCD (Greatest Common Divisor):
// Write a function that calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

// Armstrong Number Checker:
// Write a function that checks if a given number is an Armstrong number. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
function isArmstrongNumber(number) {
  let sum = 0;
  let temp = number+'';
  let i=temp.length; 
//  while (temp > 0) {
//    i++;
//    temp = Math.floor(temp / 10);
//  }
  temp = number;
  while (temp > 0) {
    sum += (temp % 10) ** i;
    temp = Math.floor(temp / 10);
  }
  return sum == number;
}

// This function tests the code, dont touch or change it, under any circumstances!!!
(function () {
  // Palindrome Checker:
  try {
    console.assert(
      palindromeChecker("A man, a plan, a canal, Panama") === true,
      "Palindrome Checker failed for 'A man, a plan, a canal, Panama'",
    );
    console.assert(
      palindromeChecker("Hello World") === false,
      "Palindrome Checker failed for 'Hello World'",
    );
    console.assert(
      palindromeChecker("") === true,
      "Palindrome Checker failed for ''",
    );
    console.assert(
      palindromeChecker("Able was I ere I saw Elba") === true,
      "Palindrome Checker failed for 'Able was I ere I saw Elba'",
    );
  } catch (error) {
    console.error(error.message);
  }

  // Number Guessing Game:
  // Note: This needs user input, so it's not feasible to automate tests for this.
  // Commenting out the test as it requires user interaction.

  // Strong Password Checker:
  try {
    console.assert(
      isStrongPassword("P@ssw0rd123") === true,
      "Strong Password Checker failed for 'P@ssw0rd123'",
    );
    console.assert(
      isStrongPassword("password") === false,
      "Strong Password Checker failed for 'password'",
    );
    console.assert(
      isStrongPassword("P@ssw0rd") === true,
      "Strong Password Checker failed for 'P@ssw0rd'",
    );
    console.assert(
      isStrongPassword("12345678") === false,
      "Strong Password Checker failed for '12345678'",
    );
    console.assert(
      isStrongPassword("P@ssw0rd!") === true,
      "Strong Password Checker failed for 'P@ssw0rd!'",
    );
  } catch (error) {
    console.error(error.message);
  }

  // Collatz Sequence:
  try {
    console.assert(
      JSON.stringify(collatzSequence(12)) ===
        JSON.stringify([12, 6, 3, 10, 5, 16, 8, 4, 2, 1]),
      "Collatz Sequence failed for 12",
    );
    console.assert(
      JSON.stringify(collatzSequence(1)) === JSON.stringify([1]),
      "Collatz Sequence failed for 1",
    );
    console.assert(
      JSON.stringify(collatzSequence(7)) ===
        JSON.stringify([
          7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1,
        ]),
      "Collatz Sequence failed for 7",
    );
  } catch (error) {
    console.error(error.message);
  }

  // Fibonacci Sequence:
  try {
    console.assert(
      JSON.stringify(fibonacciSequence(10)) ===
        JSON.stringify([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]),
      "Fibonacci Sequence failed for 10",
    );
    console.assert(
      JSON.stringify(fibonacciSequence(0)) === JSON.stringify([]),
      "Fibonacci Sequence failed for 0",
    );
    console.assert(
      JSON.stringify(fibonacciSequence(1)) === JSON.stringify([0]),
      "Fibonacci Sequence failed for 1",
    );
  } catch (error) {
    console.error(error.message);
  }

  // Prime Number Checker:
  try {
    console.assert(isPrime(29) === true, "Prime Number Checker failed for 29");
    console.assert(isPrime(10) === false, "Prime Number Checker failed for 10");
    console.assert(isPrime(1) === false, "Prime Number Checker failed for 1");
    console.assert(isPrime(2) === true, "Prime Number Checker failed for 2");
  } catch (error) {
    console.error(error.message);
  }

  // Reverse a String:
  try {
    console.assert(
      reverseString("JavaScript") === "tpircSavaJ",
      "Reverse a String failed for 'JavaScript'",
    );
    console.assert(
      reverseString("Hello") === "olleH",
      "Reverse a String failed for 'Hello'",
    );
    console.assert(reverseString("") === "", "Reverse a String failed for ''");
  } catch (error) {
    console.error(error.message);
  }

  // Sum of Digits:
  try {
    console.assert(sumOfDigits(12345) === 15, "Sum of Digits failed for 12345");
    console.assert(sumOfDigits(0) === 0, "Sum of Digits failed for 0");
    console.assert(sumOfDigits(987) === 24, "Sum of Digits failed for 987");
  } catch (error) {
    console.error(error.message);
  }

  // Find the Second Largest Number:
  try {
    console.assert(
      secondLargest([3, 6, 2, 56, 32, 5, 89, 32]) === 56,
      "Find the Second Largest Number failed for [3, 6, 2, 56, 32, 5, 89, 32]",
    );
    console.assert(
      secondLargest([1, 2, 3]) === 2,
      "Find the Second Largest Number failed for [1, 2, 3]",
    );
    console.assert(
      secondLargest([7]) === -Infinity,
      "Find the Second Largest Number failed for [7]",
    );
  } catch (error) {
    console.error(error.message);
  }

  // Count Occurrences of a Character:
  try {
    console.assert(
      countOccurrences("hello world", "o") === 2,
      "Count Occurrences of a Character failed for 'hello world', 'o'",
    );
    console.assert(
      countOccurrences("test", "t") === 2,
      "Count Occurrences of a Character failed for 'test', 't'",
    );
    console.assert(
      countOccurrences("", "a") === 0,
      "Count Occurrences of a Character failed for '', 'a'",
    );
  } catch (error) {
    console.error(error.message);
  }

  // Multiplication Table:
  try {
    let expectedOutput = `1   2   3   4   5   6   7   8   9   10
2   4   6   8   10  12  14  16  18  20
3   6   9   12  15  18  21  24  27  30
4   8   12  16  20  24  28  32  36  40
5   10  15  20  25  30  35  40  45  50
6   12  18  24  30  36  42  48  54  60
7   14  21  28  35  42  49  56  63  70
8   16  24  32  40  48  56  64  72  80
9   18  27  36  45  54  63  72  81  90
10  20  30  40  50  60  70  80  90  100
`;
    console.log(expectedOutput);
    console.assert(
      multiplicationTable() == expectedOutput,
      "Multiplication Table output is incorrect",
    );
  } catch (error) {
    console.error(error.message);
  }

  // Factorial of a Number (Recursive):
  try {
    console.assert(
      factorialRecursive(5) === 120,
      "Factorial Recursive failed for 5",
    );
    console.assert(
      factorialRecursive(0) === 1,
      "Factorial Recursive failed for 0",
    );
    console.assert(
      factorialRecursive(1) === 1,
      "Factorial Recursive failed for 1",
    );
  } catch (error) {
    console.error(error.message);
  }

  // GCD (Greatest Common Divisor):
  try {
    console.assert(gcd(48, 18) === 6, "GCD failed for 48, 18");
    console.assert(gcd(101, 10) === 1, "GCD failed for 101, 10");
    console.assert(gcd(54, 24) === 6, "GCD failed for 54, 24");
  } catch (error) {
    console.error(error.message);
  }

  // Armstrong Number Checker:
  try {
    console.assert(
      isArmstrongNumber(153) === true,
      "Armstrong Number Checker failed for 153",
    );
    console.assert(
      isArmstrongNumber(123) === false,
      "Armstrong Number Checker failed for 123",
    );
    console.assert(
      isArmstrongNumber(9474) === true,
      "Armstrong Number Checker failed for 9474",
    );
  } catch (error) {
    console.error(error.message);
  }
})();
