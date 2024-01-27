const redux= require("redux")
const createStore= redux.createStore

const CAKE_ORDERED="CAKE_ORDERED"

// ACTION CREATOR
function orderCake(){
    // ACTIONS
    return{
        type:CAKE_ORDERED,
        quantity:1
    }
}

// Single Store(State) for entire App
const initialState={
    noOfCakes:10
}

// REDUCER - (prevState,action)=>newState

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                noOfCakes:state.noOfCakes-1
            }
            default: return state
    }
}

// STORE- takes reducer as an argument
const store=createStore(reducer)
console.log("Initial State", store.getState())

const unsubscribe= store.subscribe( () => console.log("Updated State",store.getState()) )

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()
