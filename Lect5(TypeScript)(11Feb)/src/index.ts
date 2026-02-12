type numStrBool = number | string | boolean;
function firstValue (arg:numStrBool[]){
    return arg[0];
}

let res1 = firstValue([1,2,3]);
let res2 = firstValue(['a','b','c']);
let res3 = firstValue([true, false, true]);
let res4 = firstValue([1, 'a', true]);

res2 =="a"; 
res1?.toString();
res2.toUpperCase();


//union and interface, information about type lost --> uniion does not preserve type information

function firstValueGenericT>(arg:T[]){
    return arg[0];  
}

let out1 = firstValueGeneric<string | number >(["a","b","c"]);
out1.toUpperCase(); // error because type is string | number, not just string

function firstValueGenericT>(arg:T[]){
    return arg[0];  
}

interface User{
    name: string,
    email: string,
   password : number,
    phone?: number // optional field
}

let user1: User = {
    adharNumer: 1234567890, // error because adharNumber is not defined in User interface
    name : "sparsh",
    email : "abcdef",
    phone:25632,
    password: 12345
}

//this will give error as phone number is missing
//so we need to make it optional ---> so we can do it with ? operator
let user3:User = {
    name : "sparsh",
    email : "abcdef",
    password: 12345
}