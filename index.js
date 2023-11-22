const a = [1, 2, 0, 4];
const b = [1, 2, 1, 0, 4];
const c = [1000];

const sortArray = (arr, num) => {
  let index = num;

  if (arr[index]) {
    index = index + arr[index];

    if (index === arr.length - 1) {
      return true;
    }
  } else {
    return false;
  }

  return sortArray(arr, index);
};

console.log(sortArray(a, 0));
console.log(sortArray(b, 0));
console.log(sortArray(c, 0));
