let str1 = "Hello, World!";
let str2 = 'JavaScript Strings';

// Using template literals (backticks)
let str3 = `Welcome to ${str2},${str1}`; 
//print
console.log(str3);
console.log(str1.charAt(1));    

//convert lower case and uppercase 
let str4 = "hello";
console.log(str4.toUpperCase()); 
let str5 = "WORLD";
console.log(str5.toLowerCase()); 

//substring
let str6 = "Welcome to JS!";
console.log(str6.substring(5, 7));  


//reverse string
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

