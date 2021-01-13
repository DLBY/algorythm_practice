const getSun2 = (array) => {

  let buildings = [...array];
  let count = 1;
  let j = buildings[buildings.length - 1]

  for (let i = buildings.length - 2; i >= 0; i--) {
    if (buildings[i] < j) {
        count;
    } else {
        j = buildings[i];
        count++
    }
  };
  console.log(count);
  return count
};

getSun2([3, 7, 8, 3, 6, 1]);
getSun2([1, 4, 5, 8]);