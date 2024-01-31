//Dilemma :
//Since JS is single threaded but isn't i tvery inefficient since its synchronous bcoz you're fetching data from another server/database(not in our hands whether how much time another server is going to take time to fetch) if any errors or timelapses am I going to wait or get blocked.
//no need to worry since JS has this Non-Blocking Behaviour or have Aysnchronous operations(do somethings under the hood)
//which is : get this data, continue your other operations, when you get the data inform me and do that particular operation 
//therefore there are provisions to handle async operations, i.e - when you get the data which are:
//Callbacks 
//if multiple callbacks i.e you're waiting for multiple data to be fetched.
//event queue
//event loop 

// workdflow :
// register a callback -> put it into event queue -> (after operation is complete) -> waiting for it to be picked up by the event loop.

function fetchData(callback){ //CallBack : Its a function that is passed, to be called when some operation has finished.
    //i.e - here, to handle the data after receiving it.
    setTimeout(() => {
        let data='fetched data'
        callback(data,'server error');
    },5000); //5000 in millisecs
    // when this is done I want to handle the data - callback
}

//This can be called ATLEAST 5 secs later depends on event queue if there exits multiple operations then waits for the event loop to pick it up.
function handleData(data,error){//The actual CALLBACK  function, Called after 5 secs, Where is it stored ?
    if(error){
        console.error(error);
    }else{
        console.log(data);
    }
}

fetchData(handleData);

//Problems with callback - CallBack Hell, Pyramid of Doom, Inversion of control: depending on other functions too much.
//not readable, error handling: a nightmare

//for example : registration for an app when you have to wait for OTP
//swiggy, Zomato etc
asyncOperation1(arg1 , (result1)=>{
    asyncOperation2(result1 , (result2)=>{
        asyncOperation3(result2 , (result3)=>{
            //More Nested callbacks 
            asyncOperation1(result3 , (result4)=>{
                // and so on    
            });
        });
    }); 
});