//Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));

//Arrow without parameter
const fun = () => {
    console.log( "Arrow without parameter");
}
fun();

//Arrow Function with Single Parameters
const square= (x) => x*x;
console.log(square(6));

//Arrow Function with Multiple Parameters
const addition = (x,y,z) => {
      console.log(x+y+z);
}
addition(40,50,60);

//Arrow Function with Default Parameters
const fun1 = (x,y,z=30)=>{
    console.log(x," ",y," ",z," ");
}
fun1(10,20);

//Return Object Literals
const  person = (firstname, lastname) => (
    {First : firstname,Last: lastname});
console.log(person("Appaso","Avaghadi"));



