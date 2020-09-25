 //declaring initialState
 const initialState = [{
}]

//creating reducer to update store
const reducer = (state=initialState,action)=>{
    if(action.type=="UPDATE")
    {
        return [
            ...state,
            action.payload
        ]
           
        
    }
    if(action.type=="DELETE")
    {
        return [
            ...state.filter(item=>
                JSON.stringify(item) !==JSON.stringify(action.payload))
        ]
           
        
    }
    return state;
}
export default reducer;