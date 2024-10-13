// JavaScript code to find the minimum and maximum elements in an array

function setMini(A) {
    let mini = Infinity;
    for (let i = 0; i < A.length; i++) {
        if (A[i] < mini) {
            mini = A[i];
        }
    }
    return mini;
}

function setMaxi(A) {
    let maxi = -Infinity;

    for (let i = 0; i < A.length; i++) {
        if (A[i] > maxi) {
            maxi = A[i];
        }
    }
    return maxi;
}

function main() {
    const A = [4, 9, 6, 5, 2, 3];
    console.log("Minimum element is: " + setMini(A));
    console.log("Maximum element is: " + setMaxi(A));
}

main()