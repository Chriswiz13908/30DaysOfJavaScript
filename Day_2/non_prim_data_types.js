let nums = [1, 2, 3]  // an array is a list of data values in a square bracket
nums[0] = 10  // changes the 1 in the 0 index to a 10
console.log(nums)

//Arrays, which are non-primitive, is mutable. Non-primitives cannot be compared by value. Even if two non-primitives have the same properties and values, they are not strictly equal.

//let numbers = [1, 2, 3]
//console.log(nums == numbers)   // compares the non-primitives and the primitive

let userOne = {
    name: 'Christopher',
    role: 'chef',
    country: 'USA'
  }
  let userTwo = {
    name: 'Christopher',
    role: 'chef',
    country: 'USA'
  }
  console.log(userOne == userTwo)  // Can't compare arrays casue they are non-prim

  let numbers = nums
  console.log(nums == numbers)
