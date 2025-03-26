//largest and smallest number in an Array
let arr = [23, 45, 67, 89, 12, 34];
let largest = arr[0];
let smallest= arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    if(arr[i]<smallest){
        smallest = arr[i];
    }
}
console.log("Largest number is:", largest);
console.log("Smallest number is: ",smallest)

//sum of all Elements in an Array
let array = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("Sum of elements:", sum);


