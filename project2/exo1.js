//Exo 1
const checkSum = (array, num) => {
  let numbers = [...array];

  for (let i =  0; i < numbers.length ; i++) {
    for (let j = i + 1 ; j < numbers.length ; j++) {
      if (numbers[i] + numbers [j] === num) return true
    };
    return false
  };
};

console.log(checkSum([10, 15, 3, 7], 17));
console.log(checkSum([1, 8, 10, 21], 21));