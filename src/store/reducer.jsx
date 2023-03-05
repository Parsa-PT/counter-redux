import * as actionType from '../action'

const initioalState = {
    counter : 0,
    result : []
}

const reducer = (state = initioalState  , action) => {
    switch(action.type){
        case actionType.INCREMENT : 
            return {
                ...state,
                counter : state.counter + 1
            }
        case actionType.DECREMENT : 
        return{
            ...state,
            counter : state.counter + -1
        }

        case actionType.ADD : 
        return{
            ...state,
            counter : state.counter + action.value
        }

        case actionType.SUB : 
        return{
            ...state,
            counter : state.counter + action.value
        }


        case actionType.RESULT : 
        return{
            ...state,
            result : state.result.concat(state.counter)
        }

        default : return state
    }
    
}

export default reducer
