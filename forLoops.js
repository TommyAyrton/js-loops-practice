/* * * INSTRUCTIONS

Before you can run this file, you'll need to have 
Node.js installed on your computer. 

From the project directory, type `node forLoops`.

If your program is stuck in an infinite loop, and need to break out of the program,
you can do that by typing ctrl + C.

* * */

let text;

// 1. Write a for loop to build a string of numbers from 0 to 4, 
//    separated by spaces, and store the string in the variable `text`.
print('1st Loop:');
text = '';

// Write 1st loop here:
for(let i = 0; i <= 4; i += 1) {
  text += i + ' ';
}

print(text); // Should print `0 1 2 3 4 `.

// 2. Write a for loop to build a string of numbers from 1 to 5, 
//    separated by spaces, and store the string in the variable `text`.
print('2nd Loop:');
text2 = '';

// Write 2nd loop here:
for (let i = 1; i < 6; i++) {
  text2 += `${i} `;
  
}
print(text2); // Should print `1 2 3 4 5 `.

// 3. Write a for loop to build a string of numbers from 5 to 1, 
//    separated by spaces, and store the string in the variable `text`.
print('3rd Loop:');
text3 = '';

// Write 3rd loop here:
for (let i = 5; i < 6 ; i--) {
   text3 += `${i} `;
   if (i == 1) {
     break
   }
}

print(text3); // Should print `5 4 3 2 1 `.

// 4. Write a for loop to build a string of numbers from 5 to 50--by 5's.
//    The numbers should be separated by spaces, and stored in the variable `text`.
print('4th Loop:');
text4 = '';

// Write 4th loop here:
for (let i = 5; i < 55; i += 5) {
  text4 += `${i} `;
  
}

print(text4); // Should print `5 10 15 20 25 30 35 40 45 50 `.

// 5. Write a for loop to build a string of numbers from 50 to 5--by 5's.
//    The numbers should be separated by spaces, and stored in the variable `text`.
print('5th Loop:');
text5 = '';

// Write 5th loop here:
for (let i = 50; i < 55; i -= 5) {
  text5 += `${i} `;
  if (i == 5) {
    break;
  }
}

print(text5); // Should print `50 45 40 35 30 25 20 15 10 5 `.


// Feel free to ignore this print function. It just formats the output a bit.
function print(text) {
  console.log(text);
  if (!text.endsWith(':')) {
    console.log('');
  }
}