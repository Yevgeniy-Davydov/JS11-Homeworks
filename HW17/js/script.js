"use strict"

const getUserInfo = async () => {
    const response = await fetch('/api/for/user');
    const userInfo = await response.json();
  
    return userInfo;
  };
  

  const retry = async (func, object) => {

    try{
        let i = 1;
        while (i <= object.retries){
            const response = await func();
            if(!response.ok){
              throw new Error("something went wrong");
            } else {
               return response;
            }
            i++
        }
        
    }catch(error){
        console.error("can't get the data")
  
    }
  } ;
  retry(getUserInfo, { retries: 3 });
  