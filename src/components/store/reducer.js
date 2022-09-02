const initialState={
    jsonData:null,
    homeJsonData:null
 }
 
 const reducerElement = (state=initialState,action)=>{
     if(action.type==="FETCH"){
         return{
             ...state,
             jsonData:action.payload
         }
     }
     if(action.type==="FETCHHOMEDATA"){
        return{
            ...state,
            homeJsonData:action.payload
        }
    }
     return{
         ...state
     }
 }
 
 export default reducerElement