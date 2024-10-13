// JavaScript Program to reverse an array using temporary array


function reverseArray(arr) {
    let n = arr.length;
    
    
    let temp = new Array(n);
  
    
    for (let i = 0; i < n; i++)
        temp[i] = arr[n - i - 1];
  
    
    for (let i = 0; i < n; i++)
        arr[i] = temp[i];
}

const arr = [1, 4, 3, 2, 6, 5];

reverseArray(arr);

console.log(arr.join(" "));