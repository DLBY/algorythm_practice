const checkSum2 = (array, num) => {
  let numbers = [...array];
  
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i]
    let searchingValue = num - currentNum
    if (numbers.filter(num => numbers.indexOf(num) !== i).includes(searchingValue)) return true;  
    // on filtre pour exclure le chiffre utilisé (ex:ne pas prendre 2x 10) et indexOf pour que ça fonctionne lorsqu'on modifie l'array
  };
  return false;
};

console.log(checkSum2([10, 15, 3, 7], 17));
console.log(checkSum2([1, 8, 10, 21], 21));