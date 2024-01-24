function getArrayParams(...arr) {
  let min, max, sum;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
      min = Math.min(min, arr[i])
      max = Math.max(max, arr[i])
      sum += arr[i];
  }
  avg = (sum / arr.length).toFixed(2);
  avg = Number(avg);

  return {
      min: min,
      max: max,
      avg: avg
  };
}


function summElementsWorker(...arr) {
  let sum = 0;
  const initialValue = 0;
  sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
  );
  return sum;
}

function differenceMaxMinWorker(...arr) {

  let min, max, dif = 0;
  min = Infinity;
  max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
      min = Math.min(min, arr[i])
      max = Math.max(max, arr[i])
      dif = max - min;
  }
  return dif;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
          sumEvenElement += arr[i];
      } else if (arr[i] % 2 !== 0) {
          sumOddElement += arr[i];
      }
  }
  diff = sumEvenElement - sumOddElement;
  return diff;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average = 0;
  if (arr != 0) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 == 0) {
              sumEvenElement += arr[i];
              countEvenElement++;
          }
      }
      average = sumEvenElement / countEvenElement;

  } else average = 0;
  return average;
}

function makeWork(arrOfArr, func) {
  maxWorkerResult = -Infinity;
  //const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
  let newArrOfArr = [...arrOfArr];
  for (let i = 0; i < newArrOfArr.length; i++) {
      const max = summElementsWorker(newArrOfArr);

  }
  if (max > maxWorkerResult) {
      maxWorkerResult = max;
  }
  return maxWorkerResult;
}