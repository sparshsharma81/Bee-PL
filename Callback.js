function getUser(callback){
    setTimeout(()=>{
        callback("hihihihi");
    
    },1000)
}

getUser((data)=>{
    console.log(data);
})

/*
the callback function has several drawbacks 


*/


setTimeout(()=>{
    console.log("First");
    setTimeout(()=>{
        console.log("second");

        setTimeout(()=>{
            console.log("Third");
        },2000);

    },2000);
},2000);

/*
CALLBACK HELL
this is known as callback hell 
/this is callback function inside callback inside callback function 

while printing it takes time but it will get printed 


Now in order to finish this problem..we have promises
which have 2 startes resolve and reject,, and third is also pending
 

promise is an object which is used to handle asynchronous operation

PENDING STATE: when the promise is created it is in pending state
//the pending state is the time when the asynchronous operation is being performed

RESOLVED STATE: when the asynchronous operation is completed successfully
 the promise is said to be resolved

REJECTED STATE: when the asynchronous operation fails due to some error
 the promise is said to be rejected


 */

