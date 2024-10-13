// JavaScript Code for the same approach,arrange positive nad negative number

//or

// A JavaScript program to put all negative numbers before positive numbers

function move(arr){
    arr.sort();
}

  
let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
move(arr);
for (let e of arr)
    console.log(e , " ");
  
