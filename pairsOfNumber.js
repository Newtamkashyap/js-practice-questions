// Function to count all pairs whose sum
// is equal to the given target value


function twoSum(arr, target) {
    let n = arr.length;
    let count = 0;
    
    for (let i = 0; i < n; i++) {
    
        for (let j = i + 1; j < n; j++) {
        
            if (arr[i] + arr[j] === target) {
                count++;
            }
        }
    }
    return count;
}

let arr = [1, 5, 7, -1, 5];
let target = 6;

console.log(twoSum(arr, target));
