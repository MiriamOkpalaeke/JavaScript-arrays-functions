// question (1a), What are the differences between mutating array methods and non-mutation array methods in JavaScript.
/* Mutating array method  is basically changing the array itself instead of returning a new array with the new changes.
** Non-Mutating array method is returning a whole new array which has all the changes.

*/
//List 5 array methods that fall under each of them.
/* Mutating we have;  array.push(), array.shift(), array.sort(), array.splice() and array.unshift().
 ** Non-mutating we have; array.concat(), array.includes(), array.indexOf, , array.slice(), array.toString()
 */

// Question 2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’].
let programmingLanguage =  ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add ‘Kotlin’ to the end of the array
programmingLanguage.push('Kotlin');
console.log(programmingLanguage)

//Add ‘Java’ after ‘Ruby’
programmingLanguage.splice(3,0,"Java");
console.log(programmingLanguage);
 
// Remove the first item in the array
programmingLanguage.shift('C#')
console.log(programmingLanguage);

// Add ’Scala’ and ‘Swift’ to the beginning of the array
programmingLanguage.unshift('Scala', 'Swift');
console.log(programmingLanguage);

//Replace ‘PHP’ with ‘Go’ and ‘Rust’
programmingLanguage.splice(5,1,'Go', 'Rust');
console.log(programmingLanguage);