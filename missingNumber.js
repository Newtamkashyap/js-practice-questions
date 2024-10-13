

//Given an array arr[] of size N-1 with integers in the range of [1, N], 
//the task is to find the missing number from the first N integers.
function missingNumber(n, arr) {
    let sum = 0;

    for (let i = 0; i < n - 1; i++) {
        sum += arr[i];
    }

    const expectedSum = (n * (n + 1)) / 2;

    return expectedSum - sum;
}

const arr = [1, 2,3,5];
const n = 5;
console.log(missingNumber(n, arr));
