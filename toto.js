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

      bubbleSort(dataCopy);
      insertionSort(dataCopy);
      selectionSort(dataCopy);
      quickSort(dataCopy, 0, dataCopy.length - 1);
  });


// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
} catch (error) {
    console.error(error.message);
}

    //bubble sort
    const bubbleSort = (dataCopy) => {
      let numbers = [...dataCopy];
      let count = 0
      for (let i = numbers.length - 1; i > 0; i--) {
          for (let j = 0; j < i; j++) {
              count++
              if (numbers[j + 1] < numbers[j]) {
                  [numbers[j + 1], numbers[j]] = [numbers[j], numbers[j + 1]];
              };
          }
      }
      console.log(`Tri à bulle: ${count} comparaisons => ${numbers}`);
   }
// console.log(bubble_sort(dataCopy));

  //  insertion_sort
   const insertionSort = (dataCopy) => {
     let numbers = [...dataCopy];
     let count = 0;
    let length = numbers.length;
    for (let i = 1; i < length; i++ ) {
      let key = numbers[i];
      let j = i - 1
      while (j >= 0 && numbers[j] > key) {
        numbers[j+1] = numbers[j]
        j = j - 1 ;
        count++;
      }
      numbers[j+1] = key
    }
    console.log(`Tri à insertion : ${count} comparaisons - ${numbers}`);
};
// console.log(insertion_sort(dataCopy));

//selection sort
  const selectionSort = (dataCopy) => {
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
    console.log(`Tri à sélection : ${count} comparaisons ${numbers}`);
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
      };
      // Putting the pivot value in the middle
      [numbers[pivotIndex], numbers[end]] = [numbers[end], numbers[pivotIndex]] 
      console.log(`Tri rapide : ${count} comparaisons ${numbers.join(" ")}`);
      return pivotIndex;
    };

    const quickSort = (numbers, start ,end) => {
      
      // Base case or terminating case
      if (start >= end) {
        return;
      };
    
    // Returns pivotIndex
    let index = partition(numbers, start, end);
    
    // Recursively apply the same logic to the left and right subnumbersays
    
    quickSort(numbers, start, index - 1);
    quickSort(numbers, index + 1, end);
    
    
    };

    // let numbers = [...dataCopy];
    // quick_sort(numbers, 0, numbers.length - 1)