/* * * INSTRUCTIONS

Before you can run this file, you'll need to have 
Node.js installed on your computer. 

From the project directory, type `node doWhileLoops`.

If your program is stuck in an infinite loop, and need to break out of the program,
you can do that by typing ctrl + C.

* * */

let i;
let text;

// 1. Write a while loop to build a string of numbers from 0 to 4, 
//    separated by spaces, and store the string in the variable `text`.
print('1st Loop:');
text = '';

// Write 1st loop here:
i = 0;
do {
  text += `${i} `;
  i++;
} while (i < 5);

print(text); // Should print `0 1 2 3 4 `.

// 2. Write a while loop to build a string of numbers from 1 to 5, 
//    separated by spaces, and store the string in the variable `text`.
print('2nd Loop:');
text2 = '';

// Write 2nd loop here:
i = 1;
do {
  text2 += `${i} `;
  i++;
} while (i < 6);

print(text2); // Should print `1 2 3 4 5 `.

// 3. Write a while loop to build a string of numbers from 5 to 1, 
//    separated by spaces, and store the string in the variable `text`.
print('3rd Loop:');
text3 = '';

// Write 3rd loop here:
i = 5;
do {
  text3 += `${i} `;
  i--;
} while (i > 0);

print(text3); // Should print `5 4 3 2 1 `.

// 4. Write a while loop to build a string of numbers from 5 to 50--by 5's.
//    The numbers should be separated by spaces, and stored in the variable `text`.
print('4th Loop:');
text4 = '';

// Write 4th loop here:
i = 5;
do {
  text4 += `${i} `;
  i += 5;
} while (i < 55);

print(text4); // Should print `5 10 15 20 25 30 35 40 45 50 `.

// 5. BONUS CHALLENGE: Write a while loop that builds a string of random integers
// between 0 and 9. Stop building the string when the number 8 comes up.
// Be sure that 8 does print as the last character. The resulting string 
// will be a random length.
print('5th Loop:');
text5 = '';

// Write 5th loop here:
do {
  i = Math.floor(Math.random() * 10);
  text5 += `${i} `;
} while (i !== 8);

print(text5); // Should print something like `4 7 2 9 8 `, or `9 0 8 ` or `8 `.


// Feel free to ignore this print function. It just formats the output a bit.
function print(text) {
  console.log(text);
  if (!text.endsWith(':')) {
    console.log('');
  }
}