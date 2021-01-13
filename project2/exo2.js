const getSun = (array) => {
  let buildings = [...array];
  let count = 1;
  for (let i = 0; i < buildings.length - 2; i++) {
    let hasView = true
    for (let j = i + 1; j < buildings.length - i; j++) {
      if (buildings[i] <= buildings[j]) hasView = false;
    }
    hasView ? count++ : null
  }
  console.log(count);
};

getSun([3, 7, 8, 3, 6, 1]);