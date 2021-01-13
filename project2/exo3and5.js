const checkSum2 = (array, num) => {
  let numbers = [...array];
  for (let i = 0; i < numbers.length; i++) {
    let searchingValue = num - numbers[i]
    if (numbers.includes(searchingValue)) return true;
    return false;
  };
  console.log(numbers);
};

console.log(checkSum2([10, 15, 3, 7], 17));
console.log(checkSum2([1, 8, 10, 21], 21));