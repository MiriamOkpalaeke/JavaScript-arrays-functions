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

//question 3. What will be the value of fruit after calling the function changeFruit?
     let fruit = ['apple', 'mango', 'banana'];
     function changeFruit( fruit ) {
     fruit[2] = "orange";
     return fruit;
     }
     console.log(changeFruit( fruit ));

     //the value would be [ 'apple', 'mango', 'orange' ]

// question 4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
       
        function maxNumber(arrayOfNumbers) {
          let max = arrayOfNumbers[0]
          for (let index = 0; index < arrayOfNumbers.length; index++) {
            if (arrayOfNumbers[index] > max)
            max = arrayOfNumbers [index];
            
          }
          return max;
        }
        let arrayOfNumbers = [4, 5, 10, -2];
        console.log(maxNumber(arrayOfNumbers));

// question 5. 
      function valTimesIndex (numbersMultipliedByIndex) {
     return numbersMultipliedByIndex.map((enteredValue,index) => enteredValue * index);
   } 
   let arraysValue = [5,10,15] ;
   let multipliedValue = valTimesIndex(arraysValue);

   console.log(multipliedValue);
        