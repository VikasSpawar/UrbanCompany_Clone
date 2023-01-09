import React from "react";






const initState={
  tempData:[]
  ,
  isLoading:false,
  isError:false
}



const reducer = (state=initState,action) => {
  switch(action.type){
    
    case GET_PRODUCT_DATA:
      return {...state,isLoading:false,isError:false,tempData:action.payload}
    default : 
    return state

  }
};

export  {reducer};
