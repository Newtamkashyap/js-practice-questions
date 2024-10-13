function rotate(arr, n){
    var i = 0
    var j = n-1
    while(i != j){
        let temp;
 
        temp = arr[i];
        arr[i] = arr[j];
        arr[j]= temp;
        i =i+1
    }
}
 
var arr = [1, 2, 3, 4, 5];
var n = arr.length;
 
document.write("Given array is <br>");
for(var i = 0; i< n; i++)
    document.write(arr[i] + " ");
     
rotate(arr, n);
 
document.write("<br>Rotated array is <br>");
for(var i = 0; i < n; i++)
    document.write(arr[i] + " ")