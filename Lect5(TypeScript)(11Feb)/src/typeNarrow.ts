//union type and generic difference 
// union type is a type that can be one of several types


function foo(arg: string | number | boolean){
    if(typeof(arg) == "string"){
        return arg.toUpperCase();

    }   
    return arg; 
}

foo("a");

interface User{
    name : string,
    email : string,
    password : string
    phone?:number 
}

let user1: User={
    name: "sdfgh",
    email: "sdfgh",
    password: "abcdfg",
    phone: 1234567890
}

//this is know as typenarrowing...
//we use the typeof operator for this 
let user2: User ={
    name : "sdfgh",
    email : "sdfgh",
    password:"abcdfg"
}


function getPhone(user: User){
    if("phone"  in user){
        return user.phone;
    }
    return 0;
}

left phone: number = getPhone(user2);

//in order to make all the utility function ready only..we use generic type and utility type..we will see in next lecture..
