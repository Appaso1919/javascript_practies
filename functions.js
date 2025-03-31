//showmessage
function showMessage() {
    let message = "Hello!";
    console.log(message);
}
showMessage(); 

//factorial using function
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

console.log("Factorial of 5 is:", factorial(5));

//Anonymous Function
const divide = function (a, b) {
    return a / b;
};
 console.log("Divideing :",divide(10, 2)); 

//multiplication function
 function multiply(a, b) {
    return a * b;
}
console.log("Multiplication:",multiply(3, 4)); 


