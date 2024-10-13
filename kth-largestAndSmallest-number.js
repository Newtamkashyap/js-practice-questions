// Simple Javascript program to find K'th smallest element
// Function to return K'th smallest element in a given array


function kthSmallest(arr, N, K)
{
    arr.sort((a,b) => a-b);

    return arr[K - 1];
}

    let arr = [12, 3, 5, 7, 19];
    let N = arr.length, K = 1;
    console.log("K'th smallest element is " + kthSmallest(arr, N, K));
