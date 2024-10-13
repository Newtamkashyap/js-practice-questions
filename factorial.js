// JavaScript program to find large
// factorials using BigInteger

// Returns Factorial of N

function factorial(N)
{

let f =  BigInt(1); 

for (var i = 2; i <= N; i++)
    f *= BigInt(i);

return f;
}


console.log(factorial(3));

    
