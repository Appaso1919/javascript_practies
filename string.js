let str1 = "Hello, World!";

let str2 = 'JavaScript Strings';

// Using template literals (backticks)
let str3 = `Welcome to ${str2},${str1}`; 
//print
console.log(str3);
console.log(str1.charAt(1));     //output H

let str = "Health first priority";

for(let i=str.length-1; i>=+0; i--){
    str=str+str.charAt(i);
}
console.log(str);

//lenght of words
function stringLength() {
    const str = "appaso avaghadi";

    console.log("String Length: " + str.length);
}
stringLength();

