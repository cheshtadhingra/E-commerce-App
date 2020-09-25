//importing action file 
import {products} from './action'

//exporting mapping state to props
export const mapStateToProps = (state)=>{
    return{
      mycart: state
    }
  }
  
  //exporting  dispacth state for reducer
  export const dispatchState = (dispatch)=>{
    return{
      cart:(item,dispatchState)=>{
        dispatch(products(item,dispatchState))
      },
    }
  }