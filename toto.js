const fs = require('fs');

const fileName = process.argv[2];

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    console.log(data);

    const dataCopy = [...data.split(" ").map(num => parseInt(num, 10))];

    //bubble sort
    const bubble_sort = (dataCopy) => {
      let numbers = [...dataCopy];
      let comparaisonsCounter = 0
      for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length-i; j++) {
          if (numbers[j + 1] < numbers[j]) {
            [numbers[j + 1], numbers[j]] = [numbers[j], numbers[j + 1]];
          } comparaisonsCounter++; 
        }
      }
      return `Tri à bulle/Bubble Sort: ${comparaisonsCounter} comparaisons ${numbers}`
   }
// console.log(bubble_sort(dataCopy));

  //  insertion_sort
   const insertion_sort = (dataCopy) => {
     let numbers = [...dataCopy];
     let count = 0;
    let length = numbers.length;
    for (let i = 1; i < length; i++ ) {
      let key = numbers[i];
      let j = i - 1
      while (j >= 0 && numbers[j] > key) {
        count++
        numbers[j+1] = numbers[j]
        j = j - 1 ;
      }
      numbers[j+1] = key
    }
    return `Tri à insertion : ${count} comparaisons - ${numbers}`
};
// console.log(insertion_sort(dataCopy));

//selection sort
  const selection_sort = (dataCopy) => {
    let numbers = [...dataCopy];
    let count = 0;
    let length = numbers.length;
    for (let i = 0 ; i < length; i++) {
      min = i ;
      for (let j = i + 1 ; j < length ; j ++ ) {
        count++;
        if (numbers[j] < numbers[min]) {
          min = j;
        }
      }
      if (min !== i) {
        let tmp = numbers[i];
        numbers[i] = numbers[min];
        numbers[min] = tmp;
      }
    }
    return `Tri à sélection : ${count} comparaisons ${numbers}`
  }
  // console.log(selection_sort(dataCopy));


    //quick sort
    const partition = (numbers, start, end) => {
      let count = 0;
      const pivotValue = numbers[end];
      let pivotIndex = start;
      for (let i = start; i < end; i++) {
        count++;
        if (numbers[i] < pivotValue) { // we swap elements
          [numbers[i], numbers[pivotIndex]] = [numbers[pivotIndex], numbers[i]];
          pivotIndex++;
           // we move to next element
        };
      }
      // Putting the pivot value in the middle
      [numbers[pivotIndex], numbers[end]] = [numbers[end], numbers[pivotIndex]] 
      console.log(`Tri rapide : ${count} comparaisons ${numbers.join(" ")}`);
      return pivotIndex;
    };

    const quick_sort = (numbers, start ,end) => {
      
      // Base case or terminating case
      if (start >= end) {
        return;
      }
    
    // Returns pivotIndex
    let index = partition(numbers, start, end);
    
    // Recursively apply the same logic to the left and right subnumbersays
    
    quick_sort(numbers, start, index - 1);
    quick_sort(numbers, index + 1, end);
    
    
    };

    // let numbers = [...dataCopy];
    // quick_sort(numbers, 0, numbers.length - 1)
    
    //merge_sort
    function merge_sort(left, right, dataCopy) {
      let numbers = [...dataCopy];
      let arr = [];
      // Break out of loop if any one of the array gets empty
      while (left.length && right.length) {
          // Pick the smaller among the smallest element of left and right sub arrays 
          if (left[0] < right[0]) {
              arr.push(left.shift())  
          } else {
              arr.push(right.shift()) 
          }
      }
      
      // Concatenating the leftover elements
      // (in case we didn't go through the entire left or right array)
      return [ ...arr, ...left, ...right ]
  }

  });


// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
} catch (error) {
    console.error(error.message);
}
