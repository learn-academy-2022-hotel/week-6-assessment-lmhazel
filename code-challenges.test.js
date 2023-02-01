// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
//Pseudo Code:
//Input: an array of objects 
//Output: an array with a sentence about each person with their name capitalized
//Function: A function called sentenceMaker which first takes the value at the key "name" and uses the split method to split the strings at the spaces, this will be assigned to the variable splitName. For the first and last name I will use the charAt method to find the character at the 0th index and the toUpperCase method to capitalize the letter at the 0th index.This will be assigned as a new variable called "firstName" and "lastName". Then, using string interpolation, the function will return a sentence with firstName, lastNAme and the "occupation" key. 

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("sentenceMaker", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(sentenceMaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

const sentenceMaker = (array) => {
  return array.map((object) => {
    let splitName = object.name.split(" ")


    let firstName = splitName.charAt(0).toUpperCase() + value.slice(1)

    let lastName = splitName.charAt(1).toUpperCase() + value.slice(1)


    const sentence = `${firstName} ${lastName} is ${object.occupation}.`
    return sentence
  })
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//Pseudo Code: 
//Input: an array with mixed data types
//Output: an array of only the remainders of the numbers when divided by 3
//Function: The function called remainderArray removes the variables that are not a number from the array. Then uses this new array to divide by 3 and return the remainder. 

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainderArray", () => {
  it("returns a number thats the sum of all the numbers cubed", () => {
    expect(remainderArray(hodgepodge1)).toEqual([23, "Heyyyy!", 45, -10, 0, "Yo", false])
    expect(remainderArray(hodgepodge2)).toEqual([5, "Hola", 43, -34, "greetings", true])
  })
})

// b) Create the function that makes the test pass.

const remainderArray = (array) => {
  const numOnly = array.filter((value) => typeof(value) === 'number')
   
  return numOnly.map((value) => value % 3)
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//Pseudo Code:
//Input: an array of numbers
//Output: sum of all the numbers cubed
//Function: A function called finalNum takes the variables from the array individually and cubes them all and assigns this new array as cubedNum. Then retuns those numbers added together using a for loop. However, my forloop only performs one time and I don't understand why.  

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("finalNum", () => {
  it("returns a number thats the sum of all the numbers cubed", () => {
    expect(finalNum(cubeAndSum1)).toEqual(99)
    expect(finalNum(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

const finalNum = (array) => {
  const cubedNum = array.map((value) => value ** 3)
   for (let i = 0; i < cubedNum.length; i ++){
      return (cubedNum[i] + cubedNum[i + 1])
  }
}

